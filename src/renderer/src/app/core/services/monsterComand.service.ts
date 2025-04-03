import { Injectable, Inject } from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { MonsterApi } from "../api/monster.api";
import { MonsterCommand } from "../commands/monster-commands.model";
import { MonsterCommandBus } from "../commands/monster.command-bus";
import { MonsterEventDispatcher } from "../events/monster-event-dispatcher";
import { MonsterStateService } from "./monsterState.service";

@Injectable({
  providedIn: 'root',
})
export class MonsterCommandService {

  constructor(
    @Inject(MonsterApi) private api: MonsterApi,
    private state: MonsterStateService,
    private commandBus: MonsterCommandBus,
    private dispatcher: MonsterEventDispatcher,
  ) {
    console.log('debug5')
    this.commandBus.commands$
      .pipe(takeUntilDestroyed())
      .subscribe((cmd) => this.handle(cmd));
  }

  private async handle(command: MonsterCommand) {
    console.log('debug3')
    const id = this.state.id$();
    if (!id) return;

    switch (command.type) {
      case 'feed':
        console.log('debug2')
        const fed = await this.api.feedMonster(id);
        this.state.set(fed);
        this.dispatcher.emit({ type: 'feed', timestamp: Date.now() });
        break;
      case 'rest':
        const rested = await this.api.restMonster(id);
        this.state.set(rested);
        this.dispatcher.emit({ type: 'rest', timestamp: Date.now() });
        break;
      case 'play':
        const played = await this.api.playMonster(id);
        this.state.set(played);
        this.dispatcher.emit({ type: 'play', timestamp: Date.now() });
        break;
    }
  }
}
