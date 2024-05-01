import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavButtonModel } from './nav-button.model';

@Component({
	selector: 'nav-button',
	standalone: true,
	imports: [NgClass, RouterLink],
	templateUrl: './nav-button.component.html',
	styleUrls: ['./nav-button.component.scss'],
})
export class NavButtonComponent {
	@Input('nav')
	public nav: NavButtonModel;
}
