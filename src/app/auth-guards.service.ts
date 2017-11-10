import { AuthService,logstate } from "./auth.service";
import { CanActivate, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";

import "rxjs/add/operator/map";

@Injectable()
export class AuthGuardsService implements CanActivate {
  constructor(private authService_: AuthService, private router_: Router) {}

  public canActivate(): Observable<boolean> {
    return this.authService_.auth
      // .subscribe(res => res)
      .map(loginIn => {
        console.log(loginIn);
        if (loginIn == logstate.logout) {
          this.router_.navigate(["login"]);
        } else {
          return true;
        }
      })
      .take(1);
  }
}
