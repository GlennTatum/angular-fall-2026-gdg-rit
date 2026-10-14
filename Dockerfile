FROM node:22-bookworm

WORKDIR /app

COPY . /app/

WORKDIR /app/demo

RUN npm install -g @angular/cli

EXPOSE 4200

ENTRYPOINT [ "/usr/local/bin/npm", "start" ]
