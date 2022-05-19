FROM node:17-alpine AS development
WORKDIR /
COPY package*.json ./
RUN yarn --only=development
COPY . .
RUN yarn build
CMD [ "yarn", "dev" ]
