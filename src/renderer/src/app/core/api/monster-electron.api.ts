// core/api/monster-electron.api.ts
import { Injectable } from '@angular/core';
import { MonsterApi } from './monster.api';

declare global {
  interface Window {
    digitalGoAPI: {
      getMonster: (id: string) => Promise<any>;
      feedMonster: (id: string) => Promise<any>;
      restMonster: (id: string) => Promise<any>;
      playMonster: (id: string) => Promise<any>;
    }
  }
}

@Injectable({ providedIn: 'root' })
export class MonsterElectronApiService implements MonsterApi {
    getMonster(id: string): Promise<any> {
        return window.digitalGoAPI.getMonster(id);
    }

    feedMonster(id: string): Promise<any> {
        return window.digitalGoAPI.feedMonster(id);
    }

    restMonster(id: string): Promise<any> {
        return window.digitalGoAPI.restMonster(id);
    }

    playMonster(id: string): Promise<any> {
        return window.digitalGoAPI.playMonster(id);
    }
}
