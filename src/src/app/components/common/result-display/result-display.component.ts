import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ResultDisplayModel } from 'src/app/common/models/result-display.model';

@Component({
	selector: 'result-display',
	standalone: true,
	imports: [NgClass],
	templateUrl: `./result-display.component.html`,
	styleUrls: ['./result-display.component.scss'],
})
export class ResultDisplayComponent {
	@Input()
	public result: ResultDisplayModel;
}
