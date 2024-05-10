import { NgClass, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LessonItemModel } from '../../common/models/lesson-item.model';

@Component({
	selector: 'keyboard-hint',
	standalone: true,
	imports: [NgClass, NgFor],
	templateUrl: `./keyboard-hint.component.html`,
	styleUrls: ['./keyboard-hint.component.scss'],
})
export class KeyboardHintComponent {
	@Input()
	public lesson: LessonItemModel;
}
