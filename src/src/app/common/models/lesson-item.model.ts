import { DegreeDifficulty } from '../enums/degree-difficulty.enum';
import { LessonParamsModel } from './lesson-params.model';
import { TypingWordModel } from './typing-word.model';

export class LessonItemModel {
	public readonly topic: string;
	public readonly degreeDifficulty: DegreeDifficulty;
	public readonly color: string;
	public readonly params: LessonParamsModel;

	private _words: TypingWordModel[] = [];

	public get words(): TypingWordModel[] {
		return this._words;
	}
	public set words(w: TypingWordModel[]) {
		if (
			w.length >
			this.params.maxWords * (this.params.separating.char.length > 0 ? 2 : 1)
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
}
