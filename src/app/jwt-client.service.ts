import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class JwtClientService {

  constructor(private http: HttpClient) { }

  public generateToken(request: any): Observable<Object> {
    return this.http.post("http://localhost:9192/authenticate", request, {responseType: 'text' as 'json'});
  }

  public welcome(token: string) {
    let tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set("Authorization", tokenStr);
    return this.http.get("http://localhost:9192/", {headers, responseType: 'text' as 'json'})
  }
}
