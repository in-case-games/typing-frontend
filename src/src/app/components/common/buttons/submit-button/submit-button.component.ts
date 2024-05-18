import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'submit-button',
	standalone: true,
	imports: [NgClass],
	templateUrl: `./submit-button.component.html`,
	styleUrls: ['./submit-button.component.scss'],
})
export class SubmitButtonComponent {
	@Input()
	public title: string;
	@Output()
	public onClicked = new EventEmitter<any>();

	onClick($event: any) {
		this.onClicked.emit($event);
	}
}
