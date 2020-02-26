import { Component, OnInit } from "@angular/core";
import { constants } from '../app.constants'

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.scss"]
})
export class NavBarComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }

  HomeRoute = constants.methods.getRouteByName('home')
  NewsRoute = constants.methods.getRouteByName('news')
  ContactRoute = constants.methods.getRouteByName('contact')
  AboutRoute = constants.methods.getRouteByName('about')

  public menus = [
    {
      path: this.HomeRoute.path,
      text: this.HomeRoute.navBarText
    },
    {
      path: this.NewsRoute.path,
      text: this.NewsRoute.navBarText
    },
    {
      path: this.ContactRoute.path,
      text: this.ContactRoute.navBarText
    },
    {
      path: this.AboutRoute.path,
      text: this.AboutRoute.navBarText
    },
  ]
}
