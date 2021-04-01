import { User } from "./user.model";

export class GroupSuggestionRating {
    id!: string;
    overallRating!: number;
    lyricsRating!: number | undefined;
    vocalsRating!: number | undefined;
    instrumentalsRating!: number | undefined;
    compositionRating!: number | undefined;
    comment!: string;
    createdOn!: string;
    createdBy!: User;
    lastUpdatedOn!: string;

    constructor() {}
}