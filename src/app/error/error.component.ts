import { Component, OnInit, Input } from '@angular/core';

/**
 * ErrorComponent to show error message on  UI taken from parent component
 */
@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  /**
   * message to show on screen 
   */
  @Input("message") message: string;

  constructor() { }

  ngOnInit() {
  }
}
