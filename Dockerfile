FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM node:20-alpine AS build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:20-alpine AS docs
WORKDIR /app
RUN npm install -g serve
COPY --from=build /app/out ./out
CMD ["serve", "out", "-l", "3000"]
