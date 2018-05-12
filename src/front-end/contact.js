import React from 'react';
import { hydrate } from 'react-dom';
import Contact from '../components/Contact';

hydrate(<Contact {...window.__APP_INITIAL_STATE__} />, document.getElementById('root'));