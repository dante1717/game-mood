
export default {
  basePath: 'https://dante1717.github.io/game-mood',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
