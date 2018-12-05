import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { _throw } from 'rxjs/observable/throw';
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // throw new Error('Method not implemented.');
        return next.handle(req).pipe(
            catchError(err  => {
                if (err instanceof HttpErrorResponse) {

                    if (err.status === 401) {
                        return _throw(err.statusText);
                    }
                    const applicationError = err.headers.get('Application-Error');

                    if (applicationError) {
                        console.error(applicationError);
                        return _throw(applicationError);
                    }

                    const serverError = err.error;
                    // console.log(typeof serverError);
                    let modelStateErrors = '';
                    if (serverError && typeof serverError === 'object') {
                        for (const key in serverError) {
                            if (serverError[key]) {
                                modelStateErrors += serverError[key] + '\n';
                            }
                        }
                    }
                    // console.log(modelStateErrors);
                    return _throw(modelStateErrors || serverError || 'Server Error');
                }
            })
        );
    }

}

export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true
};
