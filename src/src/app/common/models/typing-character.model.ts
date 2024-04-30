import { TypingStatus } from '../enums/typing-status.enum';

export class TypingCharacterModel {
	public char: string;
	public status: TypingStatus = TypingStatus.Wait;
	public attempts: number = 0;

	constructor(char: string = null) {
		if (char) {
			this.char = char;
		}
	}
}
