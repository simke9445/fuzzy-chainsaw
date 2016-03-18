FROM node:5.8.0

RUN mkdir /app

ADD . /app/

WORKDIR /app

RUN npm install grunt-cli -g

RUN npm install 

EXPOSE 3000

CMD npm run start-production