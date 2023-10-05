FROM ubuntu:latest
RUN apt-get update && apt-get install -y curl && apt-get install iproute2 -y
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash -
RUN apt-get install -y nodejs
RUN mkdir -p /app
WORKDIR /app
COPY . .
RUN npm install -g typescript ts-node
RUN npm install
EXPOSE 3000
RUN npm run build
CMD ["npm", "start"]
