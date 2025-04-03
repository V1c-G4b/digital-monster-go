import { ipcMain } from 'electron';
import { getMonster } from '../api/monsterApiClient';

ipcMain.handle('get-monster', async (_event, id: string) => {
    try {
        const data = await getMonster(id);
        return { ok: true, data };
    } catch (error) {
        console.error('Erro ao buscar monster:', error);
        return { ok: false, message: 'Erro ao buscar o monster' };
    }
});
