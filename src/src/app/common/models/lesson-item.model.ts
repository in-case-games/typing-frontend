import { DegreeDifficulty } from '../enums/degree-difficulty.enum';
import { Language } from '../enums/language.enum';
import { TypingStatus } from '../enums/typing-status.enum';
import { LessonParamsModel } from './lesson-params.model';
import { TypingWordModel } from './typing-word.model';

export class LessonItemModel {
	public readonly topic: string;
	public readonly degreeDifficulty: DegreeDifficulty;
	public readonly color: string;
	public readonly params: LessonParamsModel;
	public readonly language: Language;

	public positionWord: number = 0;

	public words: TypingWordModel[] = [];

	constructor(
		topic: string,
		language: Language,
		degreeDifficulty: DegreeDifficulty,
		params: LessonParamsModel,
		words: TypingWordModel[] = []
	) {
		this.topic = topic;
		this.language = language;
		this.degreeDifficulty = degreeDifficulty;
		this.params = params;
		this.words = words;
		this.color = `var(--lesson-item__${degreeDifficulty}-border-color)`;
	}

	public Next($event: any): boolean {
		if (
			!$event ||
			!$event.key ||
			this.params.ignoreChars.map(e => e.char).indexOf($event.key) > -1
		) {
			return false;
		}

		if (this.positionWord + 1 > this.words.length) {
			//end
			return true;
		}

		let word = this.words[this.positionWord];
		let positionCharacter = word.positionCharacter;

		word.Next($event, this.params);

		if (this.words[this.positionWord].positionCharacter === positionCharacter) {
			this.positionWord += 1;

			if (this.positionWord + 1 <= this.words.length) {
				this.words[this.positionWord].status = TypingStatus.Active;
				word = this.words[this.positionWord];
			}
		}

		if (this.positionWord + 1 <= this.words.length) {
			this.words[this.positionWord].chars[word.positionCharacter].status =
				TypingStatus.Active;
		}

		return false;
	}

	public Previous($event: any): void {
		if (
			!$event ||
			!$event.key ||
			$event.key !== 'Backspace' ||
			this.params.ignoreChars.map(e => e.char).indexOf($event.key) > -1 ||
			this.positionWord + 1 > this.words.length
		) {
			return;
		}

		let word = this.words[this.positionWord];

		if (this.positionWord == 0 && word.positionCharacter == 0) {
			return;
		} else if (word.positionCharacter == 0) {
			this.words[this.positionWord].chars[word.positionCharacter].status =
				TypingStatus.Wait;
			this.words[this.positionWord].status = TypingStatus.Wait;
			this.positionWord -= 1;
			this.words[this.positionWord].status = TypingStatus.Active;
			word = this.words[this.positionWord];
		} else {
			this.words[this.positionWord].chars[word.positionCharacter].status =
				TypingStatus.Wait;
			this.words[this.positionWord].positionCharacter -= 1;
		}

		this.words[this.positionWord].chars[word.positionCharacter].status =
			TypingStatus.Active;
	}
}
