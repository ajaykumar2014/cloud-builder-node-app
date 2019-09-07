FROM node:10
WORKDIR /app

COPY app.js package.json /

RUN npm install

CMD ["node" "app"] 

EXPOSE 9000


