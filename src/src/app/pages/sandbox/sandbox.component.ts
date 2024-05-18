import { NgClass } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { DegreeDifficulty } from 'src/app/common/enums/degree-difficulty.enum';
import { Language } from 'src/app/common/enums/language.enum';
import { IFishTextGeneratorService } from 'src/app/common/interfaces/fish-text-generator.interface';
import { IGenerationService } from 'src/app/common/interfaces/generation.interface';
import { GlobalLessonParams } from 'src/app/common/models/global-lesson-params.model';
import { LessonItemModel } from 'src/app/common/models/lesson-item.model';
import { LessonParamsModel } from 'src/app/common/models/lesson-params.model';
import { TypingCharacterModel } from 'src/app/common/models/typing-character.model';
import { FishTextGeneratorService } from 'src/app/common/services/fish-text-generator.service';
import { GenerationService } from 'src/app/common/services/generation.service';
import { HandLeftComponent } from 'src/app/components/hands/hand-left.component';
import { HandRightComponent } from 'src/app/components/hands/hand-right.component';
import { KeyboardHintComponent } from 'src/app/components/keyboard-hint/keyboard-hint.component';
import { TypingInputAreaComponent } from 'src/app/components/typing-input-area/typing-input-area.component';
import { TypingResultsComponent } from 'src/app/components/typing-results/typing-results.component';

@Component({
	selector: 'sandbox-page',
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
	templateUrl: `./sandbox.component.html`,
	styleUrls: ['./sandbox.component.scss'],
})
export class SandboxPageComponent implements OnInit {
	public lesson: LessonItemModel;
	DefaultIgnoreChars: TypingCharacterModel[];

	constructor(
		@Inject('IGenerationService') private generationService: IGenerationService,
		@Inject('IFishTextGeneratorService')
		private textGenerator: IFishTextGeneratorService
	) {}

	ngOnInit() {
		this.refreshLesson();
	}

	refreshLesson() {
		this.lesson = new LessonItemModel(
			'sandbox',
			0,
			Language.Russian,
			DegreeDifficulty.Easy,
			new LessonParamsModel([])
		);
		const params: GlobalLessonParams = JSON.parse(
			localStorage.getItem('params')
		);

		if (params) {
			this.lesson.params.PullGlobalParams(params);
		} else {
			this.lesson.params.allowErrors = true;
		}

		this.textGenerator.getFishText(500).subscribe({
			next: (data: any) =>
				(this.lesson.words =
					this.generationService.RandomSelectionWordsByCharactersWithFishText(
						this.lesson,
						data.text
					)),
		});
	}
}
