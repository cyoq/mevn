
FROM node:12
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
COPY package*.json ./

RUN npm install
RUN npm install -g @vue/cli
# Copy app source code
COPY . .

#Expose port and start application
EXPOSE 8081
CMD [ "npm", "run", "serve" ]