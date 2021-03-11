import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import {
  FuncionarioListaComponent
} from './funcionario-lista/funcionario-lista.component';

const routes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'users', component: FuncionarioListaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
