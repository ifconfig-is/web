# Build
FROM golang:1.13.11-buster AS build
ARG DEBIAN_FRONTEND=noninteractive
WORKDIR /
COPY . /ifconfig

# Install packages
RUN apt-get update && \
	apt-get install -y git npm

# Git clone ifconfig-dispatcher
RUN git clone https://github.com/i3h/ifconfig-dispatcher.git

# Build dispatcher
ENV GO111MODULE=on CGO_ENABLED=0
RUN cd ifconfig-dispatcher && go build .

# Build static files
RUN cd ifconfig && npm install && npm run build

# Run
FROM scratch
COPY --from=build \
	/ifconfig-dispatcher/ifconfig-dispatcher /ifconfig-dispatcher
COPY --from=build \
	/ifconfig/dist /static

ENV IFCONFIG_DISPATCHER_PORT=3080
ENV IFCONFIG_API="http://api:3000"
ENV IFCONFIG_STATIC=/static
ENTRYPOINT ["/ifconfig-dispatcher"]
