
FROM node:22

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

# Create public directory and set permissions
RUN mkdir -p /app/public/uploads /app/public/backup && \
    chmod -R 777 /app/public

EXPOSE 1337

CMD ["npm", "run", "develop"]
