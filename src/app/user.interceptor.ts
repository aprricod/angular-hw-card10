import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Issues } from './git-issues/issue.interface';

@Injectable()
export class UserInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<Issues>,
    next: HttpHandler
  ): Observable<HttpEvent<Issues>> {
    return next.handle(request).pipe(
      map((event: HttpEvent<Issues>) => {
        if (event instanceof HttpResponse) {
          const modEvent = event.clone({
            body: event.body.map((issue) => {
              const userdata = `(${issue.user.login}), ${issue.user.url}`;
              return { ...issue, userdata };
            }),
          });
          return modEvent;
        }
      })
    );
  }
}
