import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'laundry-shell',
  template: `
  <div class="no-alternative">
    <laundry-index></laundry-index>
    <router-outlet></router-outlet>
  </div>
  `,
  styles: []
})
export class ShellComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
