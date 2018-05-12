import React from 'react';
import { hydrate } from 'react-dom';
import Home from '../components/Home';

hydrate(<Home {...window.__APP_INITIAL_STATE__} />, document.getElementById('root'));