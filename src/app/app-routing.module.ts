import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
// import { HomeComponent } from "./home/home.component";
// import { NewsComponent } from "./news/news.component";
// import { ContactComponent } from "./contact/contact.component";
// import { AboutComponent } from "./about/about.component";
// import { NotFoundComponent } from './not-found/not-found.component';

import { constants } from './app.constants'

// const routes: Routes = [
//   {
//     path: "",
//     component: HomeComponent
//   },
//   {
//     path: "news",
//     component: NewsComponent
//   },
//   {
//     path: "contact",
//     component: ContactComponent
//   },
//   {
//     path: "about",
//     component: AboutComponent
//   },
//   {
//     path: '**',
//     component: NotFoundComponent
//   }
// ];

const routes: Routes = constants.routes

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
