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
	public carriageMargin: number = 0;
	public carriageMarginStart: number = 0;
	public carriageMarginLock: boolean = false;
	public isEnd: boolean = false;
	public isStart: boolean = false;

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

	public Next($event: any): void {
		if (
			this.isEnd ||
			!$event ||
			!$event.key ||
			this.params.ignoreChars.map(e => e.char).indexOf($event.key) > -1
		) {
			return;
		}
		if (
			!this.isStart &&
			!this.params.enablePreview &&
			this.positionWord === 0 &&
			this.words[this.positionWord].positionCharacter === 0
		) {
			this.isStart = $event.key === ' ';
			return;
		}

		let word = this.words[this.positionWord];
		let positionCharacter = word.positionCharacter;

		if (!word.Next($event, this.params)) {
			return;
		}

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

		if (this.positionWord + 1 > this.words.length) {
			this.isEnd = true;
		}

		this.ChangeCarriageMargin(true);

		return;
	}

	public Previous($event: any): void {
		if (
			this.isEnd ||
			!$event ||
			!$event.key ||
			$event.key !== 'Backspace' ||
			this.params.ignoreChars.map(e => e.char).indexOf($event.key) > -1 ||
			this.positionWord + 1 > this.words.length
		) {
			return;
		}

		let word = this.words[this.positionWord];
		let positionCharacter = word.positionCharacter;

		if (
			!this.params.allowErrors ||
			(this.positionWord === 0 && word.positionCharacter === 0)
		) {
			return;
		}

		if (!word.Previous()) return;

		if (positionCharacter === 0) {
			this.positionWord -= 1;
			this.words[this.positionWord].status = TypingStatus.Active;
			word = this.words[this.positionWord];
		}

		this.words[this.positionWord].chars[word.positionCharacter].status =
			TypingStatus.Active;

		this.ChangeCarriageMargin(false);
	}

	public ChangeCarriageMargin(next: boolean): void {
		if (this.carriageMarginLock) return;

		let carriages = Array.from(document.getElementsByClassName('carriage'));
		let carriageActiveIndex = carriages.findIndex(c =>
			c.classList.contains('carriage__active')
		);

		let carriageNextIndex = next
			? carriageActiveIndex + 1
			: carriageActiveIndex - 1;

		if (carriageNextIndex >= 0 && carriageNextIndex < carriages.length) {
			if (this.carriageMarginStart === 0) {
				this.carriageMarginStart =
					carriages[carriageNextIndex].getBoundingClientRect().top;
			}

			const carriageNextY =
				carriages[carriageNextIndex].getBoundingClientRect().top;

			if (carriageNextY - this.carriageMarginStart !== 0) {
				this.carriageMarginLock = true;
				this.carriageMargin += carriageNextY - this.carriageMarginStart;

				setTimeout(() => {
					this.carriageMarginLock = false;
				}, 300); //TODO: Необходимо автоматически менять таймаут timeout == --typing-carriage-transition__new-line-duration
			}
		}
	}
}
