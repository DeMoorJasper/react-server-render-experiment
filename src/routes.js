import React from 'react';
import { renderToString } from 'react-dom/server';
import template from './template';
import { home, contact } from './bundles';

import Home from './components/Home';
import Contact from './components/Contact';

export default function registerRoutes(server) {
  server.get('/', async (req, res) => {
    let state = {
      ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
      port: 8080,
      hostname: require("os").hostname()
    }
    res.send(template({
      body: renderToString(<Home {...state} />),
      title: 'Hello world',
      initialState: state,
      scripts: [
        `/assets/js/${home}`
      ],
      description: 'A react server render test'
    }));
  });

  server.get('/contact', async (req, res) => {
    let state = {
      email: "hello@hello.com"
    }
    res.send(template({
      body: renderToString(<Contact {...state} />),
      title: 'Contact us',
      initialState: state,
      scripts: [
        `/assets/js/${contact}`
      ],
      description: 'A contact page woohoo'
    }));
  });
}