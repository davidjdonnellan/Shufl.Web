import { Component, OnInit } from '@angular/core';
import { NgModel } from "@angular/forms";

@Component({
    selector: 'app-group-create',
    templateUrl: './group-create.component.html',
    styleUrls: ['./group-create.component.scss']
})
export class GroupCreateComponent implements OnInit {
    groupNameActive: boolean = false;
    groupNamePopulated: boolean = false;

    constructor() { }

    ngOnInit(): void {
    }
    
    public changeInputState(input: NgModel, active: boolean): void {
        if (input.name === 'groupName') {
            this.groupNameActive = active;
            this.groupNamePopulated = input.value !== '';
        }
    }

}
