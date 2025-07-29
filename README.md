# 🔗 URL Shortener

A fast, minimalist URL shortener with a responsive frontend and a fully serverless backend. Built using **Bootstrap** and **Font Awesome** on the frontend, and powered by **Cloudflare Workers** and **KV Storage** on the backend.

## ✨ Features

- ⚡ **Edge-deployed** with Cloudflare Workers – ultra-fast performance worldwide
- 💾 **Cloudflare KV** for persistent, scalable storage
- 📱 **Responsive UI** with Bootstrap – works seamlessly on all devices
- 🎨 Clean, intuitive design with Font Awesome icons
- 🔐 Optional support for custom short codes (e.g., `yourdomain.com/custom-key`)
- 📊 Ready for analytics and usage tracking extensions

---

## 🚀 Live Demo

[Check out the live version](#) *(optional – add your URL if deployed)*

---

## 🖥️ Frontend

Built with:

- [Bootstrap](https://getbootstrap.com/)
- [Font Awesome](https://fontawesome.com/)
- Simple form for inputting long URLs
- Displays shortened links with copy-to-clipboard support

---

## 🛠️ Backend

Powered by [Cloudflare Workers](https://developers.cloudflare.com/workers/) and [KV Storage](https://developers.cloudflare.com/workers/runtime-apis/kv/):

- Handles POST requests for new short URLs
- Stores and retrieves mappings between short codes and original URLs
- Redirects users on access via shortened links

---
