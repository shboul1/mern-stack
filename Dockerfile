FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./

COPY client/package*.json client/
RUN npm run client-install

COPY server/package*.json server/
RUN npm run server-install

COPY client/ client/
RUN npm run client-build

COPY server/ server/

USER node

CMD ["npm", "run", "server-start"]

EXPOSE 443