FROM node:18-alpine AS builder

WORKDIR /app

RUN apk add --no-cache openssl

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

# Accept DATABASE_URL as a build argument
ARG DATABASE_URL
ENV DATABASE_URL=$DATABASE_URL

# Generate Prisma client for production
RUN npx prisma generate

RUN npm run build

FROM node:18-alpine AS runner

WORKDIR /app

RUN apk add --no-cache openssl

# Correct ENV syntax here
ENV NODE_ENV=production

COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/prisma ./prisma
# COPY --from=builder /app/next.config.js ./

# Don't copy .env — inject env vars at runtime instead
# COPY --from=builder /app/.env ./ 

EXPOSE 3000

CMD ["npm", "start"]
