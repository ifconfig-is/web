# Build
FROM golang:1.13.11-buster AS build
ARG DEBIAN_FRONTEND=noninteractive
WORKDIR /ifconfig
COPY . .

# build dispatcher
ENV GO111MODULE=on CGO_ENABLED=0
RUN cd dispatcher && go build .

# apt install
RUN apt-get update && \
	apt-get install -y npm

# build static files
RUN npm install && npm run build

# Run
FROM scratch
COPY --from=build \
	/ifconfig/dispatcher/dispatcher /dispatcher
COPY --from=build \
	/ifconfig/dist /static

ENV IFCONFIG_DISPATCHER_PORT=3080
ENV IFCONFIG_API="http://api:3000"
ENTRYPOINT ["/dispatcher"]
