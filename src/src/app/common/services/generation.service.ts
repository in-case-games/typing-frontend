import { Injectable } from '@angular/core';
import { TypingStatus } from '../enums/typing-status.enum';
import { IGenerationService } from '../interfaces/generation.interface';
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
						params.includedCharacters[includedCharacterId]
					)
				);
			}

			if (i !== params.maxWords - 1) {
				let includedSeparatingId: number = this.GenerateRandomNumber(
					0,
					params.includedSeparating.length - 1
				);
				let separating = params.includedSeparating[includedSeparatingId];
				word.chars.push(new TypingCharacterModel(true, separating));
			}

			if (i === 0) {
				word.status = TypingStatus.Active;
				word.chars[0].status = TypingStatus.Active;
			}

			words.push(word);
		}

		return words;
	}
}
