export class Rating {
    id!: string;
    overallRating!: number;
    overallRatingsCount: number | undefined;
    lyricsRating!: number | undefined;
    lyricsRatingsCount: number | undefined
    vocalsRating!: number | undefined;
    vocalsRatingsCount: number | undefined;
    instrumentalsRating!: number | undefined;
    instrumentalsRatingsCount: number | undefined;
    compositionRating!: number | undefined;
    compositionRatingsCount: number | undefined;
    comment!: string;
    username!: string;
    displayName!: string;

    constructor(
        id: string,
        overallRating: number,
        lyricsRating: number | undefined,
        vocalsRating: number | undefined,
        instrumentalsRating: number | undefined,
        compositionRating: number | undefined,
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