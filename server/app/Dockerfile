# Problems may include: wrong base image choice, inefficient layers, missing dependency install, wrong port, weak production practice.

FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --only=production

COPY . .

EXPOSE 8080

VOLUME ["/usr/src/app/data"]

CMD ["node", "server.js"]

