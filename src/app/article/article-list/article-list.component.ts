import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-article-list",
  templateUrl: "./article-list.component.html",
  styleUrls: ["./article-list.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class ArticleListComponent implements OnInit {
  articleIds: Array<number> = [1, 2, 3, 4, 5];
  constructor() {}

  ngOnInit() {}
}
