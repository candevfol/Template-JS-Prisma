### BookingService — Setup Guide

Follow these steps to run the project locally.

### 1) Configure .env
Create a `.env` with below

```env
PORT = 3000
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/db_name"
```



### 2) Install dependencies
```bash
npm i
```

### 3) Generate Prisma Client
```bash
npx prisma generate
```

### 4) Start the dev server
```bash
npm run dev
```



