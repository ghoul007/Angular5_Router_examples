import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { AuthService , logstate} from "../auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
  // encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  loginIn: boolean;
  constructor(private authService: AuthService) {
    authService.auth.subscribe(res => {
      this.loginIn = res === logstate.login;
    });
    // AuthService
  }
  ngOnInit() {}

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}
