import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactReactiveComponent } from "./contact-reactive/contact-reactive.component";
import { ContactoComponent } from "./contacto/contacto.component";
import { PermissionsGuard } from "./guard/permissions.guard";
import { WithoutSaveGuard } from "./guard/without-save.guard";
import { HomeComponent } from "./home/home.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { DataResolverService } from "./resolvers/data.resolver.service";
import { DetailsComponent } from "./users/details/details.component";
import { ListComponent } from "./users/list/list.component";
import { UserComponent } from "./users/user/user.component";

const routes: Routes = [
    
    { path : '', redirectTo: '/home', pathMatch: 'full'},
    {
        path : 'contact-reactive',
        component: ContactReactiveComponent, 
        canDeactivate: [WithoutSaveGuard],
        resolve: {departments: DataResolverService}
    },
    { path : 'contact-template/:userid', component: ContactoComponent},
    { path : 'home', component: HomeComponent},
    { 
        path : 'users', component: UserComponent, canActivate: [PermissionsGuard],
        children: [
            { path : 'list', component: ListComponent},
            { path : 'details', component: DetailsComponent},
        ]},

    { path : '**', component: PagenotfoundComponent},
    

];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule] 
})
export class AppRoutingModule{

}