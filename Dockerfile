FROM node:16-alpine

WORKDIR /app

COPY package*.json /

COPY .env .

RUN npm install --omit=dev

COPY . .

EXPOSE 3006

CMD ["npm", "start"]