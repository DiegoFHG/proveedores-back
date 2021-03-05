FROM node:14.15.0-alpine3.11

RUN mkdir -p /home/node/proveedores-back/node_modules \
  && chown -R node:node /home/node/proveedores-back

WORKDIR /home/node/proveedores-back

COPY package*.json ./
COPY . .

RUN npm install

CMD ["npm", "run", "start"]

