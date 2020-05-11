import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../../service/article.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
// importer tout les fichier necessaire et les déclarer dans construtor

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  articles ;
  pageActuel = 1; // pagination

  url = "https://agile-oasis-25523.herokuapp.com/articles"; //

  constructor(private service : ArticleService,      // private : Une propriété privée de méthode n'est
              private http : HttpClient,            // accessible ou appelée qu'à partir de l'instance de
              private router : ActivatedRoute) { } // classe elle-même

// CRUD (Create, Read, Update et Delete)

        // Créer

    onSubmitArticle(f)
    {
      //console.log(f.value)
      const article = f.value;
      this.http.post(this.url,JSON.stringify(article))
        .subscribe((response : Response) => {
          // que f.value soit conforme ou pas  => toujours OK avec JSONPlaceholder
          console.log(response);
          article["id"] = response['id']
          this.articles.splice(0,0,article) ;
        })
    }

        // Read

   ngOnInit() {
    this.http.get(this.url)
      .subscribe( (response : Response) => {
        //console.log(response)
        this.articles = response ;
      });
  }
       //Modifier

  onUpdateArticle(article)
  {
    this.http.put(this.url + `/${article._id}`,JSON.stringify(article))
      .subscribe((response : Response) => {
        // que article soit conforme ou pas  => toujours OK avec JSONPlaceholder
        // par contre pas si vous essayer de modifier un article créé par vous => erreur 500
        console.log(response);
        article.titre = article.titre + " Modifié!";
      })
    }

       //Supprimer

  onDeleteArticle(article)
  {
    this.http.delete(this.url + `/${article._id}`)
      .subscribe((response: Response) => {
        // que article soit conforme ou pas  => toujours OK avec JSONPlaceholder

        console.log(response);
        let index = this.articles.indexOf(article);
        this.articles.splice(index,1) ;
      })
  }
}



