import { Component } from '@angular/core';
import { WindowSizeService } from './window-size.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-root',
    template: `
        <h3>Resize page, to check whether scren width is bigger than 800px, or not</h3>
        <h1>{{isScreenBigEnough | async}}</h1>
    `
})
export class AppComponent {
    private isScreenBigEnough: Observable<boolean>;

    constructor(public service: WindowSizeService) {
        this.isScreenBigEnough = service.resizeEvent;
    }
}
