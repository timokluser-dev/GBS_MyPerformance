import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Configuration} from 'myperformance-client';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {}

  get<T>(endpoint: string): Promise<T> {
    return this.http.get<T>(this.baseUrl + endpoint).toPromise();
  }

  public static getApiConfiguration(): Configuration {
    // info: the accessToken is already intercepted
    const baseUrl = document.getElementsByTagName('base')[0].href;
    return new Configuration({
      basePath: baseUrl.substring(0, baseUrl.length - 1),
    });
  }
}
