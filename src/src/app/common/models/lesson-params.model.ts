import { LessonConstants } from '../constants/lesson.constants';
import { KeyCode } from '../enums/key-code.enum';
import { KeyFinger } from '../enums/key-finger.enum';
import { GlobalLessonParams } from './global-lesson-params.model';
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
	public maxWords: number = 50;
	public maxCharForWord: number = 5;
	public maxCharAttempt: number = 1;
	public allowErrors: boolean = false;
	public allowCapitalLetters: boolean = false;
	public allowNumbers: boolean = false;
	public enablePreview: boolean = false;
	public enableFishText: boolean = false;
	public enableKeyboardHint: boolean = true;
	public enableHandHint: boolean = true;

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
		allowErrors: boolean = false,
		allowCapitalLetters: boolean = false,
		allowNumbers: boolean = false,
		enablePreview: boolean = false,
		enableFishText: boolean = false,
		enableKeyboardHint: boolean = true,
		enableHandHint: boolean = true
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
		this.enableKeyboardHint = enableKeyboardHint;
		this.enableHandHint = enableHandHint;
	}

	public PullGlobalParams(params: GlobalLessonParams) {
		this.maxWords = params.maxWords;
		this.maxCharForWord = params.maxCharForWord;
		this.maxCharAttempt = params.maxCharAttempt;
		this.allowErrors = params.allowErrors;
		this.allowCapitalLetters = params.allowCapitalLetters;
		this.allowNumbers = params.allowNumbers;
		this.enablePreview = params.enablePreview;
		this.enableFishText = params.enableFishText;
		this.enableKeyboardHint = params.enableKeyboardHint;
		this.enableHandHint = params.enableHandHint;
	}
}
