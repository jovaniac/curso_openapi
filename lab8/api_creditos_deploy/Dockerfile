FROM node:8
WORKDIR /api
RUN mkdir -p /api/node /api/node/mock/creditos
RUN chmod 777 -R /api
COPY /node/config-generated.json /api/node
COPY /node/mock/creditos/*.json /api/node/mock/creditos/
RUN npm install -g apimocker --unsafe-perm=true --allow-root
EXPOSE 8000
CMD ["apimocker", "-c", "/api/node/config-generated.json", "-p", "8000"]

