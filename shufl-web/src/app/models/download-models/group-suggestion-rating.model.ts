import { User } from "./user.model";

export class GroupSuggestionRating {
    id!: string;
    overallRating!: number;
    lyricsRating!: number | null;
    vocalsRating!: number | null;
    instrumentalsRating!: number | null;
    compositionRating!: number | null;
    comment!: string;
    createdOn!: string;
    createdBy!: User;
    lastUpdatedOn!: string;

    constructor() {}
}