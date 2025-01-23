FROM php

COPY ./start-container /usr/local/bin/start-container

RUN chmod ugo+x /usr/local/bin/start-container

RUN mkdir -p /srv/www/backend

RUN chown -R www-admin:www-admin /srv/www/backend \
    && chmod -R u+rw /srv/www/backend \
    && chmod -R g+rw /srv/www/backend \
    && chmod -R go-w /srv/www/backend

USER www-admin

WORKDIR /srv/www/backend

ENTRYPOINT [ "/usr/local/bin/start-container" ]

EXPOSE 5000
