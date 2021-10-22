FROM node:lts-alpine
WORKDIR /opt/next

COPY package*.json ./
RUN npm install

COPY ./ /opt/next/

#CMD npm ci && npm run build && groupadd -r next && useradd -r -g next next && chown -R next:next .next
#USER next
RUN npm run build && chown -R node:node .next
USER node

CMD ["npm", "run", "dev"]

