FROM node:14-alpine
WORKDIR /app
RUN npm config set update-notifier false
COPY package.json .
RUN npm install
COPY . .
ENTRYPOINT [""]
