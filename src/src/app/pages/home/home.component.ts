import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DegreeDifficulty } from 'src/app/components/common/enums/degree-difficulty.enum';
import { LessonItemComponent } from './components//lesson-item/lesson-item.component';
import { LessonItemModel } from './components//lesson-item/lesson-item.model';

@Component({
	selector: 'home-page',
	standalone: true,
	imports: [NgClass, RouterLink, LessonItemComponent],
	templateUrl: `./home.component.html`,
	styleUrls: ['./home.component.scss'],
})
export class HomePageComponent {
	public readonly lessons: LessonItemModel[] = [
		{
			theme: 'ао оа',
			degreeDifficulty: DegreeDifficulty.Easy,
			color: `var(--lesson-item__${DegreeDifficulty.Easy}-border-color)`,
		},
		{
			theme: 'вл лв',
			degreeDifficulty: DegreeDifficulty.Easy,
			color: `var(--lesson-item__${DegreeDifficulty.Easy}-border-color)`,
		},
		{
			theme: 'ыд ды',
			degreeDifficulty: DegreeDifficulty.Middle,
			color: `var(--lesson-item__${DegreeDifficulty.Middle}-border-color)`,
		},
		{
			theme: 'фж жф',
			degreeDifficulty: DegreeDifficulty.Hard,
			color: `var(--lesson-item__${DegreeDifficulty.Hard}-border-color)`,
		},
		{
			theme: 'пр рп',
			degreeDifficulty: DegreeDifficulty.Easy,
			color: `var(--lesson-item__${DegreeDifficulty.Easy}-border-color)`,
		},
	];
}
