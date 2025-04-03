import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-hud',
  standalone: true,
  template: `
    <div>
      <p>❤️ Saúde: {{ health() }}</p>
      <p>🍗 Fome: {{ hunger() }}</p>
      <p>⚡ Energia: {{ energy() }}</p>
      <p>😊 Felicidade: {{ happiness() }}</p>
    </div>
  `,
  styles: [
    `
      .alert {
        animation: blink 1s infinite;
      }
      @keyframes blink {
        0% {
          opacity: 1;
        }
        50% {
          opacity: 0.5;
        }
        100% {
          opacity: 1;
        }
      }
    `,
  ],
})
export class HudComponent {
  health = input.required<number>();
  hunger = input.required<number>();
  energy = input.required<number>();
  happiness = input.required<number>();
}
