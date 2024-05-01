import { TypingStatus } from '../enums/typing-status.enum';
import { TypingCharacterModel } from './typing-character.model';

export class TypingWordModel {
	public chars: TypingCharacterModel[] = [];
	public status: TypingStatus = TypingStatus.Wait;
	public positionCharacter: number = 0;
}
