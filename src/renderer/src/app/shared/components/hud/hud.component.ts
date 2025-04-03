import { NgClass } from '@angular/common';
import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-hud',
  standalone: true,
  template: `
    <div class="console__screen" >
      <div class="pet__screen">
        <div class="pet" [ngClass]="{ alert: hunger() >= 100 }">
          <div class="pet__name">
            <span>{{ name() }}</span>
          </div>
          <div class="pet__image">
            <img src="image.png" alt="" />
          </div>
        </div>
      </div>

      <div class="hud">
        <div class="hud__status">
          <div class="hud__status_item">
            <span>❤️ Saúde</span>
            <div class="bar">
              <div class="bar__fill" [style.width.%]="health()"></div>
            </div>
          </div>

          <div class="hud__status_item">
            <span>🍗 fome</span>
            <div class="bar">
              <div class="bar__fill" [style.width.%]="hunger()"></div>
            </div>
          </div>

          <div class="hud__status_item">
            <span>⚡ Energia</span>
            <div class="bar">
              <div class="bar__fill" [style.width.%]="energy()"></div>
            </div>
          </div>

          <div class="hud__status_item">
            <span>😊 Felicidade</span>

            <div class="bar">
              <div class="bar__fill" [style.width.%]="happiness()"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .console__screen {
        border-radius: 24px;
        border: 4px solid #444;
        background: #252525;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
        padding: 24px;
      }

      .pet__screen {
        width: 555px;
        height: 320px;
        border-radius: 12px;
        background-image: url('public/forest.png');
        background-size: cover;
        background-position: center;
        background-color: #1a1a1a;
        box-shadow: inset 0 8px 16px rgba(0, 0, 0, 0.6),
          inset 0 -2px 4px rgba(255, 255, 255, 0.1),
          inset 0 0 0 2px rgba(255, 255, 255, 0.05);
          position: relative;
          overflow: hidden;
        .pet {
          height: 100%;
          display: flex;
          justify-content: end;
          align-items: center;
          flex-direction: column;
          .pet__name {
            color: #fff;
          }
        }
      }

      .pet__screen::after {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: 12px;
        background: linear-gradient(
          145deg,
          rgba(255, 255, 255, 0.1),
          transparent
        );
        pointer-events: none;
      }

      .hud {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding: 1rem;
        background: #222;
        color: #fff;
        border-radius: 8px;
        border: 2px solid #444;
        margin-top: 10px;

        width: 555px;

        &__status {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;

          &-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            background: #333;
            padding: 0.5rem;
            border-radius: 4px;
          }
        }

        .hud__status_item {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          align-items: self-start;
        }

        .bar {
          width: 100%;
          height: 12px;
          background: #444;
          border-radius: 4px;
          overflow: hidden;
        }

        .bar__fill {
          height: 100%;
          background: limegreen;
          transition: width 0.3s;
        }
      }

      .alert {
        animation: blink 1s infinite;
      }

      @keyframes blink {
        0%,
        100% {
          opacity: 1;
        }
        50% {
          opacity: 0.8;
        }
      }
    `,
  ],
  imports: [NgClass],
})
export class HudComponent {
  health = input.required<number>();
  hunger = input.required<number>();
  energy = input.required<number>();
  happiness = input.required<number>();
  name = input.required<string>();
}
