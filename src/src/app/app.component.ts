import { Component } from "@angular/core"
import { FormsModule } from "@angular/forms"
     
@Component({
    selector: "root",
    standalone: true,
    imports: [FormsModule],
    templateUrl: `./app.component.html`,
    styleUrls: [ './app.component.css' ]
})

export class AppComponent {
    displayInputText= "";

    setFocusInputText() : void 
    {
        var input = document.getElementById('typing-input-text');
        input.focus();
    }
}