import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LessonConstants } from 'src/app/common/constants/lesson.constants';
import { LessonItemModel } from 'src/app/common/models/lesson-item.model';
import { LessonItemComponent } from './components/lesson-item/lesson-item.component';

@Component({
	selector: 'home-page',
	standalone: true,
	imports: [NgClass, RouterLink, LessonItemComponent],
	templateUrl: `./home.component.html`,
	styleUrls: ['./home.component.scss'],
})
export class HomePageComponent {
	public readonly lessons: LessonItemModel[] = LessonConstants.DefaultLessons;
}
