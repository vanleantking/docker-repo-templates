# Stage 1: Build stage
FROM golang:1.21.5 AS build-stage
WORKDIR /app

# copy and download the dependencies
COPY go.mod ./
RUN go mod download

COPY . .
# build go file
RUN CGO_ENABLED=0 GOOS=linux go build -o main ./main.go

# Stage 2: Final stage
FROM alpine:latest

# Set the working directory
WORKDIR /app

# Copy the binary from the build stage
COPY --from=build-stage /app/main .
COPY --from=build-stage /app/.env /.env

ARG FIBER_PORT

# Set the timezone and install CA certificates
RUN apk --no-cache add ca-certificates tzdata
RUN apk add --no-cache bash

EXPOSE ${FIBER_PORT}
ENTRYPOINT [ "./main", "server" ]