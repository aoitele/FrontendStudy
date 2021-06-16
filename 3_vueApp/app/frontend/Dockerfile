FROM node:lts-alpine

WORKDIR /var/www

COPY ./frontend/package*.json ./
RUN npm install

COPY ./frontend /var/www/
CMD ["npm", "run", "serve"]
