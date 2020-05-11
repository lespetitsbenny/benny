import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})


export class AjouterComponent implements OnInit {

  success = false;
  erreur = false;
  titre_input ;
  contenu_input;
  status_input;
  nomDauteur_input;
  private url = "https://agile-oasis-25523.herokuapp.com/articles";
  private articles;



  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.url)
    .subscribe( (response : Response) => {
     console.log(response)
      this.articles = response ;
    });
  }

    // cette méthode va être déclancher quand l'internaute va cliquer sur le boutton submit "envoyer du formulaire"
    // f => correspond à l'ensemble des champs du formulaire
    onSubmitArticle(f:NgForm)
    {
     console.log(f.value);
      const article = f.value;

      this.http.post(this.url,(article))
        .subscribe((response : Response) => {
          // que f.value soit conforme ou pas  => toujours OK
          article["_id"] = response['_id']
          console.log(article);
          this.articles.splice(0,0,article) ;
        })

    }
  //============ sécurité formulaire ===================


  error = {
    titre: false,
    contenu: false,
    status : false,
    nomDauteur:false
  };

  onFrmSubmit(f) {
    //console.log(f.form.controls);

    if (!f.valid) {
      this.erreur = true;
      this.success = false;
      for (let control in f.form.controls) {
        this.error[control] =
          f.form.controls[control].status === "INVALID" ? true : false;
      }
    } else {
      this.erreur = false;
      this.success = true;
      f.resetForm();
      // autre traitement sauvegarde
    }
  }

  onChange(f) {
    this.erreur = false;
    this.success = false;
    for (let control in f.form.controls) {
      this.error[control] = false;
    }
  }

  onFrmReset(f) {
    this.erreur = false;
    this.success = false;
    for (let control in f.form.controls) {
      this.error[control] = false;
    }
    f.resetForm();
  }

  }







