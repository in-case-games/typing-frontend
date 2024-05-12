import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { FAQConstants } from './faq.constants';
import { FAQModel } from './faq.model';

@Component({
	selector: 'faq-page',
	standalone: true,
	imports: [NgClass, DropdownComponent],
	templateUrl: `./faq.component.html`,
	styleUrls: ['./faq.component.scss'],
})
export class FAQPageComponent {
	public faq: FAQModel[] = FAQConstants.defaultFAQ;
}
