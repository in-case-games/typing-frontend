import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { NavButtonComponent } from './components/nav-button/nav-button.component';
import { NavButtonConstants } from './components/nav-button/nav-button.constants';
import { NavButtonModel } from './components/nav-button/nav-button.model';

@Component({
	selector: 'footer',
	standalone: true,
	imports: [NgClass, NavButtonComponent],
	templateUrl: `./footer.component.html`,
	styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
	public readonly navButtons: NavButtonModel[] = NavButtonConstants.Models;
}
