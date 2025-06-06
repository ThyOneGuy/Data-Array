# Omaha Realty Website

This project contains a small web application for a local realtor in Omaha, Nebraska. It is built with [Express](https://expressjs.com/) and [EJS](https://ejs.co/) templates so new pages and routes can easily be added.

## Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm start
   ```
3. Visit `http://localhost:3000` in your browser.

## Hosting Considerations

The app serves static assets from the `public/` directory and renders pages from the `views/` directory. It can be hosted on any Node.js platform (Heroku, Render, etc.) or run as a container. The server listens on the port defined by the `PORT` environment variable, which most hosting providers set automatically.

## Structure

- `app.js` – application entry point
- `routes/` – route definitions
- `views/` – EJS view templates
- `public/` – static CSS and JavaScript

Feel free to modify or extend these modules to suit future requirements.
