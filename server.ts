import 'zone.js/dist/zone-node';
import 'reflect-metadata';

import { enableProdMode } from '@angular/core';

import * as express from 'express';
import { join } from 'path';

enableProdMode();

const app = express();

const PORT = process.env.PORT || 4000;
const DIST_FOLDER = join(process.cwd(), 'dist');

const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist/server/main.bundle');

import { ngExpressEngine } from '@nguniversal/express-engine';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));

app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'browser'));

app.get('/api/*', (req, res) => {
  res.status(404).send('data requests are not supported');
});

app.get('*.*', express.static(join(DIST_FOLDER, 'browser')));

app.get('*', (req, res) => {
  res.render(join(DIST_FOLDER, 'browser', 'index.html'), { req });
});

app.listen(PORT, () => {
  console.log(`Node server listening on http://localhost:${PORT}`);
});
