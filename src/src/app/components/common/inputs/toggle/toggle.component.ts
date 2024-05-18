import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

let toggleId = 0;

@Component({
	selector: 'toggle',
	standalone: true,
	imports: [NgClass, FormsModule],
	templateUrl: `./toggle.component.html`,
	styleUrls: ['./toggle.component.scss'],
})
export class ToggleComponent {
	@Input()
	public title: string;
	@Input()
	public value: boolean;
	@Output()
	public valueChange = new EventEmitter<boolean>();
	@Input() toggleId = `toggle-${toggleId++}`;

	onValueChange(model: boolean) {
		this.value = model;
		this.valueChange.emit(model);
	}
}
