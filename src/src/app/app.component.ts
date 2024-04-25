import { Component } from "@angular/core"
import { FormsModule } from "@angular/forms"
import { HiddenTypingInputComponent } from "./components/common/inputs/hidden-typing-input/hidden-typing-input.component"
     
@Component({
    selector: "root",
    standalone: true,
    imports: [ HiddenTypingInputComponent, FormsModule ],
    templateUrl: `./app.component.html`,
    styleUrls: [ './app.component.scss' ]
})

export class AppComponent {
    public text: string;
}