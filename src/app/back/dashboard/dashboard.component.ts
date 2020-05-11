import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/service/article.service';
import { UsersService } from 'src/app/service/users.service';
import { CommentairesService } from 'src/app/service/commentaires.service';
// importer tout les fichier necessaire et les déclarer dans construtor


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  nbrArticles;
  nbrUsers;
  nbrCommentaires;

  constructor(private article : ArticleService,
              private users : UsersService,
              private commentaires : CommentairesService) {}


  // declaration et lecture du nombre d'article, utilisateurs et commentaires

  ngOnInit(): void {
    this.article.getAllArticles()
      .subscribe( (response : Response) => {
        this.nbrArticles = response;
        console.log(this.nbrArticles)
      })
      this.users.getAllUtilisateurs()
      .subscribe( (response : Response) => {
        this.nbrUsers = response;
        console.log(this.nbrUsers)
      })
      this.commentaires.getAllCommentaires()
      .subscribe( (response : Response) => {
        this.nbrCommentaires = response;
        console.log(this.nbrCommentaires)
      })
  }

}
