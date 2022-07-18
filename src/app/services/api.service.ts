import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})

export class ApiService {
  apiroot: string;
  constructor(
    private _HttpClient: HttpClient
  ) {
    this.apiroot = environment.apiUri;
  }

  postRequest<T>(url: string, body: any): Promise<T> {
    return this._HttpClient.post(this.apiroot + url, body).toPromise().then(res => {
      return res as T;
    }).catch(error => {
      this.handleCatchError(error);
      return {} as T;
    });
  }
  getRequest<T>(url: string): Promise<T> {
    return this._HttpClient.get(this.apiroot + url).toPromise().then(res => {
      return res as T;
    }).catch(error => {
      this.handleCatchError(error);
      return {} as T;
    });
  }
  deleteRequest<T>(url: string): Promise<T> {
    return this._HttpClient.delete(this.apiroot + url).toPromise().then(res => {
      return res as T;
    }).catch(error => {
      this.handleCatchError(error);
      return {} as T;
    });
  }
  putRequest<T>(url: string, body: any): Promise<T> {
    return this._HttpClient.put(this.apiroot + url, body).toPromise().then(res => {
      return res as T;
    }).catch(error => {
      this.handleCatchError(error);
      return {} as T;
    });
  }


  private handleCatchError(err: HttpErrorResponse) {
    if ((err.status === 404) || (err.status === 0 && err.url === null)) {
      console.log('Server not available');
    }
    if (err.status !== 0 && err.status !== 200 && err.status !== 401 && err.status !== 404) {
      console.log('Server Error');
      throw err;
    }
  }

}
