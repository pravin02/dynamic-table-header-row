import { Component, OnInit } from '@angular/core';
import { ListService } from '../service/list.service';

/**
 * ListComponent to fetch the data from API and extract the keys from JSON
 */
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  /**
   * keys : string[] for to store extracted keys from JSON.
   */
  public keys: string[];
  /**
   *  list variable to hold any type of data because recieved data has no fixed structure
   */
  public list: any[] = [];

  constructor(private service: ListService) { }

  /**
   * After component init calling API
   */
  ngOnInit() {
    let api = 'list1.json';
    //let api = 'list2.json';
    //let api = 'list3.json';
    //let api = 'list4.json';
    this.fetchList(api);
  }

  /**
   * API call and extracting JSON
   */
  fetchList(api : string) {
    this.service.fetchList(api).subscribe((response: any) => {
      this.list = response.data;
      this.extractKeys(this.list);
    }, error => console.log(error));
  }

   /**
   * @param array 
   * @return string[]
   * 
   */
  extractKeys(array : any[]) : string[] {
    if (array == null || array == undefined)
      return;
    if (array.length <= 0)
      return;
    this.keys = Object.keys(array[0]);
  }
}