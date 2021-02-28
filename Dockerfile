FROM node:12-alpine

WORKDIR /usr/app
COPY package.json package.json ./ 

RUN npm

COPY . .

EXPOSE 3333
CMD ["node", "start"]