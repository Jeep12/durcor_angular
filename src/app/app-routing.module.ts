import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { VerifyAccountComponent } from './components/verifyaccount/verifyaccount.component';
import { AuthGuard } from './auth.guard';
import { RoleGuard } from './role.guard';
import { PanelControlComponent } from './components/panel-control/panel-control.component';
import { ShowProductsComponent } from './components/show-products/show-products.component';
import { ContactComponent } from './components/contact/contact.component';
import { ShowTicketsComponent } from './components/show-tickets/show-tickets.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'verify-account', component: VerifyAccountComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard], // Protege todas las rutas hijas aquí
    children: [
      {
        path: 'panel-control',
        component: PanelControlComponent,
        canActivate: [AuthGuard, RoleGuard] // Solo admin puede acceder a esta ruta
      },
      {
        path: 'products',
        component: ShowProductsComponent,
        canActivate: [AuthGuard] // Protege esta ruta
      },
      {
        path: 'contact',
        component: ContactComponent,
        canActivate: [AuthGuard] // Protege esta ruta
      },
      {
        path: 'tickets',
        component: ShowTicketsComponent,
        canActivate: [AuthGuard] // Protege esta ruta
      }
    ]
  },
  { path: '**', redirectTo: 'login' } // Redirige cualquier ruta desconocida al login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
