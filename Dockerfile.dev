FROM node:18-alpine

# Create app directory
WORKDIR /app

# Installing dependencies
COPY package.json yarn.lock ./
RUN yarn install

COPY next.config.js ./next.config.js

COPY tsconfig.json ./tsconfig.json

# Expose PORTS
EXPOSE 3000

# Running the app
CMD ["yarn", "dev"]
