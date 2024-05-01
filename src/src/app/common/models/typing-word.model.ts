import { TypingStatus } from '../enums/typing-status.enum';
import { LessonParamsModel } from './lesson-params.model';
import { TypingCharacterModel } from './typing-character.model';

export class TypingWordModel {
	public chars: TypingCharacterModel[] = [];
	public status: TypingStatus = TypingStatus.Wait;
	public positionCharacter: number = 0;

	public Next($event: any, params: LessonParamsModel): void {
		this.chars[this.positionCharacter].Next($event, params);
		this.positionCharacter += 1;

		if (
			this.positionCharacter + 1 > this.chars.length ||
			params.includedSeparating.indexOf($event.key) > -1
		) {
			this.positionCharacter -= 1;
			this.status = $event.key === ' ' ? TypingStatus.Miss : TypingStatus.Done;
		}
	}

	public Previous(): void {}
}
