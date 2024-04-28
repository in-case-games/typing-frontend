import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
	selector: 'not-found-page',
	standalone: true,
	imports: [NgClass],
	templateUrl: `./not-found.component.html`,
	styleUrls: ['./not-found.component.scss'],
})
export class NotFoundPageComponent {}
