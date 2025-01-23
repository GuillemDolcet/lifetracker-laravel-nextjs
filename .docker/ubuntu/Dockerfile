FROM ubuntu:22.04

ARG uid=1001
ARG gid=1001

ARG debian_frontend=noninteractive
ENV DEBIAN_FRONTEND ${debian_frontend}

RUN groupadd -g ${gid} www-admin \
    && useradd -u ${uid} -g www-admin -m -s /bin/bash www-admin

RUN apt update
RUN apt upgrade -y
RUN apt install -y ca-certificates software-properties-common apt-utils locales tzdata

RUN localedef -i es_ES -c -f UTF-8 -A /usr/share/locale/locale.alias es_ES.UTF-8

ENV LANG es_ES.utf8

RUN echo "Europe/Madrid" > /etc/timezone \
    && ln -fs /usr/share/zoneinfo/Europe/Madrid /etc/localtime \
    && dpkg-reconfigure -f noninteractive tzdata \
    && locale-gen "es_ES.UTF-8" \
    && update-locale --reset LANG=es_ES.UTF-8 \
    && dpkg-reconfigure -f noninteractive locales

RUN apt install -y curl git-core zip unzip postgresql-client

RUN apt update \
    && apt clean \
    && apt autoclean \
    && apt autoremove -y --purge

RUN echo "alias ls='ls -lFh --color=auto'" > /home/www-admin/.bash_aliases \
    && chown www-admin:www-admin /home/www-admin/.bash_aliases
