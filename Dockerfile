FROM node:12.18-alpine AS build
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --silent
COPY . .
RUN npm run build
FROM nginx:alpine AS production
WORKDIR /usr/share/nginx/html
COPY --from=build /usr/src/app/build .
EXPOSE 80