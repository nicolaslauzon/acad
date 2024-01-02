FROM node:21.1.0

WORKDIR /frontend

COPY package*.json .

RUN npm i

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]
