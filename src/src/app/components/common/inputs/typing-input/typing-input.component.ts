import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'typing-input',
	standalone: true,
	imports: [FormsModule],
	templateUrl: `./typing-input.component.html`,
	styleUrls: ['./typing-input.component.scss'],
})
export class TypingInputComponent implements OnInit {
	@Output()
	public onKeydown = new EventEmitter<any>();

	ngOnInit() {
		const input = document.getElementById('typing-input-text');

		if (input) {
			input.focus();
		}
	}

	setFocusInputText(): void {
		const input = document.getElementById('typing-input-text');

		if (input) {
			input.focus();
		}
	}

	readKeydown($event: any) {
		this.onKeydown.emit($event);
	}
}
