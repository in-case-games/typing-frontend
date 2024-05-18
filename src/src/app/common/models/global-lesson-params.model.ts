export class GlobalLessonParams {
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
}
