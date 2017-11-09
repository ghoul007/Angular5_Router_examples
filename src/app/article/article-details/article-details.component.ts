import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-article-details",
  templateUrl: "./article-details.component.html",
  styleUrls: ["./article-details.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class ArticleDetailsComponent implements OnInit {
  articleId: number;
  constructor(private activatedRoute_: ActivatedRoute) {
    activatedRoute_.params.subscribe(
      params => (this.articleId = params["articleId"])
    );
  }

  ngOnInit() {}
}
