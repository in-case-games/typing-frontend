import { LessonConstants } from '../constants/lesson.constants';
import { KeyModel } from './key.model';

export class Keyboard {
	public readonly layout: KeyModel[][] = LessonConstants.KeyboardLayoutRu;

	public activeKey: KeyModel | undefined = undefined;

	constructor(layout: KeyModel[][] = LessonConstants.KeyboardLayoutRu) {
		this.layout = layout;
	}
}
