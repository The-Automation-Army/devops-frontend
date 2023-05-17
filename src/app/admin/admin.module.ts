import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AnimalDetailComponent } from './components/animal-detail/animal-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditAnimalComponent } from './pages/edit-animal/edit-animal.component';
import { AnimalFormComponent } from './components/animal-form/animal-form.component';
import { CreateAnimalComponent } from './pages/create-animal/create-animal.component';


@NgModule({
  declarations: [
    AnimalDetailComponent,
    EditAnimalComponent,
    AnimalFormComponent,
    CreateAnimalComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminModule { }
