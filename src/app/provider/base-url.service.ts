import { Injectable } from '@angular/core';

/**
 * BaseUrlService for to hold a BASE_URL for app apis.
 * Directly injected to root module so it will be availabe to all child modules and components.
 */
@Injectable({
  providedIn: 'root'
})
export class BaseUrlService {
  /**
   * BASE_URL as public and readonly so no one can modify its value accidently
   */
  public readonly BASE_URL = "http://localhost:4200/assets/api/";
}