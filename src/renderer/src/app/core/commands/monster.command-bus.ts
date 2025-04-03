import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MonsterCommand } from './monster-commands.model';

@Injectable({ providedIn: 'root' })
export class MonsterCommandBus {
    private command$ = new Subject<MonsterCommand>();

    get commands$() {
        return this.command$.asObservable();
    }

    dispatch(command: MonsterCommand) {
      console.log(command)
        this.command$.next(command);
    }
}
