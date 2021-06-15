import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthMDBInterceptorService implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  
    const apiKeyToken: string = environment.mdbkey;

    let request = req;
    let  params;

    if (apiKeyToken && apiKeyToken!=='null') {
        params = { api_key: apiKeyToken };
    } else {
        params = {};
    }

    request = request.clone({
        setParams: params
    });


    return next.handle(request);
  }
}