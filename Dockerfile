FROM node:8-slim

# Create app directory
RUN mkdir -p /app

# WORKDIR /project
WORKDIR /app

ADD examples/package.json /app
ADD examples/package-lock.json /app

# Install app dependencies and clear cache
RUN npm install && npm cache clean --force

# Bundle app source
ADD dist/ /app/dist/

# Add and change entrypoint name
ADD examples/dashboard.js /app/entrypoint.js

EXPOSE 3050

ENTRYPOINT node /app/entrypoint.js