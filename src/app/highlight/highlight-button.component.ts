import {Component} from '@angular/core'

@Component({
  selector: 'app-highlight-button',
  template: `
    <div>
      <div [style.background-color]="getStyle()">
        I am a div that wants to be styled
      </div>
      <button (click)="showStyle = !showStyle;">Toggle style</button>
    </div>
  `
})
export class HighlightButtonComponent {
  showStyle: false;
  
  constructor() {
  }
  
  getStyle() {
    if(this.showStyle) {
      return "yellow";
    } else {
      return "";
    }
  }
}