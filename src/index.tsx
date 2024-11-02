import React from "npm:react";
import ReactDOMServer from 'npm:react-dom/server';
import App from "./app.tsx";

const Index = () => {

  return (
    <html>
      <head>
        <title>page</title>
        <link rel="stylesheet" href="./styles/globals.css" />
        <link rel="stylesheet" href="./styles/card.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <div id="root">
          <App />
        </div>
      </body>
    </html>
  );

};

export default function render() {
  return ReactDOMServer.renderToString(<Index />);
}
