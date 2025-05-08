FROM node:18-alpine

WORKDIR /app

# Install git
RUN apk add --no-cache git

# Clone the SDK repository
RUN git clone https://github.com/Dayone-Joint-Stock-Company/gotit-api-javascript-sdk.git

# Copy package.json and install dependencies
COPY package.json .
RUN npm install

# Copy all source files
COPY . .

# Expose the port the app runs on
EXPOSE 5003

# Command to run the application
CMD ["node", "server.js"] 