import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map,filter} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class FormetService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      filter((event:any) => event instanceof HttpResponse && req.url.includes('filter')),
      map((event:HttpResponse<any>)=> event.clone({body:event.body.data.users.list}))
    )
  }
}
