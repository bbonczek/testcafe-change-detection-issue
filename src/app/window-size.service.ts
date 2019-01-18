import { Injectable } from '@angular/core';
import { fromEvent } from 'rxjs';
import {
    debounceTime,
    map,
  } from 'rxjs/operators';

@Injectable()
export class WindowSizeService {
    resizeEvent = fromEvent(window, 'resize').pipe(
        debounceTime(300),
        map((e) => {
            if (window.innerWidth > 800) {
                return true;
            } else {
                return false;
            }
        })
    );
}
