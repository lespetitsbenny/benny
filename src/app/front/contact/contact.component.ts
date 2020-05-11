import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  success = false ;
  email_input ;
  commentaire_input ;
  constructor() { }
  ngOnInit(): void {
  }
  // cette méthode va être déclenchée quand l'internaute va cliquer que le bouton submit "envoyer du formulaire"
  // f => correspond à l'ensemble de champs du formulaire
  // donc dans f vous allez retouver les champs commentaires et le champ email
  demandeContact(f){
    if(f.valid){
      // afficher dans la console // ou un enregistrement en bdd
      console.log(f.value)
      // afficher un bandeau tout est ok
      this.success = true;
      //this.email_input.touched = false;
      // console.log(this.email_input);
      f.resetForm();
      //this.email_input = "";
      //this.commentaire_input = "";
      // vider les champs du formulaire


    }

  }

}
