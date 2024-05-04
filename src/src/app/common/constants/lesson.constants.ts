import { DegreeDifficulty } from 'src/app/common/enums/degree-difficulty.enum';
import { LessonItemModel } from 'src/app/common/models/lesson-item.model';
import { Language } from '../enums/language.enum';
import { LessonParamsModel } from '../models/lesson-params.model';
import { TypingCharacterModel } from '../models/typing-character.model';

export class LessonConstants {
	public static DefaultIgnoreChars: TypingCharacterModel[] = [
		new TypingCharacterModel(false, 'Control'),
		new TypingCharacterModel(false, 'Shift'),
		new TypingCharacterModel(false, 'Alt'),
	];

	public static GetDefaultLessons(): LessonItemModel[] {
		return [
			new LessonItemModel(
				'ао оа',
				Language.Russian,
				DegreeDifficulty.Easy,
				new LessonParamsModel(['а', 'о'], this.DefaultIgnoreChars, false)
			),
			new LessonItemModel(
				'вл лв',
				Language.Russian,
				DegreeDifficulty.Easy,
				new LessonParamsModel(['в', 'л'], this.DefaultIgnoreChars, true)
			),
			new LessonItemModel(
				'ыд ды',
				Language.Russian,
				DegreeDifficulty.Middle,
				new LessonParamsModel(['ы', 'д'], this.DefaultIgnoreChars, false)
			),
			new LessonItemModel(
				'фж жф',
				Language.Russian,
				DegreeDifficulty.Hard,
				new LessonParamsModel(['ф', 'ж'], this.DefaultIgnoreChars, false)
			),
			new LessonItemModel(
				'пр рп',
				Language.Russian,
				DegreeDifficulty.Easy,
				new LessonParamsModel(['п', 'р'], this.DefaultIgnoreChars, false)
			),
		];
	}
}
