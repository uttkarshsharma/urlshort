# 🔗 URL Shortener

A simple URL shortener built with:
- 🌐 Cloudflare Workers (Backend)
- 💅 Bootstrap + JS (Frontend)

## 🌍 Live Demo

Try it here: [shortenlinkz.pages.dev](https://shortenlinkz.pages.dev/)

## 🚀 How It Works

- Users enter a long URL
- The frontend sends a POST request to `/api/shorten`
- Cloudflare Worker stores the shortened slug in a KV Namespace
- Visiting the slug redirects to the long URL

## 🛠️ Tech Stack

- Cloudflare Workers + KV
- HTML, CSS (Bootstrap), JavaScript

## 📁 Folder Structure

```
url-shortener/
├── frontend/
│   ├── index.html
│   └── script.js
├── backend/
│   └── cloudflare-worker.js
```

## 📦 Deployment

Frontend: Host via Cloudflare Pages or GitHub Pages  
Backend: Deploy to Cloudflare Workers with KV binding

## ✨ Credits

Made with ❤️ by Uttkarsh
