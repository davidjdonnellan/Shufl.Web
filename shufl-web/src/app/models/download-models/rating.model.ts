export class Rating {
    id!: string;
    overallRating!: number;
    overallRatingsCount: number | undefined;
    lyricsRating!: number;
    lyricsRatingsCount: number | undefined
    vocalsRating!: number;
    vocalsRatingsCount: number | undefined;
    instrumentalsRating!: number;
    instrumentalsRatingsCount: number | undefined;
    compositionRating!: number;
    compositionRatingsCount: number | undefined;
    comment!: string;
    username!: string;
    displayName!: string;

    constructor(
        id: string,
        overallRating: number,
        lyricsRating: number,
        vocalsRating: number,
        instrumentalsRating: number,
        compositionRating: number,
        comment: string,
        username: string,
        displayName: string
    ) {
        this.id = id;
        this.overallRating = overallRating;
        this.lyricsRating = lyricsRating;
        this.vocalsRating = vocalsRating;
        this.instrumentalsRating = instrumentalsRating;
        this.compositionRating = compositionRating;
        this.comment = comment;
        this.username = username;
        this.displayName = displayName;
    }
}