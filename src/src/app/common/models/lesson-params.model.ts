import { KeyCode } from '../enums/key-code.enum';
import { KeyFinger } from '../enums/key-finger.enum';
import { KeyModel } from './key.model';
import { TypingCharacterModel } from './typing-character.model';

export class LessonParamsModel {
	public readonly includedCharacters: TypingCharacterModel[] = [];
	public readonly includedSeparating: TypingCharacterModel[] = [
		new TypingCharacterModel(
			false,
			new KeyModel(' ', KeyCode.Space, KeyFinger.Big)
		),
	];
	public readonly ignoreChars: TypingCharacterModel[];
	public readonly maxWords: number = 50;
	public readonly maxCharForWord: number = 5;
	public readonly maxCharAttempt: number = 1;
	public readonly allowErrors: boolean = true;
	public readonly enablePreview: boolean = false;

	constructor(
		includedCharacters: TypingCharacterModel[],
		ignoreChars: TypingCharacterModel[],
		allowErrors: boolean = true,
		includeSeparating: TypingCharacterModel[] = [
			new TypingCharacterModel(
				false,
				new KeyModel(' ', KeyCode.Space, KeyFinger.Big)
			),
		],
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
