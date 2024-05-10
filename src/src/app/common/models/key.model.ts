import { KeyCode } from '../enums/key-code.enum';
import { KeyFinger } from '../enums/key-finger.enum';
import { KeyFontSize } from '../enums/key-font-size.enum';
import { KeySize } from '../enums/key-size.enum';

export class KeyModel {
	public readonly display: string;
	public readonly code: KeyCode;
	public readonly finger: KeyFinger;
	public readonly fontSize: KeyFontSize;
	public readonly alt: boolean = false;
	public readonly shift: boolean = false;
	public readonly ctrl: boolean = false;
	public readonly size: KeySize = KeySize.Standard;

	constructor(
		display: string,
		code: KeyCode,
		finger: KeyFinger,
		size: KeySize = KeySize.Standard,
		fontSize: KeyFontSize = KeyFontSize.Standard,
		alt: boolean = false,
		shift: boolean = false,
		ctrl: boolean = false
	) {
		this.display = display;
		this.code = code;
		this.finger = finger;
		this.size = size;
		this.fontSize = fontSize;
		this.alt = alt;
		this.shift = shift;
		this.ctrl = ctrl;
	}

	public Copy(): KeyModel {
		return new KeyModel(
			this.display,
			this.code,
			this.finger,
			this.size,
			this.fontSize,
			this.alt,
			this.shift,
			this.ctrl
		);
	}
}
