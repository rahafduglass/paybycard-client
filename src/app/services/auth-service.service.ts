import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoginRequest} from '../requests/login-request';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {
  }

  login(request: LoginRequest): Observable<any> {
    request.password=this.encryptPassword(request.password);
    return this.http.post("http://localhost:8081/api/v1/auth/login", request);
  }

  setToken(token: string) {
    sessionStorage.setItem('token', token);
  }

  encryptPassword(password: string): string {
    const secretKey = CryptoJS.enc.Utf8.parse("1234567890abcdef");
    return CryptoJS.AES.encrypt(password, secretKey,{
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    }).toString();
  }

}
