import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { compileInjectable, createInjectableType } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { LoginService } from "./login.service";
@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(private login:LoginService){

    }  
    token =this.login.getToken();

    intercept(req: HttpRequest<any>, next: HttpHandler):
     Observable<HttpEvent<any>> {
       
    //add the jwt token from localstorage 
        let authReq=req;   
        let token =this.login.getToken(); 
        console.log("dans l'intercepteur")
        console.log("avant :"+this.login.getToken())        
        if(token!=null){
            authReq=authReq.clone({
                setHeaders:{Authorization: `Bearer ${token}`},
        });  
        }    
      // alert(this.jwtHelper.decodeToken(token|| '{}'));
        return next.handle(authReq)
        // .pipe(
        //     catchError((err:HttpInterceptor)=>{

        //         console.log(err)
        //         return throwError("err")
        //     })  
        // )
        ;   
        // let  headerToken=req.clone({ 
        //     setHeaders:{Authorization: "Bearer "+this.token}
        // }); 
  
        // return next.handle(headerToken);

 
    }

}

// export const authInterceptorProvider=[
//     {
//         provide:HTTP_INTERCEPTORS,
//         useClass:AuthInterceptor,
//         multi:true,
//     },
// ];