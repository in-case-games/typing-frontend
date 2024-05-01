import { TypingStatus } from '../enums/typing-status.enum';
import { LessonParamsModel } from './lesson-params.model';

export class TypingCharacterModel {
	public char: string;
	public isSeparating: boolean;
	public status: TypingStatus = TypingStatus.Wait;
	public attempts: number = 0;
	public altKey: boolean = false;
	public shiftKey: boolean = false;
	public ctrlKey: boolean = false;
	public code: string = '';

	constructor(isSeparating: boolean, char: string = null) {
		this.isSeparating = isSeparating;

		if (char) {
			this.char = char;
		}
	}

	public Next($event: any, params: LessonParamsModel) {
		if ($event.key == this.char) {
			if (this.attempts < params.maxCharAttempt) {
				this.status = TypingStatus.Done;
			} else {
				this.status = TypingStatus.Mistake;
			}
		} else {
			this.attempts += 1;
			this.status = TypingStatus.Miss;
		}
	}
}
