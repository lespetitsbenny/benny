import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router"; // ce composant permet de récupérer l'id dans l'url actuel
import {ArticleService} from "../../service/article.service";
import {CommentairesService} from "../../service/commentaires.service";

@Component({
  selector: 'app-article',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

   article; // un seul article
   commentaire;
   articles;
   commentaires;



  constructor(
      private router : ActivatedRoute ,
      private service : ArticleService,
      private services : CommentairesService)
  { }
  ngOnInit(): void {

// pour avoir juste l'article de l'id concerné

    this.router.paramMap.subscribe((params)=>{
      const id = params.get("id");
      console.log(id)
      this.service.getArticleById(id)
        .subscribe((response: Response)=>{
          this.article = response;
          console.log(this.article);
        })

    })
    // pour avoir juste le commentaire de l'id concerné

    this.router.paramMap.subscribe((params)=>{
      const id = params.get("id");
      console.log(id)
      this.services.getAllCommentaires()
        .subscribe((response: Response)=>{
          this.commentaires = response;
          console.log(this.commentaires);
        })


    })

    }
}




