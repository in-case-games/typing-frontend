import { TypingCharacterModel } from './typing-character.model';

export class LessonParamsModel {
	public readonly includedCharacters: string[] = [];
	public readonly maxWords: number = 50;
	public readonly maxCharForWord: number = 5;
	public readonly maxCharAttempt: number = 1;
	public readonly allowErrors: boolean = true;
	public readonly separating: TypingCharacterModel = new TypingCharacterModel(
		' '
	);

	constructor(
		includedCharacters: string[],
		maxWords: number = 50,
		maxCharForWord: number = 5,
		maxCharAttempt: number = 1,
		allowErrors: boolean = true,
		separating: TypingCharacterModel = new TypingCharacterModel(' ')
	) {
		this.includedCharacters = includedCharacters;
		this.maxWords = maxWords;
		this.maxCharForWord = maxCharForWord;
		this.maxCharAttempt = maxCharAttempt;
		this.allowErrors = allowErrors;
		this.separating = separating;
	}
}
