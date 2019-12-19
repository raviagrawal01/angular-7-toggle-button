import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Angular Toggle Button</h1>
    <toggle-button (changed)="checked=$event" [toogleid]="111" [toogleontext]="'Enabled'"
                          [toogleChecked]="1" [toogleofftext]="'Disabled'">
    </toggle-button>
    <p>The state is {{checked ? 'ON' : 'OFF'}}.</p>
  `,
  styles: [ `
    h1 {
      color: #DB5B33;
      font-weight: 300;
      text-align: center;
    }
    
    toggle-button {
      margin: 0 auto;
    } 
  `]
})
export class AppComponent  {
  checked: boolean;
}
