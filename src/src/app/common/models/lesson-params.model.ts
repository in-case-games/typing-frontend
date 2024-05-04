import { TypingCharacterModel } from './typing-character.model';

export class LessonParamsModel {
	public readonly includedCharacters: string[] = [];
	public readonly ignoreChars: TypingCharacterModel[];
	public readonly maxWords: number = 50;
	public readonly maxCharForWord: number = 5;
	public readonly maxCharAttempt: number = 1;
	public readonly allowErrors: boolean = true;
	public readonly includedSeparating: string[] = [' '];
	public readonly enablePreview: boolean = false;

	constructor(
		includedCharacters: string[],
		ignoreChars: TypingCharacterModel[],
		allowErrors: boolean = true,
		includeSeparating: string[] = [' '],
		maxWords: number = 50,
		maxCharForWord: number = 5,
		maxCharAttempt: number = 1,
		enablePreview: boolean = false
	) {
		this.includedCharacters = includedCharacters;
		this.ignoreChars = ignoreChars;
		this.maxWords = maxWords;
		this.maxCharForWord = maxCharForWord;
		this.maxCharAttempt = maxCharAttempt;
		this.allowErrors = allowErrors;
		this.includedSeparating = includeSeparating;
		this.enablePreview = enablePreview;
	}
}
