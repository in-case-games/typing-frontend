import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LessonConstants } from 'src/app/common/constants/lesson.constants';
import { LessonsGroupModel } from 'src/app/common/models/lessons-group.model';
import { LessonItemComponent } from './components/lesson-item/lesson-item.component';

@Component({
	selector: 'lessons-page',
	standalone: true,
	imports: [NgClass, RouterLink, LessonItemComponent],
	templateUrl: `./lessons.component.html`,
	styleUrls: ['./lessons.component.scss'],
})
export class LessonsPageComponent {
	public readonly groups: LessonsGroupModel[] =
		LessonConstants.GetDefaultGroups();
}
