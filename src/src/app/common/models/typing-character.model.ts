import { KeyCode } from '../enums/key-code.enum';
import { TypingStatus } from '../enums/typing-status.enum';
import { KeyModel } from './key.model';
import { LessonParamsModel } from './lesson-params.model';

export class TypingCharacterModel {
	public key: KeyModel;
	public isSeparating: boolean;
	public status: TypingStatus = TypingStatus.Wait;
	public attempts: number = 0;

	constructor(isSeparating: boolean, key: KeyModel = null) {
		this.isSeparating = isSeparating;

		if (key) {
			this.key = key;
		}
	}

	public Next($event: any, params: LessonParamsModel): boolean {
		if (
			$event.code === this.key.code ||
			$event.key === this.key.display ||
			($event.code === KeyCode.KeyT && this.key.code === KeyCode.Backquote)
		) {
			if (this.attempts < params.maxCharAttempt) {
				this.status = TypingStatus.Done;
			} else {
				this.status = TypingStatus.Mistake;
			}
			return true;
		} else if (params.allowErrors) {
			this.attempts += 1;
			this.status = TypingStatus.Miss;
			return true;
		}

		return false;
	}

	public Previous(): boolean {
		this.status = TypingStatus.Wait;
		return true;
	}
}
