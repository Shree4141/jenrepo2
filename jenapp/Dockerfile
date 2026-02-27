FROM node:latest
WORKDIR /EC2APP
COPY . .
COPY package.json /EC2APP
RUN npm install
EXPOSE 3000

CMD [ "npm", "start" ]