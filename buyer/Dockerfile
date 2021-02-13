FROM node:15.8-alpine
WORKDIR /app
RUN npm config set update-notifier false
COPY package.json .
RUN npm install
COPY . .
ENTRYPOINT [""]
