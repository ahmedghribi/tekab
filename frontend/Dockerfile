FROM node:lts-alpine
WORKDIR /var/www/html
COPY package*.json ./
RUN  npm install -g @vue/cli
RUN  npm update 
COPY . . 
EXPOSE 8080
CMD ["npm", "run", "serve"]