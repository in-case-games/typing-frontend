import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LessonConstants } from 'src/app/common/constants/lesson.constants';
import { LessonItemModel } from 'src/app/common/models/lesson-item.model';
import { ResultDisplayComponent } from 'src/app/components/common/result-display/result-display.component';

@Component({
	selector: 'typing-results',
	standalone: true,
	imports: [NgClass, ResultDisplayComponent],
	templateUrl: `./typing-results.component.html`,
	styleUrls: ['./typing-results.component.scss'],
})
export class TypingResultsComponent {
	@Output()
	public refreshTrigger: EventEmitter<string> = new EventEmitter();

	@Input()
	public lesson: LessonItemModel;
	@Input()
	public id: number | undefined;

	constructor(private router: Router) {}

	public previousLesson() {
		if (!this.id) {
			this.refreshTrigger.emit();
		} else if (this.id === 1) {
			this.router.navigate(['/lessons']);
		} else {
			this.router.navigate([`/lesson/${this.id - 1}`]);
		}
	}

	public refreshLesson() {
		this.refreshTrigger.emit();
	}

	public nextLesson() {
		if (!this.id) {
			this.refreshTrigger.emit();
		} else if (this.id + 1 > LessonConstants.GetDefaultLessons().length) {
			this.router.navigate(['/lessons']);
		} else {
			this.router.navigate([`/lesson/${this.id + 1}`]);
		}
	}
}
