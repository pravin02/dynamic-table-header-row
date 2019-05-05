import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseUrlService } from '../provider/base-url.service';

/**
 *  ListService to fetch data from API.
 *  Directly injected to root module so it will be available for all components and child modules.
 */
@Injectable({
  providedIn: 'root'
})
export class ListService {

  /**
   * 
   * @param http : HttpClient
   * @param baseUrl : BaseUrlService to use common base ulr for all api calls
   */
  constructor(
    private http: HttpClient,
    private baseUrl: BaseUrlService) { }

  /**
   * API call to list json
   */
  fetchList(api: string) {
    return this.http.get(this.baseUrl.BASE_URL + api);
  }
}
