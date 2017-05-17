import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';

@NgModule({
    imports: [BrowserModule, AppRoutingModule],
    declarations: [AppComponent, HomeComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
