const autorestart = true
const watch = false
const maxMemoryRestart = '128M'

module.exports = {
  apps : [
    {
      name: "domains",
      instances: 1,
      autorestart,
      watch,
      max_memory_restart: maxMemoryRestart,
      script: "./node_modules/nuxt/bin/nuxt.js",
      args: "start",
      env: {
         PORT: 3004
      }
    }
  ]
}


