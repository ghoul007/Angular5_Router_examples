import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  // encapsulation: ViewEncapsulation.Native
})
export class AppComponent {
  title = "app";
  constructor(private router: Router) {}
  visitDefault(): void {
    this.router.navigate([""]);
  }
  visitArticle(): void {
    this.router.navigate(["article"]);
  }
}
