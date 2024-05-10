import { DegreeDifficulty } from 'src/app/common/enums/degree-difficulty.enum';
import { LessonItemModel } from 'src/app/common/models/lesson-item.model';
import { KeyCode } from '../enums/key-code.enum';
import { KeyFinger } from '../enums/key-finger.enum';
import { KeyFontSize } from '../enums/key-font-size.enum';
import { KeySize } from '../enums/key-size.enum';
import { Language } from '../enums/language.enum';
import { KeyModel } from '../models/key.model';
import { LessonParamsModel } from '../models/lesson-params.model';
import { TypingCharacterModel } from '../models/typing-character.model';

export class LessonConstants {
	public static DefaultIgnoreChars: TypingCharacterModel[] = [
		new TypingCharacterModel(
			false,
			new KeyModel('Control', KeyCode.ControlLeft, KeyFinger.Indifference)
		),
		new TypingCharacterModel(
			false,
			new KeyModel('Shift', KeyCode.ShiftLeft, KeyFinger.Indifference)
		),
		new TypingCharacterModel(
			false,
			new KeyModel('Alt', KeyCode.AltLeft, KeyFinger.Indifference)
		),
		new TypingCharacterModel(
			false,
			new KeyModel('Control', KeyCode.ControlRight, KeyFinger.Indifference)
		),
		new TypingCharacterModel(
			false,
			new KeyModel('Shift', KeyCode.ShiftRight, KeyFinger.Indifference)
		),
		new TypingCharacterModel(
			false,
			new KeyModel('Alt', KeyCode.AltRight, KeyFinger.Indifference)
		),
	];

	public static GetDefaultLessons(): LessonItemModel[] {
		return [
			new LessonItemModel(
				'ао оа',
				Language.Russian,
				DegreeDifficulty.Easy,
				new LessonParamsModel(
					[
						new TypingCharacterModel(
							false,
							new KeyModel('а', KeyCode.KeyF, KeyFinger.IndexLeft)
						),
						new TypingCharacterModel(
							false,
							new KeyModel('о', KeyCode.KeyJ, KeyFinger.IndexRight)
						),
					],
					this.DefaultIgnoreChars,
					true
				)
			),
			new LessonItemModel(
				'вл лв',
				Language.Russian,
				DegreeDifficulty.Easy,
				new LessonParamsModel(
					[
						new TypingCharacterModel(
							false,
							new KeyModel('в', KeyCode.KeyD, KeyFinger.MiddleLeft)
						),
						new TypingCharacterModel(
							false,
							new KeyModel('л', KeyCode.KeyK, KeyFinger.MiddleRight)
						),
					],
					this.DefaultIgnoreChars,
					true
				)
			),
			new LessonItemModel(
				'ыд ды',
				Language.Russian,
				DegreeDifficulty.Middle,
				new LessonParamsModel(
					[
						new TypingCharacterModel(
							false,
							new KeyModel('ы', KeyCode.KeyS, KeyFinger.RingLeft)
						),
						new TypingCharacterModel(
							false,
							new KeyModel('д', KeyCode.KeyL, KeyFinger.RingRight)
						),
					],
					this.DefaultIgnoreChars,
					false
				)
			),
			new LessonItemModel(
				'фж жф',
				Language.Russian,
				DegreeDifficulty.Hard,
				new LessonParamsModel(
					[
						new TypingCharacterModel(
							false,
							new KeyModel('ф', KeyCode.KeyA, KeyFinger.PinkyLeft)
						),
						new TypingCharacterModel(
							false,
							new KeyModel('ж', KeyCode.Semicolon, KeyFinger.PinkyRight)
						),
					],
					this.DefaultIgnoreChars,
					false
				)
			),
			new LessonItemModel(
				'пр рп',
				Language.Russian,
				DegreeDifficulty.Easy,
				new LessonParamsModel(
					[
						new TypingCharacterModel(
							false,
							new KeyModel('п', KeyCode.KeyG, KeyFinger.IndexLeft)
						),
						new TypingCharacterModel(
							false,
							new KeyModel('р', KeyCode.KeyH, KeyFinger.IndexRight)
						),
					],
					this.DefaultIgnoreChars,
					true
				)
			),
		];
	}

	public static KeyboardLayoutRu: KeyModel[][] = [
		[
			new KeyModel('ё', KeyCode.Backquote, KeyFinger.PinkyLeft),
			new KeyModel('1', KeyCode.Digit1, KeyFinger.PinkyLeft),
			new KeyModel('2', KeyCode.Digit2, KeyFinger.PinkyLeft),
			new KeyModel('3', KeyCode.Digit3, KeyFinger.RingLeft),
			new KeyModel('4', KeyCode.Digit4, KeyFinger.MiddleLeft),
			new KeyModel('5', KeyCode.Digit5, KeyFinger.IndexLeft),
			new KeyModel('6', KeyCode.Digit6, KeyFinger.IndexLeft),
			new KeyModel('7', KeyCode.Digit7, KeyFinger.IndexRight),
			new KeyModel('8', KeyCode.Digit8, KeyFinger.MiddleRight),
			new KeyModel('9', KeyCode.Digit9, KeyFinger.RingRight),
			new KeyModel('0', KeyCode.Digit0, KeyFinger.PinkyRight),
			new KeyModel('-', KeyCode.Minus, KeyFinger.PinkyRight),
			new KeyModel('=', KeyCode.Equal, KeyFinger.PinkyRight),
			new KeyModel(
				'Backspace',
				KeyCode.Backspace,
				KeyFinger.Indifference,
				KeySize.Key200,
				KeyFontSize.Small
			),
		],
		[
			new KeyModel(
				'Tab',
				KeyCode.Tab,
				KeyFinger.Indifference,
				KeySize.Key150,
				KeyFontSize.Small
			),
			new KeyModel('й', KeyCode.KeyQ, KeyFinger.PinkyLeft),
			new KeyModel('ц', KeyCode.KeyW, KeyFinger.RingLeft),
			new KeyModel('у', KeyCode.KeyE, KeyFinger.MiddleLeft),
			new KeyModel('к', KeyCode.KeyR, KeyFinger.IndexLeft),
			new KeyModel('е', KeyCode.KeyT, KeyFinger.IndexLeft),
			new KeyModel('н', KeyCode.KeyY, KeyFinger.IndexRight),
			new KeyModel('г', KeyCode.KeyU, KeyFinger.IndexRight),
			new KeyModel('ш', KeyCode.KeyI, KeyFinger.MiddleRight),
			new KeyModel('щ', KeyCode.KeyO, KeyFinger.RingRight),
			new KeyModel('з', KeyCode.KeyP, KeyFinger.PinkyRight),
			new KeyModel('х', KeyCode.BracketLeft, KeyFinger.PinkyRight),
			new KeyModel('ъ', KeyCode.BracketRight, KeyFinger.PinkyRight),
			new KeyModel(
				'\\',
				KeyCode.BacksLash,
				KeyFinger.PinkyRight,
				KeySize.Key175,
				KeyFontSize.Small
			),
		],
		[
			new KeyModel(
				'Caps Lock',
				KeyCode.CapsLock,
				KeyFinger.Indifference,
				KeySize.Key225,
				KeyFontSize.Small
			),
			new KeyModel('ф', KeyCode.KeyA, KeyFinger.PinkyLeft),
			new KeyModel('ы', KeyCode.KeyS, KeyFinger.RingLeft),
			new KeyModel('в', KeyCode.KeyD, KeyFinger.MiddleLeft),
			new KeyModel('а', KeyCode.KeyF, KeyFinger.IndexLeft),
			new KeyModel('п', KeyCode.KeyG, KeyFinger.IndexLeft),
			new KeyModel('р', KeyCode.KeyH, KeyFinger.IndexRight),
			new KeyModel('о', KeyCode.KeyJ, KeyFinger.IndexRight),
			new KeyModel('л', KeyCode.KeyK, KeyFinger.MiddleRight),
			new KeyModel('д', KeyCode.KeyL, KeyFinger.RingRight),
			new KeyModel('ж', KeyCode.Semicolon, KeyFinger.PinkyRight),
			new KeyModel('э', KeyCode.Quote, KeyFinger.PinkyRight),
			new KeyModel(
				'Enter',
				KeyCode.Enter,
				KeyFinger.PinkyRight,
				KeySize.Key225,
				KeyFontSize.Small
			),
		],
		[
			new KeyModel(
				'Shift',
				KeyCode.ShiftLeft,
				KeyFinger.Indifference,
				KeySize.Key275,
				KeyFontSize.Small
			),
			new KeyModel('я', KeyCode.KeyZ, KeyFinger.PinkyLeft),
			new KeyModel('ч', KeyCode.KeyX, KeyFinger.RingLeft),
			new KeyModel('с', KeyCode.KeyC, KeyFinger.MiddleLeft),
			new KeyModel('м', KeyCode.KeyV, KeyFinger.IndexLeft),
			new KeyModel('и', KeyCode.KeyB, KeyFinger.IndexLeft),
			new KeyModel('т', KeyCode.KeyN, KeyFinger.IndexRight),
			new KeyModel('ь', KeyCode.KeyM, KeyFinger.IndexRight),
			new KeyModel('б', KeyCode.Coma, KeyFinger.MiddleRight),
			new KeyModel('ю', KeyCode.Period, KeyFinger.RingRight),
			new KeyModel('.', KeyCode.Slash, KeyFinger.PinkyRight),
			new KeyModel(
				'Shift',
				KeyCode.ShiftRight,
				KeyFinger.Indifference,
				KeySize.Key275,
				KeyFontSize.Small
			),
		],
		[
			new KeyModel(
				'Ctrl',
				KeyCode.ControlLeft,
				KeyFinger.Indifference,
				KeySize.Key125,
				KeyFontSize.Small
			),
			new KeyModel(
				'Cmd',
				KeyCode.MetaLeft,
				KeyFinger.Indifference,
				KeySize.Key125,
				KeyFontSize.Small
			),
			new KeyModel(
				'Alt',
				KeyCode.AltLeft,
				KeyFinger.Indifference,
				KeySize.Key125,
				KeyFontSize.Small
			),
			new KeyModel(
				' ',
				KeyCode.Space,
				KeyFinger.Big,
				KeySize.Key625,
				KeyFontSize.Small
			),
			new KeyModel(
				'Alt',
				KeyCode.AltRight,
				KeyFinger.Indifference,
				KeySize.Key125,
				KeyFontSize.Small
			),
			new KeyModel(
				'Cmd',
				KeyCode.MetaRight,
				KeyFinger.Indifference,
				KeySize.Key125,
				KeyFontSize.Small
			),
			new KeyModel(
				'Menu',
				KeyCode.ContextMenu,
				KeyFinger.Indifference,
				KeySize.Key125,
				KeyFontSize.Small
			),
			new KeyModel(
				'Ctrl',
				KeyCode.ControlRight,
				KeyFinger.Indifference,
				KeySize.Key125,
				KeyFontSize.Small
			),
		],
	];
}
