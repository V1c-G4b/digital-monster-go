export abstract class MonsterApi {
  abstract getMonster(id: string): Promise<any>;
  abstract feedMonster(id: string): Promise<any>;
  abstract restMonster(id: string): Promise<any>;
  abstract playMonster(id: string): Promise<any>;
}
