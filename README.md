# Next.js Todo Cache Prototype

This project is a **lightweight Todo application prototype** built with **Next.js v15** and **React**, designed to explore **persistent caching** without the overhead of setting up a full database.

All todos are stored in a **persistent file** on the server using `node-persist`. This means:

- Data is saved in the `./cache` folder.  
- Todos persist indefinitely until manually deleted.  
- No database setup is required — perfect for prototypes or learning.  
- **User-specific caching:** You can extend this code and modify the cache key (e.g., appending a user ID like `todoCache_user123`) so that each user has their own separate todo list stored independently.

---

## Features

- Create, update, and delete todo items  
- Server-side caching with `node-persist` (persistent, non-expiring)  
- Dynamic todo pages for individual items  
- Reusable React components (`Button`, `InsertBox`)  

---

## Installation

1. **Install dependencies**

```bash
npm install
```

2. **Start the server**
```bash
npm run dev
```