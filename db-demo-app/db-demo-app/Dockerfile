<<<<<<< HEAD
FROM node

WORKDIR /app/

COPY . .

RUN npm install

CMD ["node", "index.js"]


=======
FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]
>>>>>>> e55f10ef6e8721ecf985f21444f26510222ba77c
