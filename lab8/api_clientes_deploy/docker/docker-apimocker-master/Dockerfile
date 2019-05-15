FROM node:8
WORKDIR /apimocker
RUN mkdir -p /apimocker/conf.d /apimocker/responses/clientes
RUN chmod 777 -R /apimocker
COPY /conf.d/config-generated.json /apimocker/conf.d
COPY /responses/mock/clientes/*.json /apimocker/responses/clientes/
RUN npm install -g apimocker --unsafe-perm=true --allow-root
EXPOSE 8000
CMD ["apimocker", "-c", "/apimocker/conf.d/config-generated.json", "-p", "8000"]

