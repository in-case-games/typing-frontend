import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LessonItemModel } from '../../common/models/lesson-item.model';

@Component({
	selector: 'hand-right',
	standalone: true,
	imports: [NgClass],
	templateUrl: `./hand-right.component.html`,
	styleUrls: ['./hand-right.component.scss'],
})
export class HandRightComponent {
	@Input()
	public lesson: LessonItemModel;
}
