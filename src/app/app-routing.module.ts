import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AboutComponent } from "./myprofile/pages/about/about.component";
import { HomeComponent } from "./myprofile/pages/home/home.component";

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
]

@NgModule({
    imports: [
        RouterModule.forRoot( routes , { useHash: true })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}