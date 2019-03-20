const electron = require('electron')
const app = electron.app
let mainWindow

app.on('ready', () => {
  createMainScreen()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (!mainWindow) {
    createMainScreen()
  }
})

function createMainScreen () {
  mainWindow = new electron.BrowserWindow({

  })
  mainWindow.setMenu(null)
  mainWindow.toggleDevTools()
  mainWindow.loadFile('./src/main.html')
  mainWindow.on('closed', () => {
    mainWindow = null
  })
}
