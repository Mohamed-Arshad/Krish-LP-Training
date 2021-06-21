import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';

import {ListOwnerComponent} from './owner/list-owner/list-owner.component';
import {CreateOwnerComponent} from './owner/create-owner/create-owner.component';
import {EditOwnerComponent} from './owner/edit-owner/edit-owner.component';

import {ListPetComponent} from './pet/list-pet/list-pet.component';
import {CreatePetComponent} from './pet/create-pet/create-pet.component';
import {EditPetComponent} from './pet/edit-pet/edit-pet.component';


@NgModule({
  declarations: [
    AppComponent,
    ListOwnerComponent,
    CreateOwnerComponent,
    EditOwnerComponent,
    ListPetComponent,
    CreatePetComponent,
    EditPetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
       {path:'owners', component:ListOwnerComponent},
       {path:'', component:ListOwnerComponent},
       {path:'createowner', component:CreateOwnerComponent},
       {path:'editowner/:id', component:EditOwnerComponent},
       {path:'pets', component:ListPetComponent},
       {path:'createpet', component:CreatePetComponent},
       {path:'editpet/:id', component:EditPetComponent},
      //{path:'pets',loadChildren: () => import('./pets/pets.module').then(m => m.PetsModule)}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }