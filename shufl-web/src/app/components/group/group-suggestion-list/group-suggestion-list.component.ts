import { Component, Input, OnInit } from '@angular/core';
import { GroupSuggestionDownloadModel } from "src/app/models/download-models/group-suggestion.model";
import { DataService } from "src/app/services/data.service";

@Component({
    selector: 'app-group-suggestion-list',
    templateUrl: './group-suggestion-list.component.html',
    styleUrls: ['./group-suggestion-list.component.scss']
})
export class GroupSuggestionListComponent implements OnInit {
    @Input() groupId!: string;
    groupSuggestions!: Array<GroupSuggestionDownloadModel>;
    isLoading: boolean = true;

    constructor(private dataService: DataService) { }

    ngOnInit(): void {
        if (this.groupId != null) {
            this.getGroupSuggestions(this.groupId);
        }
    }

    private async getGroupSuggestions(groupIdentifier: string): Promise<void> {
        try {
            this.groupSuggestions = await this.dataService.getArrayAsync<GroupSuggestionDownloadModel>(`GroupSuggestion/GetAll?groupIdentifier=${groupIdentifier}`, GroupSuggestionDownloadModel);
        }
        catch (err) {
            console.log(err);
        }
        finally {
            this.isLoading = false;
        }
    }

}
