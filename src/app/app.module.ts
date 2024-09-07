import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';  // O roteamento principal
import { AppComponent } from './app.component';           // Componente raiz
import { IndexComponent } from './index/index.component'; // O componente Index criado

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent // Declara o componente Index aqui
  ],
  imports: [
    BrowserModule,
    AppRoutingModule  // O módulo de roteamento principal
  ],
  providers: [],
  bootstrap: [AppComponent]  // Define AppComponent como raiz da aplicação
})
export class AppModule { }
