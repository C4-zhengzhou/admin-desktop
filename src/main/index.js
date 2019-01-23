import { app, BrowserWindow, Menu } from 'electron'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path')
    .join(__dirname, '/static')
    .replace(/\\/g, '\\\\')
}

let mainWindow
const winURL =
  process.env.NODE_ENV === 'development'
    ? `http://localhost:9080`
    : `file://${__dirname}/index.html`

const menu = Menu.buildFromTemplate([
  {
    label: '系统',
    submenu: [
      {
        label: '清除缓存',
        role: 'reload'
      },
      {
        label: '重新加载',
        role: 'reload'
      },
      {
        label: '强制退出',
        role: 'reload'
      }
    ]
  },
  {
    label: '窗口',
    submenu: [
      {
        label: '最佳尺寸',
        role: 'reload'
      },
      {
        label: '显示侧边栏',
        role: 'reload'
      },
      {
        label: '显示顶栏',
        role: 'reload'
      }
    ]
  },
  {
    label: '用户',
    submenu: [
      {
        label: '修改资料',
        role: 'reload'
      },
      {
        label: '找回密码',
        role: 'reload'
      },
      {
        label: '退出登录',
        role: 'reload'
      }
    ]
  },
  {
    label: '支持',
    submenu: [
      {
        label: '说明文档',
        role: 'reload'
      },
      {
        label: '信息反馈',
        role: 'reload'
      },
      {
        label: '技术支持',
        role: 'reload'
      }
    ]
  }
])
function createWindow() {
  mainWindow = new BrowserWindow({
    height: 563,
    useContentSize: true,
    width: 1000
  })
  mainWindow.setMenu(menu)
  mainWindow.loadURL(winURL)
  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
