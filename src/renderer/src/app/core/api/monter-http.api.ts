import { inject, Injectable } from '@angular/core';
import { MonsterApi } from './monster.api';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MonsterHttpApiService implements MonsterApi {
  http = inject(HttpClient);
  baseURL = 'http://localhost:8080'; // ✅ corrigido

  getMonster(id: string): Promise<any> {
    return firstValueFrom(this.http.get(`${this.baseURL}/monsters/${id}`));
  }

  feedMonster(id: string): Promise<any> {
    return firstValueFrom(this.http.patch(`${this.baseURL}/monsters/feed/${id}`, {}));
  }

  restMonster(id: string): Promise<any> {
    return firstValueFrom(this.http.patch(`${this.baseURL}/monsters/sleep/${id}`, {}));
  }

  playMonster(id: string): Promise<any> {
    return firstValueFrom(this.http.patch(`${this.baseURL}/monsters/play/${id}`, {}));
  }
}
