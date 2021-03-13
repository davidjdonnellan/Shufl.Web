import { Album } from "./album.model";

export class Artist {
    id!: string;
    name!: string;
    url!: string;
    albums!: Array<Album> | undefined;
    
    constructor(
        id: string,
        name: string,
        url: string,
        albums: Array<Album> | undefined
    ) {
        this.id = id;
        this.name = name;
        this.url = url;
        this.albums = albums;
    }
}