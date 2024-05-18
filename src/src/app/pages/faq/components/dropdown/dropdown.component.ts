import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FAQModel } from '../../faq.model';

@Component({
	selector: 'dropdown',
	standalone: true,
	imports: [NgClass],
	templateUrl: `./dropdown.component.html`,
	styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
	@Input()
	public faq: FAQModel;

	public isShow: boolean = false;

	setIsShow(): void {
		this.isShow = !this.isShow;
	}
}
