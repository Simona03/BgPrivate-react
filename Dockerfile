# Specify the base image
FROM node:16

WORKDIR /usr/src/app

COPY .. .

# Start the application
CMD ["npm","run","dev"]
