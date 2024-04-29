import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
	selector: 'lesson-page',
	standalone: true,
	imports: [NgClass],
	templateUrl: `./lesson.component.html`,
	styleUrls: ['./lesson.component.scss'],
})
export class LessonPageComponent {
	public id: number | undefined;

	private routeSubscription: Subscription;

	constructor(private route: ActivatedRoute) {
		this.routeSubscription = route.params.subscribe(
			params => (this.id = params['id'])
		);
	}
}
