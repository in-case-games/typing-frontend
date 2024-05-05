import { TypingStatus } from '../enums/typing-status.enum';
import { LessonItemModel } from './lesson-item.model';
import { ResultDisplayModel } from './result-display.model';
import { TypingCharacterModel } from './typing-character.model';

export class TypingResultsModel {
	public numberMistakes: number = 0;
	public numberMisses: number = 0;
	public numberDone: number = 0;
	public accuracy: number = 0.0;
	public secondsSpent: number = 0.0;
	public allChars: number = 0;
	public wpm: number = 0;

	public display: ResultDisplayModel[];

	constructor(lesson: LessonItemModel) {
		this.CreateResults(lesson);
	}

	public CreateResults(lesson: LessonItemModel) {
		let chars: TypingCharacterModel[] = [];

		for (let word of lesson.words) {
			chars = [...chars, ...word.chars];
		}

		const words: number = Math.round(chars.length / 5);

		this.numberDone = Math.round(
			chars.filter(c => c.status === TypingStatus.Done).length
		);

		if (this.numberDone !== chars.length) {
			this.numberMistakes = chars.filter(
				c => c.status === TypingStatus.Mistake
			).length;

			if (this.numberDone + this.numberMistakes !== chars.length) {
				this.numberMisses = chars.filter(
					c => c.status === TypingStatus.Miss
				).length;
			}
		}

		this.accuracy =
			Number.parseFloat(this.numberDone.toString()) /
			Number.parseFloat(chars.length.toString());
		this.secondsSpent =
			(lesson.endDate.getTime() - lesson.startDate.getTime()) / 1000;
		this.wpm =
			(Number.parseFloat(words.toString()) /
				Number.parseFloat(this.secondsSpent.toString())) *
			60.0 *
			this.accuracy;

		if (this.wpm > 500 || !Number.isFinite(this.wpm)) {
			this.wpm = 500;
			this.accuracy = 0;
			//TODO: убрать зачет результатов
		}

		this.display = [
			new ResultDisplayModel(Math.round(this.wpm).toString(), 'WPM'),
			new ResultDisplayModel(
				Math.round(this.accuracy * 100).toString() + '%',
				'Точность'
			),
			new ResultDisplayModel(Math.round(words).toString(), 'Слов'),
			new ResultDisplayModel(Math.round(chars.length).toString(), 'Символов'),
			new ResultDisplayModel(
				Math.round(this.secondsSpent).toString(),
				'Секунд'
			),
		];
	}
}
