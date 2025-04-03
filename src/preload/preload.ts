import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("digitalGoAPI", {
  getMonster: (id: string) => ipcRenderer.invoke('get-monster', id),
  feedMonster: (id: string) => ipcRenderer.invoke('get-monster', id),
  restMonster: (id: string) => ipcRenderer.invoke('get-monster', id),
  playMonster: (id: string) => ipcRenderer.invoke('get-monster', id)
});


document.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key === 'r') {
      e.preventDefault();
      window.location.href = '#/';
  }
});