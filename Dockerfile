# using nginx 
FROM node:lts-alpine

WORKDIR /server

COPY package*.json ./

RUN npm install

COPY . . 

EXPOSE 3030

CMD ["node", "services.js"]