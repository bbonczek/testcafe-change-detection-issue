import { Component } from '@angular/core';
import { WindowSizeService } from './window-size.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-root',
    template: `
    <div class="container">
        <mat-sidenav-container class="container">
            <mat-sidenav class="sidenav" [mode]="'side'" [opened]="isSidenavOpened | async">
                <p>Item 1</p>
                <p>Item 2</p>
                <p>Item 3</p>
                <p>Item 4</p>
            </mat-sidenav>
            <mat-sidenav-content>
                <p>Content goes here.</p>
            </mat-sidenav-content>
        </mat-sidenav-container>
    </div>
    `,
    styles: [`
        .container {
            height: 550px
        }

        .sidenav {
            width: 180px;
        }

        p {
            cursor: pointer;
            height: 48px;
            line-height: 48px;
            padding-left: 16px;
            padding-right: 16px;
        }

        .inner-container {
            height: 500px;
        }
    `]
})
export class AppComponent {
    private isSidenavOpened: Observable<boolean>;

    constructor(public service: WindowSizeService) {
        this.isSidenavOpened = service.resizeEvent;
    }
}
