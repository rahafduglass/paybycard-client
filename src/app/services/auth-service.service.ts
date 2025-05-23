import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoginRequest} from '../requests/login-request';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {
  }

  login(request: LoginRequest ): Observable<any> {
    return this.http.post("http://localhost:8081/api/v1/auth/login", request);
  }

  setToken(token:string){
    sessionStorage.setItem('token',token);
  }
}
