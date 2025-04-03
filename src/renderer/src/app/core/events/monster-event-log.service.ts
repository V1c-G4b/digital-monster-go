import { Injectable } from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { MonsterEvent, MonsterEventDispatcher } from "./monster-event-dispatcher";

@Injectable({ providedIn: 'root' })
export class MonsterEventLogService {
    private log: MonsterEvent[] = [];

    constructor(private dispatcher: MonsterEventDispatcher) {
        this.dispatcher.events$
            .pipe(takeUntilDestroyed())
            .subscribe(event => this.log.push(event));
    }

    getLog() {
        return [...this.log];
    }
}
