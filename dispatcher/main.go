package main

import (
	"os"

	"github.com/gin-gonic/gin"
)

var Port string
var API string

func main() {
	// Set running port
	Port = os.Getenv("IFCONFIG_DISPATCHER_PORT")
	if Port == "" {
		Port = "3080"
	}
	// Set api endpoint
	API = os.Getenv("IFCONFIG_API")
	if API == "" {
		API = "http://localhost:3000"
	}

	r := gin.Default()

	r.Use(Dispatcher(API))

	r.Run(":" + Port)
}
