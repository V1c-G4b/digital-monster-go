import { Component, output } from "@angular/core";

@Component({
  selector: 'app-tamagotchi-actions',
  standalone: true,
  template: `
    <button (click)="feed.emit()">🍗 Alimentar</button>
    <button (click)="rest.emit()">💤 Descansar</button>
    <button (click)="play.emit()">🎮 Brincar</button>
  `
})
export class TamagotchiActionsComponent {
    feed = output<void>();
    rest = output<void>();
    play = output<void>();
}
