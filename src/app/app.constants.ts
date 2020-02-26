import { HomeComponent } from "./home/home.component";
import { NewsComponent } from "./news/news.component";
import { ContactComponent } from "./contact/contact.component";
import { AboutComponent } from "./about/about.component";
import { NotFoundComponent } from './not-found/not-found.component';

const routes = [
    {
        path: "",
        component: HomeComponent,
        name: 'home',
        navBarText: 'Home'
    },
    {
        path: "news",
        component: NewsComponent,
        name: 'news',
        navBarText: 'News'
    },
    {
        path: "contact",
        component: ContactComponent,
        name: 'contact',
        navBarText: 'Contact'
    },
    {
        path: "about",
        component: AboutComponent,
        name: 'about',
        navBarText: 'About'
    },
    {
        path: '**',
        component: NotFoundComponent,
        name: 'not-found',
        navBarText: 'Not found'
    }
]

export const constants = {
    routes,
    methods: {
        getRouteByName: (name) => {
            return routes.find((route) => {
                return route.name == name
            })
        }
    }
}