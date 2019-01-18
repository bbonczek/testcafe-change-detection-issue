import { Component } from '@angular/core';
import { WindowSizeService } from './window-size.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-root',
    template: `
    <div class="container">
        <h3>Resize page, to check whether scren width is bigger than 800px, or not</h3>
        <h1>{{isScreenBigEnough | async}}</h1>
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
    private isScreenBigEnough: Observable<boolean>;

    constructor(public service: WindowSizeService) {
        this.isScreenBigEnough = service.resizeEvent;
    }
}
