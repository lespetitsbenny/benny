import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CommentairesService {

  commentaires = "https://agile-oasis-25523.herokuapp.com/commentaires"
  constructor(private http : HttpClient) { }

  // pour avoir tout les commentaires

  getAllCommentaires()
  {
    return this.http.get(this.commentaires);
  }

  // pour avoir un commentaire selon l'id

  getCommentaireById(id)
  {
    return this.http.get(this.commentaires+"/"+id);
  }
}
