import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LessonParamsModel } from 'src/app/common/models/lesson-params.model';
import { TypingCharacterModel } from 'src/app/common/models/typing-character.model';

@Component({
	selector: 'typing-character',
	standalone: true,
	imports: [NgClass, TypingCharacterComponent],
	templateUrl: `./typing-character.component.html`,
	styleUrls: ['./typing-character.component.scss'],
})
export class TypingCharacterComponent {
	@Input()
	public character: TypingCharacterModel;

	@Input()
	public params: LessonParamsModel;
}
