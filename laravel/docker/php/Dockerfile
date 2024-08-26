FROM php:7.4-fpm

RUN apt-get update && apt-get install -y zlib1g-dev g++ git libicu-dev zip libzip-dev acl procps libpq-dev libxml2-dev libpng-dev supervisor \
    && docker-php-ext-install intl opcache pdo pdo_mysql pdo_pgsql mcrypt \
    && pecl install apcu \
    && docker-php-ext-enable apcu \
    && docker-php-ext-configure zip \
    && docker-php-ext-install zip \
    && docker-php-ext-install xml \
    && docker-php-ext-install gd \
    && docker-php-ext-install iconv \
    && docker-php-ext-install zip
# RUN apt-get install -y nodejs npm
RUN curl -sL https://deb.nodesource.com/setup_18.x -o nodesource_setup.sh
RUN bash nodesource_setup.sh
RUN apt-get install -y nodejs
RUN apt-get install -y libcurl4-openssl-dev pkg-config libssl-dev
# RUN pecl install mongodb && docker-php-ext-enable mongodb
RUN pecl install redis
# RUN echo "extension=mongodb.so" >> /usr/local/etc/php/php.ini
RUN echo "extension=redis.so" >> /usr/local/etc/php/php.ini

WORKDIR /var/www

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
