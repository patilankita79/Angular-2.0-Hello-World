import { Component } from '@angular/core';

@Component({
  selector: 'hello-world',
  template: `<h1>Hello {{name}}!</h1>`
})
export class AppComponent { private name = 'World'; }
