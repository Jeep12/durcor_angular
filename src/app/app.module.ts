import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importa FormsModule para manejar formularios
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule para realizar solicitudes HTTP

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component'; // Asegúrate de que la ruta sea correcta
import { AuthService } from './services/auth.service';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { FirebaseCheckComponentComponent } from './components/firebase-check-component/firebase-check-component.component'; // Asegúrate de que tengas un archivo environment configurado

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoaderComponent } from './components/loader/loader.component';
import { VerifyAccountComponent } from './components/verifyaccount/verifyaccount.component';
import { BannerDashboardComponent } from './components/banner-dashboard/banner-dashboard.component';
import { ListTicketsComponent } from './components/list-tickets/list-tickets.component';
import { PanelControlComponent } from './components/panel-control/panel-control.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { AddTicketComponent } from './components/add-ticket/add-ticket.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { ManageInventoryComponent } from './components/manage-inventory/manage-inventory.component';
import { EmailSchedulerComponent } from './components/email-scheduler/email-scheduler.component';
import { ListEmailSchedulerComponent } from './components/list-email-scheduler/list-email-scheduler.component';
import { ShowProductsComponent } from './components/show-products/show-products.component';
import { ContactComponent } from './components/contact/contact.component';
import { ShowTicketsComponent } from './components/show-tickets/show-tickets.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavigationComponent,
    HomeComponent,
    RegisterComponent,
    FirebaseCheckComponentComponent,
    DashboardComponent,
    VerifyAccountComponent,
    LoaderComponent,
    BannerDashboardComponent,
    ListTicketsComponent,
    PanelControlComponent,
    AddProductComponent,
    AddCategoryComponent,
    ListUserComponent,
    AddTicketComponent,
    ListUsersComponent,
    ManageInventoryComponent,
    EmailSchedulerComponent,
    ListEmailSchedulerComponent,
    ShowProductsComponent,
    ContactComponent,
    ShowTicketsComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    BrowserAnimationsModule,

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
