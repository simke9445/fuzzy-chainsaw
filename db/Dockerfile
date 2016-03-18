FROM ubuntu:14.04

RUN mkdir /db/

ADD . /db/

RUN echo "deb http://download.rethinkdb.com/apt trusty main" | tee /etc/apt/sources.list.d/rethinkdb.list

RUN cat /etc/apt/sources.list.d/rethinkdb.list

RUN apt-get update

RUN apt-get install --force-yes -y python-pip rethinkdb

RUN pip install rethinkdb

CMD rethinkdb restore /db/dump.tar.gz -c db_1:28015 