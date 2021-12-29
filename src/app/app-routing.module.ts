import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreItemDisplayComponent } from './components/store-item-display/store-item-display.component';
import { SingleItemDisplayComponent } from './components/single-item-display/single-item-display.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo:'app-store-item-display'},
  {path: 'app-store-item-display', component: StoreItemDisplayComponent},
  {path: 'app-single-item-display/:id', component: SingleItemDisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
