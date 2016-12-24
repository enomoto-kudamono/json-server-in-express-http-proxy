FROM node:7-onbuild

MAINTAINER "Z.Enomoto <media.enomoto@gmail.com>"

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copy our code from the current folder to /app inside the container
COPY . /usr/src/app

# Build server
RUN npm run build

# Start server
CMD npm run server

# Make port 3000 available for publish
EXPOSE 3000
