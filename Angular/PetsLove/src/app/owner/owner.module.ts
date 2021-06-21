import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOwnerComponent } from './list-owner/list-owner.component';
import { CreateOwnerComponent } from './create-owner/create-owner.component';
import { EditOwnerComponent } from './edit-owner/edit-owner.component';



@NgModule({
  declarations: [
    ListOwnerComponent,
    CreateOwnerComponent,
    EditOwnerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class OwnerModule { }
