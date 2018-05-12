import resetCss from './resetCss';

export default ({ body, title, initialState, head, scripts, description }) => {
  initialState = typeof initialState === 'string' ? initialState : JSON.stringify(initialState);
  if (Array.isArray(scripts)) {
    scripts = scripts.map(script => {
      return `<script src='${script}'></script>`
    }).join('\n');
  }
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <meta name="description" content="${description || ''}">
        <script>window.__APP_INITIAL_STATE__ = ${initialState}</script>
        <title>${title}</title>
        ${head || ''}
        <style>
          ${resetCss}
          body {
            font-size: 1.6rem;
          }
        </style>
      </head>
      
      <body>
        <div id="root">${body}</div>
      </body>

      ${scripts || ''}
    </html>
  `;
};