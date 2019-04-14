FROM node:10-alpine
RUN npm install yarn
COPY . .
RUN yarn install 
EXPOSE 5833
EXPOSE 5824
ENTRYPOINT ["sh", "-c", "yarn run start"]