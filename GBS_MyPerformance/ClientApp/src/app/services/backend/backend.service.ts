import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {}

  get<T>(endpoint: string): Promise<T> {
    return this.http.get<T>(this.baseUrl + endpoint).toPromise();
  }
}
