import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LessonItemModel } from '../../common/models/lesson-item.model';

@Component({
	selector: 'hand-left',
	standalone: true,
	imports: [NgClass],
	templateUrl: `./hand-left.component.html`,
	styleUrls: ['./hand-left.component.scss'],
})
export class HandLeftComponent {
	@Input()
	public lesson: LessonItemModel;
}
