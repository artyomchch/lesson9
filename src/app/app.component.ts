import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public namePage: string | undefined;

  constructor() {}

  ngOnInit(): void {}
}
