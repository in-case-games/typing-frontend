import { DegreeDifficulty } from 'src/app/common/enums/degree-difficulty.enum';
import { LessonItemModel } from 'src/app/common/models/lesson-item.model';
import { LessonParamsModel } from '../models/lesson-params.model';
import { TypingCharacterModel } from '../models/typing-character.model';

export class LessonConstants {
	public static DefaultIgnoreChars: TypingCharacterModel[] = [
		new TypingCharacterModel('Control'),
		new TypingCharacterModel('Shift'),
		new TypingCharacterModel('Alt'),
	];

	public static GetDefaultLessons(): LessonItemModel[] {
		return [
			new LessonItemModel(
				'ао оа',
				DegreeDifficulty.Easy,
				new LessonParamsModel(['а', 'о'], this.DefaultIgnoreChars)
			),
			new LessonItemModel(
				'вл лв',
				DegreeDifficulty.Easy,
				new LessonParamsModel(['в', 'л'], this.DefaultIgnoreChars)
			),
			new LessonItemModel(
				'ыд ды',
				DegreeDifficulty.Middle,
				new LessonParamsModel(['ы', 'д'], this.DefaultIgnoreChars)
			),
			new LessonItemModel(
				'фж жф',
				DegreeDifficulty.Hard,
				new LessonParamsModel(['ф', 'ж'], this.DefaultIgnoreChars)
			),
			new LessonItemModel(
				'пр рп',
				DegreeDifficulty.Easy,
				new LessonParamsModel(['п', 'р'], this.DefaultIgnoreChars)
			),
		];
	}
}
