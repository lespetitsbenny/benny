import { Component, OnInit } from '@angular/core';
import {ArticleService} from "../../service/article.service";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',

  styleUrls: ['./accueil.component.css']
})

export class AccueilComponent implements OnInit {

  pageActuel = 1;
  articles;
  commentaires;


  constructor(private service : ArticleService) {
   }
  ngOnInit(): void {

//obtention des touts les articles grâce à article.service.ts
    this.service.getAllArticles()
      .subscribe( (response : Response) => {
        this.articles = response;
        console.log(this.articles)
      })

    }

}
