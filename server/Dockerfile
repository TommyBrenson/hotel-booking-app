FROM node:alpine AS Production

ENV NODE_ENV=production

WORKDIR /usr/src/server

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY --chown=node:node . .

EXPOSE 8080

CMD ["sh", "-c", "npm run start"]