FROM node:10
WORKDIR /app

COPY package.json /app
RUN npm install
COPY app.js /app

CMD ["node" "app.js"] 

EXPOSE 9000


