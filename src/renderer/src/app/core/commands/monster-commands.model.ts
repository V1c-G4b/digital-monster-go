// monster-commands.model.ts
export type MonsterCommandType = 'feed' | 'rest' | 'play' | 'monster-loaded';

export interface MonsterCommand {
    type: MonsterCommandType;
    payload?: any;
}
