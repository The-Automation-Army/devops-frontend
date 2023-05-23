import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalsPageComponent } from '../pages';
import { EditAnimalComponent } from './pages/edit-animal/edit-animal.component';
import { CreateAnimalComponent } from './pages/create-animal/create-animal.component';
import { SuppliersPageComponent } from './pages/suppliers-page/suppliers-page.component';
import { EditSupplierComponent } from './pages/edit-supplier/edit-supplier.component';
import { CreateSupplierComponent } from './pages/create-supplier/create-supplier.component';

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
    path: 'suppliers',
    component: SuppliersPageComponent,
  },
  {
    path: 'suppliers/:id',
    component: EditSupplierComponent
  },
  {
    path: 'createSupplier',
    component: CreateSupplierComponent,
  },
  {
    path: '**',
    redirectTo: 'animals',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
