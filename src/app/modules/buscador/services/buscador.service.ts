import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class BuscadorService {
  private endpoint: string =
    "https://my-json-server.typicode.com/agomezdev/universiaPrueba/users";

  constructor(private httpClient: HttpClient) {}

  searchUser(user: string): Observable<any> {
    //creamos los headers
    const httpHeaders = new HttpHeaders({
      "Content-Type": "application/json",
      "Cache-Control": "no-cache"
    });
    //montamos los headers
    const options = {
      headers: httpHeaders
    };
    return this.httpClient.get(this.endpoint, options);
  }
}
