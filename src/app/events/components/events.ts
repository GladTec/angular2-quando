import 'rxjs/add/operator/do';
import 'rxjs/add/operator/pluck';

import {Component, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {EventService} from '../services/event-service';


@Component({
    styleUrls: ['events.scss'],
    templateUrl: 'events.html',
    encapsulation: ViewEncapsulation.None
})

export class EventsComponent {
    filter: Observable<any>;

    constructor(public route: ActivatedRoute, public eventService: EventService) {
        this.filter = route.params
            .pluck('completed')
            .do((value: string) => eventService.filterEvents(value));
    }

    bootstrapEvents(): void {

        //eventService.createEvent(_title, _datetime, image);
    }
}