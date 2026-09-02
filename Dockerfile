FROM node:24-alpine AS build
WORKDIR /app
COPY package.json package-lock.json* bun.lock* ./
RUN npm install --no-audit --no-fund
COPY . .
ENV NITRO_PRESET=node
RUN npm run build

FROM node:24-alpine
WORKDIR /app
COPY --from=build /app/.output ./.output
ENV NODE_ENV=production PORT=3000
EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
