FROM nginx:1.27-alpine3.21

COPY index.html /usr/share/nginx/html/
COPY portfolio.css /usr/share/nginx/html/
COPY portfolio.js /usr/share/nginx/html/
COPY assets/ /usr/share/nginx/html/assets/

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
