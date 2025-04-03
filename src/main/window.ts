import { BrowserWindow } from "electron";
import * as path from "path";
import * as url from "url";
import chokidar from "chokidar";

export function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.resolve(__dirname, "..", "preload", "preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });
  win.loadURL(
    url.format({
      pathname: path.resolve(
        __dirname,
        "..",
        "..",
        "dist",
        "renderer",
        "browser",
        "index.html"
      ),
      protocol: "file:",
      slashes: true,
    }) + "#/"
  );

  if (process.env.NODE_ENV !== "production") {
    const indexPath = path.resolve(
      __dirname,
      "..",
      "..",
      "dist",
      "renderer",
      "browser",
      "index.html"
    );

    const watcher = chokidar.watch(indexPath, { ignoreInitial: true });

    watcher.on("change", () => {
      console.log(
        "[Soft Reload] index.html alterado! Recarrengando renderer..."
      );
      if (win && !win.isDestroyed()) {
        win.webContents.reload();
      }
    });
  }
}
