import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AlbumComponent } from './components/album/album.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ArtistComponent } from './components/artist/artist.component';
import { ButtonComponent } from './components/shared/button/button.component';
import { HomeComponent } from './components/home/home.component';
import { IconButtonComponent } from './components/shared/icon-button/icon-button.component';
import { LoadingIconComponent } from './components/shared/loading-icon/loading-icon.component';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';
import { TrackListItemComponent } from './components/shared/track-list/track-list-item/track-list-item.component';
import { genreFormatter } from "./pipes/genreFormatter.pipe";
import { TrackListComponent } from './components/shared/track-list/track-list.component';

@NgModule({
  declarations: [
    AlbumComponent,
    AppComponent,
    ArtistComponent,
    ButtonComponent,
    HomeComponent,
    IconButtonComponent,
    LoadingIconComponent,
    NotFoundComponent,
    TrackListComponent,
    TrackListItemComponent,
    genreFormatter
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
