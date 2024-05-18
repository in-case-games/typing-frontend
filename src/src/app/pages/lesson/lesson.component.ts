import { NgClass } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LessonConstants } from 'src/app/common/constants/lesson.constants';
import { IFishTextGeneratorService } from 'src/app/common/interfaces/fish-text-generator.interface';
import { IGenerationService } from 'src/app/common/interfaces/generation.interface';
import { GlobalLessonParams } from 'src/app/common/models/global-lesson-params.model';
import { LessonItemModel } from 'src/app/common/models/lesson-item.model';
import { FishTextGeneratorService } from 'src/app/common/services/fish-text-generator.service';
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
		{
			provide: 'IFishTextGeneratorService',
			useClass: FishTextGeneratorService,
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
		@Inject('IFishTextGeneratorService')
		private textGenerator: IFishTextGeneratorService,
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
		const params: GlobalLessonParams = JSON.parse(
			localStorage.getItem('params')
		);

		if (params) {
			this.lesson.params.PullGlobalParams(params);
		}

		if (this.lesson.params.enableFishText) {
			this.textGenerator.getFishText(500).subscribe({
				next: (data: any) =>
					(this.lesson.words =
						this.generationService.RandomSelectionWordsByCharactersWithFishText(
							this.lesson,
							data.text
						)),
			});
		} else {
			this.lesson.words = this.generationService.RandomSelectionWordsByLesson(
				this.lesson
			);
		}
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
