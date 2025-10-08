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

### 3) Generate Prisma Client and push db
```bash
# Generate Prisma Client from the schema
npx prisma generate --schema='./src/prisma/schema.prisma'

# Run initial migration and apply it to the database
npx prisma migrate dev --name init --schema='./src/prisma/schema.prisma'

```



### 4) Start the dev server
```bash
npm run dev
```



