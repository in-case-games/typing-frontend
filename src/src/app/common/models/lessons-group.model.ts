import { LessonItemModel } from './lesson-item.model';

export class LessonsGroupModel {
	public readonly title: string;
	public readonly lessons: LessonItemModel[] = [];

	constructor(title: string, lessons: LessonItemModel[]) {
		this.title = title;
		this.lessons = lessons;
	}
}
