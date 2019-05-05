import { Component, OnInit } from '@angular/core';

/**
 * Details Component to explain about the task
 */
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public htmlCode : string  = `<table class="table table-stripped">
  <thead>
    <tr>
      <th *ngFor="let key of keys"> {{key | titlecase}}</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let user of customers">
      <td *ngFor="let key of keys">{{user[key]}}</td>
    </tr>
  </tbody>
</table>`;
  constructor() { }

  ngOnInit() {
  }

}
