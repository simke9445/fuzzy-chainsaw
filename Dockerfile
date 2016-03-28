FROM node:5.8.0

WORKDIR /usr/local/lib/node_modules/npm

RUN npm install --save fs-extra

RUN sed -i s/graceful-fs/fs-extra/g /usr/local/lib/node_modules/npm/lib/utils/rename.js

RUN sed -i s/fs.rename/fs.move/g /usr/local/lib/node_modules/npm/lib/utils/rename.js

WORKDIR /app

RUN npm install -g grunt-cli

RUN npm install

EXPOSE 3000

CMD npm run start-production