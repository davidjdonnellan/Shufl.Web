import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { Album } from "src/app/models/album.model";
import { Artist } from "src/app/models/artist.model";
import { Track } from "src/app/models/track.model";
import { DataService } from "src/app/services/data.service";

@Component({
    selector: 'app-album',
    templateUrl: './album.component.html',
    styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
    albumData: Album = new Album(
        "",
        "",
        "",
        "",
        "",
        [],
        []
    );
    albumCoverArtUrl: string = "";
    dataLoaded: boolean = false;

    constructor(private route: ActivatedRoute,
                private dataService: DataService) { }

    async ngOnInit(): Promise<void> {
        var routeParams = this.route.snapshot.params;

        if (routeParams && Object.keys(routeParams).length === 0 && routeParams.constructor === Object) {
            await this.fetchRandomAlbumAsync();
        }
        else {
            await this.fetchAlbumAsync(routeParams.albumId);
        }
    }

    private async fetchRandomAlbumAsync(): Promise<void> {
        this.albumData = this.mapReceivedDataToAlbum(
            await this.dataService.getAsync<Album>('Album/RandomAlbum')
        );

        this.dataLoaded = true;
    }

    private async fetchAlbumAsync(albumId: string): Promise<void> {
        this.albumData = this.mapReceivedDataToAlbum(
            await this.dataService.getAsync<Album>(`Album/Album?albumId=${albumId}`)
        );

        this.dataLoaded = true;
    }

    private mapReceivedDataToAlbum(receivedAlbumData: any): Album {
        var tracks = this.mapReceivedTracks(receivedAlbumData.tracks.items);
        var artists = this.mapReceivedArtists(receivedAlbumData.artists);

        var album: Album = {
            id: receivedAlbumData.id,
            name: receivedAlbumData.name,
            url: receivedAlbumData.externalUrls.spotify,
            coverArtUrl: receivedAlbumData.images[0].url,
            releaseDate: receivedAlbumData.releaseDate,
            tracks: tracks,
            artists: artists
        };

        this.albumCoverArtUrl = album.coverArtUrl;

        return album as Album;
    }

    private mapReceivedArtists(receivedArtists: any): Array<Artist> {
        var artists = new Array<Artist>();

        receivedArtists.forEach((artist: any) => {
            artists.push(new Artist (
                artist.id,
                artist.name,
                artist.externalUrls.spotify,
                undefined
            ));
        });

        return artists;
    }

    private mapReceivedTracks(receivedTracks: any): Array<Track> {
        var tracks = new Array<Track>();

        receivedTracks.forEach((track: any) => {
            tracks.push(new Track(
                track.id,
                track.trackNumber,
                track.name,
                this.mapReceivedArtists(track.artists),
                track.durationMs,
                track.externalUrls.spotify
            ));
        });

        return tracks;
    }

}
