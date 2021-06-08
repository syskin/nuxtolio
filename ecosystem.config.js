module.exports = {
  apps: [
    {
      name: 'Nuxtolio',
      exec_mode: 'cluster',
      port: 4949,
      instances: 'max', // Or a number of instances
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start',
    },
  ],
}
