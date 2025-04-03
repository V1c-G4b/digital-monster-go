import { NgIf } from "@angular/common";
import { Component, OnInit, inject } from "@angular/core";
import { MonsterCommandBus } from "../../../core/commands/monster.command-bus";
import { InitialLoaderService } from "../../../core/services/initialLoader.service";
import { MonsterStateService } from "../../../core/services/monsterState.service";
import { HudComponent } from "../../../shared/components/hud/hud.component";
import { TamagotchiActionsComponent } from "../../../shared/components/tamagotchi-actions/tamagotchiActions.component";
import { MonsterCommandService } from "../../../core/services/monsterComand.service";

@Component({
  selector: 'app-tamagotchi-home',
  template: `
    @if (monster()) {
      <div class="tamagotchi-home">
        <app-hud
          [health]="monster()?.Health ?? 0"
          [hunger]="monster()?.Hunger ?? 0"
          [energy]="monster()?.Energy ?? 0"
          [happiness]="monster()?.Happiness ?? 0"
          [name]="monster()?.Name ?? '???'"
        ></app-hud>

        <app-tamagotchi-actions
          (feed)="handleFeed()"
          (rest)="handleRest()"
          (play)="handlePlay()"
        ></app-tamagotchi-actions>
      </div>
    } @else {
      <p>carregando...</p>
    }
  `,
  styles: [`
      .tamagotchi-home {
        text-align: center;
        padding: 20px;
      }
      button {
        margin: 5px;
      }
    `
  ],
  imports: [HudComponent, TamagotchiActionsComponent],
})
export default class TamagotchiHomePage implements OnInit {
    private monsterState = inject(MonsterStateService);
    private commandBus = inject(MonsterCommandBus);
    private loader = inject(InitialLoaderService);
    private commandService = inject(MonsterCommandService);
    monster = this.monsterState.state$;

    ngOnInit(): void {
        this.loader.loadInitialData();
    }

    handleFeed() {
        this.commandBus.dispatch({ type: 'feed' });
    }
    handleRest() {
        this.commandBus.dispatch({ type: 'rest' });
    }
    handlePlay() {
        this.commandBus.dispatch({ type: 'play' });
    }
}
