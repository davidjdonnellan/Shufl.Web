import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'genreFormatter' })
export class genreFormatter implements PipeTransform {
    transform(genre: string): string {
        let workingString: string[];
        let output: string = '';

        if(!genre.includes('-')) {
            workingString = genre.split(' ');

            workingString.forEach((word, index) => {
                output += (word[0].toUpperCase() + word.substr(1) + (index < workingString.length - 1 ? ' ' : ''));
            });
        }
        else {
            output = genre;
        }

        return output;
    }
}