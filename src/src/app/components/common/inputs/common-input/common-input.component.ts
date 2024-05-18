import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'common-input',
	standalone: true,
	imports: [NgClass, FormsModule],
	templateUrl: `./common-input.component.html`,
	styleUrls: ['./common-input.component.scss'],
})
export class CommonInputComponent {
	@Input()
	public title: string;
	@Input()
	public value: string;
	@Input()
	public type: string;
	@Input()
	public min: number | undefined;
	@Input()
	public max: number | undefined;
	@Output()
	public valueChange = new EventEmitter<string>();

	onValueChange(model: string) {
		this.value = model;
		this.valueChange.emit(model);
	}
}
