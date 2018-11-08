FROM ruby:latest

WORKDIR /app

COPY Gemfile .
COPY Gemfile.lock .

RUN bundle install
RUN gem install rake

COPY . .