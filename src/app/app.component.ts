import { Component, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  fullName: string = '';
  @ViewChildren('inputEl') inputElements: QueryList<ElementRef>;

  show() {
    let name = '';
    this.inputElements.forEach((el) => {
      name += el.nativeElement.value + ' ';
    });
    this.fullName = name.trim();
  }
}
