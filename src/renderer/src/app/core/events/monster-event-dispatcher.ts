import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { MonsterCommandType } from "../commands/monster-commands.model";

export interface MonsterEvent {
    type: MonsterCommandType;
    timestamp?: any;
}

@Injectable({ providedIn: 'root' })
export class MonsterEventDispatcher {
    private event$ = new Subject<MonsterEvent>();

    get events$() { return this.event$.asObservable(); }

    emit(event: MonsterEvent) { this.event$.next(event); }
}
