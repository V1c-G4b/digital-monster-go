import { Inject, inject, Injectable } from '@angular/core';
import { MonsterStateService } from './monsterState.service';
import { MonsterEventDispatcher } from '../events/monster-event-dispatcher';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MonsterApi } from '../api/monster.api';
import { MonsterCommandBus } from '../commands/monster.command-bus';

@Injectable({
  providedIn: 'root',
})
export class InitialLoaderService {
  constructor(
    @Inject(MonsterApi) private api: MonsterApi,
    private state: MonsterStateService,
    private dispatcher: MonsterEventDispatcher
  ) {}

  async loadInitialData() {
    const monsterId = '8dc5a635-b49c-4cb7-875b-57e14982c613';

    const monster = await this.api.getMonster(monsterId);
    console.log(monster)
    this.state.set(monster);

    this.dispatcher.emit({ type: 'monster-loaded', timestamp: Date.now() });
  }
}
