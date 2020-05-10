import { Component } from "@angular/core";

@Component({
    selector: "app-profile",
    templateUrl: "./profile.component.html",
    styleUrls: ["./profile.component.css"],
})
export class ProfileComponent {
    profile = {name: "", age: "", school: ""};

    constructor() {
        this.fetchData();
    }

    fetchData = function () {
        this.profile = {
            name: "Joe Root",
            age: "32y",
            school: "San Jose Higher Secondary College",
        };
    };
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
