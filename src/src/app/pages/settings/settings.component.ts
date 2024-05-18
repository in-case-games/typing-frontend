import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GlobalLessonParams } from 'src/app/common/models/global-lesson-params.model';
import { SubmitButtonComponent } from 'src/app/components/common/buttons/submit-button/submit-button.component';
import { CommonInputComponent } from 'src/app/components/common/inputs/common-input/common-input.component';
import { ToggleComponent } from 'src/app/components/common/inputs/toggle/toggle.component';
@Component({
	selector: 'settings-page',
	standalone: true,
	imports: [
		NgClass,
		FormsModule,
		ToggleComponent,
		CommonInputComponent,
		SubmitButtonComponent,
	],
	templateUrl: `./settings.component.html`,
	styleUrls: ['./settings.component.scss'],
})
export class SettingsPageComponent {
	public params: GlobalLessonParams = new GlobalLessonParams();

	constructor() {
		const params: GlobalLessonParams = JSON.parse(
			localStorage.getItem('params')
		);

		if (params) {
			this.params = params;
		}
	}

	onClickSave() {
		localStorage.setItem('params', JSON.stringify(this.params));
	}
}
