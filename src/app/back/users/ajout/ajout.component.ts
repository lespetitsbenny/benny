import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-ajout-users',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {

  success = false;
  erreur = false;
  titre_input ;
  contenu_input;
  email_input;
  private url = "https://agile-oasis-25523.herokuapp.com/utilisateurs";
  private utilisateurs;
  id = "_id";



  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.url)
    .subscribe( (response : Response) => {
     console.log(response)
      this.utilisateurs = response ;
    });
  }

    // cette méthode va être déclancher quand l'internaute va cliquer sur le boutton submit "envoyer du formulaire"
    // f => correspond à l'ensemble des champs du formulaire
    onSubmitUser(f:NgForm)
    {
     console.log(f.value);
      const user = f.value;

      this.http.post(this.url,(user))
        .subscribe((response : Response) => {
          // que f.value soit conforme ou pas  => toujours OK avec JSONPlaceholder
          user["_id"] = response['_id']
          console.log(user);
          this.utilisateurs.splice(0,0,user) ;
        })

    }
  //============ sécurité formulaire ===================


  error = {
    nom: false,
    prenom: false,
    email: false,
    password: false,
    role : false,
    estActif:false
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


