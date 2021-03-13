import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AlbumComponent } from './components/album/album.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ButtonComponent } from './components/shared/button/button.component';
import { HomeComponent } from './components/home/home.component';
import { IconButtonComponent } from './components/shared/icon-button/icon-button.component';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';
import { TrackListItemComponent } from './components/shared/track-list-item/track-list-item.component';

@NgModule({
  declarations: [
    AlbumComponent,
    AppComponent,
    ButtonComponent,
    HomeComponent,
    IconButtonComponent,
    NotFoundComponent,
    TrackListItemComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
