import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './components/Hello';
import { v } from 'vudu';

v({
  AustinNewsLight: {
    '@font-face': {
      fontFamily: 'AustinNewsLight',
      sources: [
        { path: '/static/fonts/AustinNewsDeck-Light.eot', format: 'embedded-opentype' },
        { path: '/static/fonts/AustinNewsDeck-Light.woff2', format: 'woff2' },
        { path: '/static/fonts/AustinNewsDeck-Light.woff', format: 'woff' },
        { path: '/static/fonts/AustinNewsDeck-Light.ttf', format: 'truetype' },
      ],
      fontWeight: 'normal',
      fontStyle: 'normal'
    }
  }
});

ReactDOM.render(<Hello />, document.getElementById('app'));
