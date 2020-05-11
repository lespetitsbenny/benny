import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../service/users.service';
import { HttpClient } from '@angular/common/http';
// importer tout les fichier necessaire et les déclarer dans construtor

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  utilisateurs;
  utilisateur;
  pageActuel = 1; // pagination
  url = "https://agile-oasis-25523.herokuapp.com/utilisateurs";

  constructor(private service : UsersService,      // private : Une propriété privée de méthode n'est
              private http : HttpClient) { }      // accessible ou appelée qu'à partir de l'instance de classe elle même

// CRUD (Create, Read, Update et Delete)

     // Read
     ngOnInit() {
      this.http.get(this.url)
        .subscribe( (response : Response) => {
          //console.log(response)
          this.utilisateurs = response ;
        });
    }

      //Modifier

    onUpdateUtilisateur(utilisateur)
    {
      this.http.put(this.url + `/${utilisateur._id}`,JSON.stringify(utilisateur))
        .subscribe((response : Response) => {
          // que article soit conforme ou pas  => toujours OK avec JSONPlaceholder
          // par contre pas si vous essayer de modifier un article créé par vous => erreur 500
          console.log(response);
          utilisateur.titre = utilisateur.titre + " Modifié!";
        })
      }

      //Supprimer
    onDeleteUtilisateur(utilisateur)
    {
      this.http.delete(this.url + `/${utilisateur._id}`)
        .subscribe((response: Response) => {
          // que utilisateur soit conforme ou pas  => toujours OK avec JSONPlaceholder

          console.log(response);
          let index = this.utilisateurs.indexOf(utilisateur);
          this.utilisateurs.splice(index,1) ;
        })
    }

}
