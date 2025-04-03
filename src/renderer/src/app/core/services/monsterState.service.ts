import { Injectable, signal, computed, inject } from '@angular/core';
import { Monster } from '../../shared/models/monster.model';
import { of, switchMap, timer } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MonsterApi } from '../api/monster.api';

// monster-state.service.ts
@Injectable({ providedIn: 'root' })
export class MonsterStateService {
  private state = signal<Monster | null>(null);
  private api = inject(MonsterApi);

  state$ = computed(() => this.state());
  id$ = computed(() => this.state()?.ID ?? null);

  constructor() {
    timer(0, 60000)
      .pipe(
        takeUntilDestroyed(),
        switchMap(() => {
          const id = this.id$();
          if (!id) return of(null);
          return this.api.getMonster(id);
        })
      )
      .subscribe((monster) => {
        if (monster) this.state.set(monster);
      });
  }

  set(state: Monster) {
    this.state.set(state);
  }
  get() {
    return this.state();
  }
}
