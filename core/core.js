import YAML from 'yaml'
import { VK } from 'vk-io'
import cron from 'node-cron'

// Импорт системных модулей
import { readFileSync, readdirSync } from 'fs'

// Импорт компонентов ядра
import Logger from './logger.js'

// Импорт конфигураций проекта
const config = YAML.parse(readFileSync('config.yml', 'utf8'))
const project = JSON.parse(readFileSync('package.json', 'utf8'))

// Инициализация vk-io
const vk = new VK({ token: config.longpoll.token, v: config.longpoll.version })

// Сообщение о запуске
Logger.logInfo(`[INFO] v${project.name} v${project.version} is running`)

// Сообщение в лог о подключении к VK API
Logger.logInfo('[INFO] Connecting to the VK')

// Старт получения событий ВК
vk.updates.startPolling().then(() => Logger.logInfo('[INFO] VK: connected successfully'))
  cron.schedule(config.settings.time, () => {
  const attachment = vk.upload.messagePhoto({
	  source: {	
		  value: config.settings.img
	  }
  })
  .then((attachment) =>
    vk.api.messages.send({
      message: config.settings.msg,
      attachment,
      chat_id: config.settings.chat,
      random_id: 0
	}));
})
