import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
  <h2 style="text-align:center">
    <p>
      page not found
    </p>
  <h2>
  `,
  styles: []
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    sessionStorage.clear();
  }

}
