import { NgClass } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LessonConstants } from 'src/app/common/constants/lesson.constants';
import { IGenerationService } from 'src/app/common/interfaces/generation.interface';
import { LessonItemModel } from 'src/app/common/models/lesson-item.model';
import { GenerationService } from 'src/app/common/services/generation.service';
import { HandLeftComponent } from 'src/app/components/hands/hand-left.component';
import { HandRightComponent } from 'src/app/components/hands/hand-right.component';
import { KeyboardHintComponent } from 'src/app/components/keyboard-hint/keyboard-hint.component';
import { TypingInputAreaComponent } from 'src/app/components/typing-input-area/typing-input-area.component';
import { TypingResultsComponent } from 'src/app/components/typing-results/typing-results.component';

@Component({
	selector: 'lesson-page',
	standalone: true,
	imports: [
		NgClass,
		TypingInputAreaComponent,
		TypingResultsComponent,
		KeyboardHintComponent,
		HandLeftComponent,
		HandRightComponent,
		HttpClientModule,
	],
	providers: [
		{
			provide: 'IGenerationService',
			useClass: GenerationService,
		},
	],
	templateUrl: `./lesson.component.html`,
	styleUrls: ['./lesson.component.scss'],
})
export class LessonPageComponent {
	public id: number | undefined;
	public lesson: LessonItemModel;

	private readonly _routeSubscription: Subscription;

	constructor(
		@Inject('IGenerationService') private generationService: IGenerationService,
		private router: Router,
		private route: ActivatedRoute
	) {
		this._routeSubscription = route.params.subscribe(params => {
			this.id = Number.parseInt(params['id']);
			this.refreshLesson();
		});
	}

	public previousLesson() {
		if (!this.id) {
			this.refreshLesson();
		} else if (this.id === 1) {
			this.router.navigate(['/lessons']);
		} else {
			this.router.navigate([`/lesson/${this.id - 1}`]);
		}
	}

	refreshLesson() {
		this.lesson = LessonConstants.GetDefaultLessons()[this.id - 1];

		this.lesson.words = this.generationService.RandomSelectionWordsByLesson(
			this.lesson
		);
	}

	public nextLesson() {
		if (!this.id) {
			this.refreshLesson();
		} else if (this.id + 1 > LessonConstants.GetDefaultLessons().length) {
			this.router.navigate(['/lessons']);
		} else {
			this.router.navigate([`/lesson/${this.id + 1}`]);
		}
	}
}
