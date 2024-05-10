import { TypingStatus } from '../enums/typing-status.enum';
import { LessonParamsModel } from './lesson-params.model';
import { TypingCharacterModel } from './typing-character.model';

export class TypingWordModel {
	public chars: TypingCharacterModel[] = [];
	public status: TypingStatus = TypingStatus.Wait;
	public positionCharacter: number = 0;

	public Next($event: any, params: LessonParamsModel): boolean {
		if (this.chars[this.positionCharacter].Next($event, params)) {
			this.positionCharacter += 1;

			if (
				this.positionCharacter + 1 > this.chars.length ||
				params.includedSeparating.findIndex(s => s.key.code === $event.code) >
					-1
			) {
				this.positionCharacter -= 1;

				if (this.chars.findIndex(c => c.status == TypingStatus.Miss) > -1) {
					this.status = TypingStatus.Miss;
				} else if (
					this.chars.findIndex(c => c.status == TypingStatus.Mistake) > -1
				) {
					this.status = TypingStatus.Mistake;
				} else {
					this.status = TypingStatus.Done;
				}
			}

			return true;
		}

		return false;
	}

	public Previous(): boolean {
		if (this.chars[this.positionCharacter].Previous()) {
			if (this.positionCharacter === 0) {
				this.status = TypingStatus.Wait;
			} else {
				this.positionCharacter -= 1;
			}

			return true;
		}

		return false;
	}
}
