import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LessonItemModel } from 'src/app/common/models/lesson-item.model';
import { TypingInputComponent } from '../common/inputs/typing-input/typing-input.component';
import { TypingCharacterComponent } from '../typing-character/typing-character.component';

@Component({
	selector: 'typing-input-area',
	standalone: true,
	imports: [NgClass, TypingInputComponent, TypingCharacterComponent],
	templateUrl: `./typing-input-area.component.html`,
	styleUrls: ['./typing-input-area.component.scss'],
})
export class TypingInputAreaComponent {
	@Input()
	public lesson: LessonItemModel;

	onKeydown($event) {}
}
