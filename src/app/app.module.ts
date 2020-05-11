import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppComponent } from './app.component';
import { MenuComponent } from './commun/menu/menu.component';
import { AccueilComponent } from './front/accueil/accueil.component';
import { ArticlesComponent } from './front/articles/articles.component';

import { ArticleService } from "./service/article.service";
import { DashboardComponent } from './back/dashboard/dashboard.component';
import { ListeComponent } from './back/article/liste/liste.component';
import { MenuDashboardComponent } from './back/menu-dashboard/menu-dashboard.component';
import { AjouterComponent } from './back/article/ajouter/ajouter.component';
import { ServiceComponent } from './service/service.component';
import { UsersComponent } from './back/users/users.component';
import { ParametresComponent } from './back/parametres/parametres.component';
import { AjoutComponent } from './back/users/ajout/ajout.component';
import { ListUserComponent } from './back/users/list-user/list-user.component';
import { UsersService } from './service/users.service';

import { NotFoundComponent } from './front/not-found/not-found.component';
import { LoginComponent } from './commun/login/login.component';
import { FormulaireComponent } from './commun/formulaire/formulaire.component';
import { ModifierComponent } from './back/article/modifier/modifier.component';
import { ModifierUserComponent } from './back/users/modifier-user/modifier-user.component';
import { ContactComponent } from './front/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AccueilComponent,
    ArticlesComponent,
    NotFoundComponent,
    DashboardComponent,
    ListeComponent,
    MenuDashboardComponent,
    AjouterComponent,
    ServiceComponent,
    UsersComponent,
    ParametresComponent,
    AjoutComponent,
    ListUserComponent,
    LoginComponent,
    FormulaireComponent,
    ContactComponent,
    ModifierComponent,
    ModifierUserComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    RouterModule.forRoot(
      [
        { path : "" , component : AccueilComponent},
        { path : "article/:id" , component : ArticlesComponent} ,
        { path : "users" , component : UsersComponent} ,
        { path : "modifier" , component : ModifierComponent} ,
        { path : "modifierUser" , component : ModifierUserComponent} ,
        { path : "login" , component : LoginComponent} ,
        { path : "contact", component : ContactComponent},
        { path : "formulaire", component : FormulaireComponent} ,
        { path : "admin/article/liste" , component : ListeComponent },
        { path : "admin/article/ajouter" , component : AjouterComponent },
        { path : "admin/users/ajout", component : AjoutComponent },
        { path : "admin/users/listUser", component : ListUserComponent },
        { path : "admin/parametres", component : ParametresComponent },
        { path : "admin" , component : DashboardComponent }, // admin après admin/article/liste
        { path : "**", component : NotFoundComponent} // not fond toujours à la fin
      ]
    ),
    HttpClientModule,
    FormsModule
  ],
  providers: [ArticleService,
              UsersService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
