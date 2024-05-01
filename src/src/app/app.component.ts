import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/structure/footer/footer.component';
import { HeaderComponent } from './components/structure/header/header.component';

@Component({
	selector: 'root',
	standalone: true,
	imports: [RouterOutlet, NgClass, HeaderComponent, FooterComponent],
	templateUrl: `./app.component.html`,
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
