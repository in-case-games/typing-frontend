import { Injectable } from '@angular/core';
import { LessonConstants } from '../constants/lesson.constants';
import { TypingStatus } from '../enums/typing-status.enum';
import { IGenerationService } from '../interfaces/generation.interface';
import { KeyModel } from '../models/key.model';
import { LessonItemModel } from '../models/lesson-item.model';
import { LessonParamsModel } from '../models/lesson-params.model';
import { TypingCharacterModel } from '../models/typing-character.model';
import { TypingWordModel } from '../models/typing-word.model';

@Injectable()
export class GenerationService implements IGenerationService {
	GenerateRandomNumber(min: number, max: number): number {
		min = Math.ceil(min);
		max = Math.floor(max);

		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	RandomSelectionWordsByLesson(lesson: LessonItemModel): TypingWordModel[] {
		return this.RandomSelectionWordsByCharacters(lesson.params);
	}

	RandomSelectionWordsByCharactersWithFishText(
		lesson: LessonItemModel,
		fishText: string
	): TypingWordModel[] {
		lesson.params.enableFishText = true;

		const fishTextWords = this.GetNormalizationFormFishText(lesson, fishText);
		let words: TypingWordModel[] = [];

		for (let i = 0; i < fishTextWords.length; i++) {
			let word: TypingWordModel = new TypingWordModel();

			for (let char of fishTextWords[i]) {
				let key: KeyModel;

				LessonConstants.KeyboardLayoutRu.find(v =>
					v.find(va => {
						if (va.display === char) {
							key = va;
							return true;
						}
						return false;
					})
				);

				word.chars.push(new TypingCharacterModel(false, key.Copy()));
			}

			if (i !== lesson.params.maxWords - 1) {
				let includedSeparatingId: number = this.GenerateRandomNumber(
					0,
					lesson.params.includedSeparating.length - 1
				);
				let separating = lesson.params.includedSeparating[includedSeparatingId];
				word.chars.push(new TypingCharacterModel(true, separating.key.Copy()));
			}

			if (i === 0) {
				word.status = TypingStatus.Active;
				word.chars[0].status = TypingStatus.Active;
			}

			words.push(word);
		}

		return words;
	}

	RandomSelectionWordsByCharacters(
		params: LessonParamsModel
	): TypingWordModel[] {
		let words: TypingWordModel[] = [];

		for (let i = 0; i < params.maxWords; i++) {
			let word: TypingWordModel = new TypingWordModel();
			let maxWord: number = this.GenerateRandomNumber(1, params.maxCharForWord);

			for (let j = 0; j < maxWord; j++) {
				let includedCharacterId: number = this.GenerateRandomNumber(
					0,
					params.includedCharacters.length - 1
				);
				word.chars.push(
					new TypingCharacterModel(
						false,
						params.includedCharacters[includedCharacterId].key.Copy()
					)
				);
			}

			if (i !== params.maxWords - 1) {
				let includedSeparatingId: number = this.GenerateRandomNumber(
					0,
					params.includedSeparating.length - 1
				);
				let separating = params.includedSeparating[includedSeparatingId];
				word.chars.push(new TypingCharacterModel(true, separating.key.Copy()));
			}

			if (i === 0) {
				word.status = TypingStatus.Active;
				word.chars[0].status = TypingStatus.Active;
			}

			words.push(word);
		}

		return words;
	}

	GetNormalizationFormFishText(
		lesson: LessonItemModel,
		fishText: string
	): string[] {
		const marks = [
			',',
			':',
			'!',
			'/',
			'|',
			'\\',
			'—',
			'-',
			')',
			'(',
			'.',
			'  ',
			'\t',
			'\n',
		];
		let suitable: Map<string, number> = new Map<string, number>();

		if (!lesson.params.allowCapitalLetters) {
			fishText = fishText.toLowerCase();
		}

		for (let mark of marks) {
			if (
				lesson.params.includedPunctuationMarks.findIndex(
					m => m.key.display === mark
				) === -1
			) {
				fishText = fishText.replaceAll(mark, '');
			}
		}

		const words = fishText.split(' ');
		let applyWord: string[] = [];

		if (lesson.params.includedCharacters.length > 0) {
			for (let word of words) {
				if (word.length > lesson.params.maxCharForWord) continue;

				let coincidence = 0;

				for (let char of lesson.params.includedCharacters) {
					const matches = word.match(new RegExp(char.key.display, 'g'));

					coincidence += matches ? matches.length : 0;
				}

				suitable.set(word, coincidence);
			}

			applyWord = Array.from(suitable)
				.sort((a, b) => b[1] - a[1])
				.slice(0, lesson.params.maxWords)
				.map(v => v[0]);
		} else {
			for (let word of words) {
				if (applyWord.length >= lesson.params.maxWords) break;
				if (word.length > lesson.params.maxCharForWord) continue;

				applyWord.push(word);
			}
		}

		return applyWord;
	}
}
