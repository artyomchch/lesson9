import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Route, RouterModule } from "@angular/router";
import { AddFormContactComponent } from "./pages/add-contact/add-form-contact/add-form-contact.component";
import { AddContactComponent } from "./pages/add-contact/add-contact.component";
import { EditContactComponent } from "./pages/list-contact/edit-contact/edit-contact.component";
import { ListContactComponent } from "./pages/list-contact/list-contact.component";

const routes: Route[] = [

   { path: '', redirectTo: 'add-contact', pathMatch: 'full' },
   { path: 'add-contact', component: AddContactComponent },
   { path: 'add-contact/add-form-contact', component: AddFormContactComponent },
   { path: 'list-contact', component: ListContactComponent },
   { path: 'list-contact/edit-contact/:id', component: EditContactComponent },
   { path: '**', component: ListContactComponent },
  
  ];
  
    
  @NgModule({
  
   declarations: [],
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule],
  
  })
  
  export class RoutingModule {}