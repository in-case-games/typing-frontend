import { Component } from "@angular/core"
import { FormsModule } from "@angular/forms"
     
@Component({
    selector: "root",
    standalone: true,
    imports: [FormsModule],
    template: `<h1>Добро пожаловать, здесь будет Typing InCase</h1>`
})
export class AppComponent { 
    name= "";
}