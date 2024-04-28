import { Component, EventEmitter, Input, Output } from '@angular/core'
import { FormsModule } from '@angular/forms'

@Component({
	selector: 'hidden-typing-input',
	standalone: true,
	imports: [FormsModule],
	templateUrl: `./hidden-typing-input.component.html`,
	styleUrls: ['./hidden-typing-input.component.scss'],
})
export class HiddenTypingInputComponent {
	@Input()
	public text: string = ''
	@Output()
	public textChange = new EventEmitter<string>()

	setFocusInputText(): void {
		const input = document.getElementById('typing-input-text')

		if (input) {
			input.focus()
		}
	}

	onTextChange(model: string) {
		this.text = model
		this.textChange.emit(model)
	}
}
