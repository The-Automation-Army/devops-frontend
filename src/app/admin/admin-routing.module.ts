import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalsPageComponent } from '../pages';
import { EditAnimalComponent } from './pages/edit-animal/edit-animal.component';
import { CreateAnimalComponent } from './pages/create-animal/create-animal.component';

const routes: Routes = [
  {
    path: 'animals',
    component: AnimalsPageComponent,
  },
  {
    path: 'animals/:id',
    component: EditAnimalComponent,
  },
  {
    path: 'createAnimal',
    component: CreateAnimalComponent,
  },
  {
    path: '*',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
