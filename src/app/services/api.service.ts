import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService {
 private apiUrl:string = 'https://api.thedogapi.com/v1/breeds'
  constructor(private http: HttpClient) { }

  public getData(): Observable<any>{
    console.log('se esta realizando la peticion ')
    return this.http.get<any>(this.apiUrl)
  }
}
