# base image
FROM node:12.2.0 as build-stage
# set working directory
WORKDIR /app
# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY skillz-web/package.json /app/package.json
RUN npm install
RUN npm install -g @angular/cli

# add app
COPY skillz-web /app
RUN npm run build -- --output-path=/app/dist/skillz

#RUN sed -i -r "s|80|$PORT|g" /app/template.conf
# start app
# CMD ng serve --host 0.0.0.0 --port ${PORT}
# -----------------------------------------------------
# Nginx の Docker 環境を構築する
# -----------------------------------------------------
#FROM node:10.17-alpine AS ssr-server
#COPY --from=build-stage /app/dist /app/dist/
#COPY /splive-web/package.json /app/package.json
#WORKDIR /app
#EXPOSE ${PORT}
#CMD npm install; npm run serve:ssr

FROM nginx:1.15
# ビルドした成果物を Docker 上の Nginx のドキュメントとして扱うためにコピー(デプロイ)
COPY --from=build-stage /app/dist/skillz/ /usr/share/nginx/html

# Nginx の設定ファイルを Docker 上の Nginx にコピー
# COPY ./docker/nginx/template.conf /etc/nginx/template.conf

COPY --from=build-stage /app/nginx/template.conf /etc/nginx/template.conf
COPY --from=build-stage /app/nginx/splive.com.cert /etc/nginx
COPY --from=build-stage /app/nginx/splive.com.key /etc/nginx

CMD /bin/bash -c "envsubst '\$PORT' < /etc/nginx/template.conf > /etc/nginx/conf.d/default.conf && exec nginx -g 'daemon off;'"


# RUN sed -i -r "s/80|${PORT}/g" /etc/nginx/conf.d/default.conf
# CMD cat /etc/nginx/conf.d/default.conf
