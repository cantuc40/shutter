#From node image
FROM node:14-alpine

#Set working directory to /usr/src/app
WORKDIR /usr/src/app

#Copy file (package.json) to container working directory /usr/src/app ( . )
COPY ./package.json .
COPY ./package-lock.json .

#install dependencies
RUN npm install -g npm@latest && \
    npm install

#Copy files from local directory (.) to container directory (.)
COPY . .

#Expose to port 6000
EXPOSE 6000

#Run command npm start
CMD ["npm", "start"]