import { DegreeDifficulty } from '../enums/degree-difficulty.enum';
import { TypingStatus } from '../enums/typing-status.enum';
import { LessonParamsModel } from './lesson-params.model';
import { TypingWordModel } from './typing-word.model';

export class LessonItemModel {
	public readonly topic: string;
	public readonly degreeDifficulty: DegreeDifficulty;
	public readonly color: string;
	public readonly params: LessonParamsModel;

	public positionWord: number = 0;

	private _words: TypingWordModel[] = [];

	public get words(): TypingWordModel[] {
		return this._words;
	}
	public set words(w: TypingWordModel[]) {
		if (
			w.length >
			this.params.maxWords * (this.params.separating.length > 0 ? 2 : 1)
		) {
			console.log('Превышено количество слов в массиве 1');
		} else {
			this._words = w;
		}
	}

	constructor(
		topic: string,
		degreeDifficulty: DegreeDifficulty,
		params: LessonParamsModel,
		words: TypingWordModel[] = []
	) {
		this.topic = topic;
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

		let word = this.words[this.positionWord];

		this.words[this.positionWord].chars[word.positionCharacter].Next(
			$event,
			this.params
		);
		this.words[this.positionWord].positionCharacter += 1;

		if (word.positionCharacter + 1 > word.chars.length) {
			this.words[this.positionWord].positionCharacter -= 1;
			this.words[this.positionWord].status = TypingStatus.Done;

			if (
				this.positionWord + 2 >
				this.params.maxWords * (this.params.separating.length > 0 ? 2 : 1)
			) {
				//end
				return true;
			}

			this.positionWord += 1;
			this.words[this.positionWord].status = TypingStatus.Active;
			word = this.words[this.positionWord];
		}

		this.words[this.positionWord].chars[word.positionCharacter].status =
			TypingStatus.Active;

		return false;
	}

	public Previous($event: any): void {
		if (
			!$event ||
			!$event.key ||
			$event.key !== 'Backspace' ||
			this.params.ignoreChars.map(e => e.char).indexOf($event.key) > -1
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
