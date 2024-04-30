import { DegreeDifficulty } from 'src/app/common/enums/degree-difficulty.enum';
import { LessonItemModel } from 'src/app/common/models/lesson-item.model';
import { LessonParamsModel } from '../models/lesson-params.model';

export class LessonConstants {
	public static DefaultLessons: LessonItemModel[] = [
		new LessonItemModel(
			'ао оа',
			DegreeDifficulty.Easy,
			new LessonParamsModel(['а', 'о'])
		),
		new LessonItemModel(
			'вл лв',
			DegreeDifficulty.Easy,
			new LessonParamsModel(['в', 'л'])
		),
		new LessonItemModel(
			'ыд ды',
			DegreeDifficulty.Middle,
			new LessonParamsModel(['ы', 'д'])
		),
		new LessonItemModel(
			'фж жф',
			DegreeDifficulty.Hard,
			new LessonParamsModel(['ф', 'ж'])
		),
		new LessonItemModel(
			'пр рп',
			DegreeDifficulty.Easy,
			new LessonParamsModel(['п', 'р'])
		),
	];
}
