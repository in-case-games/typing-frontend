import { LessonConstants } from '../constants/lesson.constants';
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
	public readonly includedPunctuationMarks: TypingCharacterModel[] = [];
	public readonly ignoreChars: TypingCharacterModel[] =
		LessonConstants.DefaultIgnoreChars;
	public readonly maxWords: number = 50;
	public readonly maxCharForWord: number = 5;
	public readonly maxCharAttempt: number = 1;
	public readonly allowErrors: boolean = true;
	public readonly allowCapitalLetters: boolean = false;
	public readonly allowNumbers: boolean = false;
	public readonly enablePreview: boolean = false;
	public enableFishText: boolean = false;

	constructor(
		includedChars: string[],
		includeSeparating: TypingCharacterModel[] = [
			new TypingCharacterModel(
				false,
				new KeyModel(' ', KeyCode.Space, KeyFinger.Big)
			),
		],
		includedPunctuationMarks: TypingCharacterModel[] = [],
		ignoreChars: TypingCharacterModel[] = LessonConstants.DefaultIgnoreChars,
		maxWords: number = 50,
		maxCharForWord: number = 5,
		maxCharAttempt: number = 1,
		allowErrors: boolean = true,
		allowCapitalLetters: boolean = false,
		allowNumbers: boolean = false,
		enablePreview: boolean = false,
		enableFishText: boolean = false
	) {
		this.includedCharacters = [];

		for (let char of includedChars) {
			let key: KeyModel;

			LessonConstants.KeyboardLayoutRu.find(v =>
				v.find(va => {
					if (va.display === char) {
						key = va;
						return true;
					}
					return false;
				})
			);

			this.includedCharacters.push(new TypingCharacterModel(false, key.Copy()));
		}
		this.includedSeparating = includeSeparating;
		this.includedPunctuationMarks = includedPunctuationMarks;
		this.ignoreChars = ignoreChars;
		this.maxWords = maxWords;
		this.maxCharForWord = maxCharForWord;
		this.maxCharAttempt = maxCharAttempt;
		this.allowErrors = allowErrors;
		this.allowCapitalLetters = allowCapitalLetters;
		this.allowNumbers = allowNumbers;
		this.enablePreview = enablePreview;
		this.enableFishText = enableFishText;
	}
}
