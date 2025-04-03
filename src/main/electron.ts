import { app } from "electron";
import { createWindow } from "./window";
import "./ipcHandlers"; // Handlers isolados
try {
  require("electron-reloader")(module, { watchRenderer: true });
} catch (err) {
  console.log("Reload error:", err);
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
  if (createWindow) createWindow();
});
