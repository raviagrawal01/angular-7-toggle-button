import { Component, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'toggle-button',
  template: `
    <input type="checkbox" id="{{toogleid}}"
       (change)="changed.emit($event.target.checked)" checked *ngIf="toogleChecked == '0'">
    <label class="toggle-button-switch"
          for="{{toogleid}}" *ngIf="toogleChecked == '0'"></label>
    <input type="checkbox" id="{{toogleid}}"
          (change)="changed.emit($event.target.checked)" *ngIf="toogleChecked == '1'">
    <label class="toggle-button-switch"
          for="{{toogleid}}" *ngIf="toogleChecked == '1'"></label>
    <div class="toggle-button-text">
      <div class="toggle-button-text-on">{{toogleontext}}</div>
      <div class="toggle-button-text-off">{{toogleofftext}}</div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      position: relative;
      width: 140px;
      height: 40px;
    }

    input[type="checkbox"] {
      display: none;
    }

    /* Circle inside toggle button. Works with the Hide checkbox. */
    .toggle-button-switch {
      position: absolute;
      top: 2px;
      left: 4px;
      width: 64px;
      height: 25px;
      background-color: #fff;
      cursor: pointer;
      z-index: 100;
      transition: left 0.3s;
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    }

    /* Background of toggle buttons */
    .toggle-button-text {
      overflow: hidden;
      background-color: #fc3164;
      border-radius: 25px;
      box-shadow: 2px 2px 5px 0 rgba(50, 50, 50, 0.75);
      transition: background-color 0.3s;
    }

    /* Text of the toggle button */
    .toggle-button-text-on,
    .toggle-button-text-off {
      float: left;
      width: 50%;
      height: 100%;
      line-height: 30px;
      font-family: Lato, sans-serif;
      font-weight: bold;
      color: #fff;
      text-align: center;
    }

    /* If the checkbox is checked, move the circle inside the toggle button 52px to the right */
    input[type="checkbox"]:checked ~ .toggle-button-switch {
      left: 72px;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      border-top-left-radius: 0px;
      border-bottom-left-radius: 0px;
    }

    /* Change the background color of the toggle button when the checkbox is checked */
    input[type="checkbox"]:checked ~ .toggle-button-text {
      background-color: #3dbf87;
    }

  `]
})
export class ToggleButtonComponent  {
  @Output() changed = new EventEmitter<boolean>();
  @Input() public toogleid: any;
  @Input() public toogleontext: string = "On";
  @Input() public toogleofftext: string = "Off";
  @Input() public toogleChecked: any = "1";
}
