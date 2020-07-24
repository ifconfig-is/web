# Build
FROM golang:1.13.11-buster AS build
ARG DEBIAN_FRONTEND=noninteractive
WORKDIR /
COPY . /web

# Install packages
RUN apt-get update && \
	apt-get install -y git npm

# Git clone dispatcher
RUN git clone https://github.com/ifconfig-is/dispatcher.git

# Build dispatcher
ENV GO111MODULE=on CGO_ENABLED=0
RUN cd dispatcher && go build .

# Build static files
RUN cd web && npm install && npm run build

# Run
FROM scratch
COPY --from=build \
	/dispatcher/dispatcher /dispatcher
COPY --from=build \
	/web/dist /static

ENV IFCONFIGIS_DISPATCHER_PORT=5080
ENV IFCONFIGIS_API="http://api:5000"
ENV IFCONFIGIS_STATIC=/static
ENTRYPOINT ["/dispatcher"]
