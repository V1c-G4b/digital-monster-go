import { Injectable } from "@angular/core";
import { MonsterCommand, MonsterCommandType } from "./monster-commands.model";

@Injectable({ providedIn: 'root' })
export class MonsterCommandFactory {
    static create(type: MonsterCommandType, payload?: any): MonsterCommand {
        return { type, payload };
    }
}
