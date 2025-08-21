
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://dante1717.github.io/game-mood/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/game-mood"
  },
  {
    "renderMode": 2,
    "route": "/game-mood/home"
  },
  {
    "renderMode": 2,
    "route": "/game-mood/controllers"
  },
  {
    "renderMode": 2,
    "route": "/game-mood/headsets"
  },
  {
    "renderMode": 2,
    "route": "/game-mood/keyboards"
  },
  {
    "renderMode": 2,
    "route": "/game-mood/mice"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 8271, hash: 'bcc8a095ac1f1a5ce3b180b7d25aa06c42c462377b60cce72b4cad59180d9025', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 8029, hash: 'e7298217f461055211ab3dd24a32284ae76c8f2b5dec16f86710e163b86d6c52', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 31997, hash: 'abd2f2beb03ce30e1c737b65e1bfbaad5b30befdf316467823d1f7dcdf909fe5', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'mice/index.html': {size: 31447, hash: 'ec1e2c49bf33c2f739d7c52e9a775a947f0922f4d533dcdef97769bab848fd7c', text: () => import('./assets-chunks/mice_index_html.mjs').then(m => m.default)},
    'controllers/index.html': {size: 36388, hash: '411f16177250f348a6f75d1ff06adc882e12a881f57e0837f47c63661b53b331', text: () => import('./assets-chunks/controllers_index_html.mjs').then(m => m.default)},
    'headsets/index.html': {size: 30555, hash: 'a07963523fd9836b61e1e17afa6a38f9df811d1c38879b779e77b6e611123353', text: () => import('./assets-chunks/headsets_index_html.mjs').then(m => m.default)},
    'keyboards/index.html': {size: 36288, hash: 'f426f8c412409dd8da13271b79ac7e987a32d23e7385377c7337f08c7640841d', text: () => import('./assets-chunks/keyboards_index_html.mjs').then(m => m.default)},
    'index.html': {size: 31985, hash: 'cd86dc6f0b8fb0fd2de9a7ffa638e41f05999d197589eaa175a5f7f396dd303f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-ZXCP4ZL2.css': {size: 636, hash: 'YegDaTc7qSs', text: () => import('./assets-chunks/styles-ZXCP4ZL2_css.mjs').then(m => m.default)}
  },
};
