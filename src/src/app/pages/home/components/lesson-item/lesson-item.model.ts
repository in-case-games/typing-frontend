import { DegreeDifficulty } from 'src/app/components/common/enums/degree-difficulty.enum';

export class LessonItemModel {
	public readonly theme: string;
	public readonly degreeDifficulty: DegreeDifficulty;
	public readonly color: string;
}
