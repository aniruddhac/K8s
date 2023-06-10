FROM node:20.3.0
ADD app.js /app.js
ENTRYPOINT ["node", "app.js"]