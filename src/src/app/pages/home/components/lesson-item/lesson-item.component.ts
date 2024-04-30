import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LessonItemModel } from 'src/app/common/models/lesson-item.model';

@Component({
	selector: 'lesson-item',
	standalone: true,
	imports: [NgClass],
	templateUrl: `./lesson-item.component.html`,
	styleUrls: ['./lesson-item.component.scss'],
})
export class LessonItemComponent {
	@Input()
	public lesson: LessonItemModel;
}
