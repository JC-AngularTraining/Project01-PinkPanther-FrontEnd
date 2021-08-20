import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UtilsModule } from './Feature/__Utils/utils.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavBarComponent } from './Feature/_nav-bar/nav-bar.component';
import { UsersComponent } from './Feature/_users/users.component';
import { AboutComponent } from './Feature/Routings/about/about.component';
import { GalleryComponent } from './Feature/Routings/gallery/gallery.component';
import { HistoryComponent } from './Feature/Routings/history/history.component';
import { HomeComponent } from './Feature/Routings/home/home.component';
import { PageNotFoundComponent } from './Feature/_page-not-found/page-not-found.component';
import { SignUpComponent } from './Feature/_users/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    GalleryComponent,
    HistoryComponent,
    AboutComponent,
    UsersComponent,
    PageNotFoundComponent,
    SignUpComponent,
  ],
  entryComponents: [UsersComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
    UtilsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
