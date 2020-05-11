
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class UsersService {


  utilisateurs = "https://agile-oasis-25523.herokuapp.com/utilisateurs/"

  constructor(private http : HttpClient) { }

// pour avoir tout les utilisateurs

  getAllUtilisateurs()
  {
    return this.http.get(this.utilisateurs);
  }

// pour avoir un utilisateur selon son id

  getUtilisateursById(id)
  {
    return this.http.get(this.utilisateurs+"/"+id);
  }
}
