import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AnimalDetailComponent } from './components/animal-detail/animal-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditAnimalComponent } from './pages/edit-animal/edit-animal.component';
import { AnimalFormComponent } from './components/animal-form/animal-form.component';
import { CreateAnimalComponent } from './pages/create-animal/create-animal.component';
import { HttpClientModule } from '@angular/common/http';
import { SupplierDetailComponent } from './components/supplier-detail/supplier-detail.component';
import { SupplierFormComponent } from './components/supplier-form/supplier-form.component';
import { CreateSupplierComponent } from './pages/create-supplier/create-supplier.component';

@NgModule({
  declarations: [
    AnimalDetailComponent,
    EditAnimalComponent,
    AnimalFormComponent,
    CreateAnimalComponent,
    SupplierDetailComponent,
    EditAnimalComponent,
    SupplierFormComponent,
    CreateSupplierComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
})
export class AdminModule {}
