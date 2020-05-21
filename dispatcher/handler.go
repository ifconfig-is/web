package main

import (
	"fmt"
	"net/http"
	"net/http/httputil"
	"net/url"
	"strings"

	"github.com/gin-gonic/gin"
)

func Dispatcher(API string) gin.HandlerFunc {
	return func(c *gin.Context) {
		userAgent := c.Request.UserAgent()
		if c.Request.URL.String() == "/gql" || !strings.Contains(userAgent, "WebKit") {
			url, err := url.Parse(API)
			if err != nil {
				fmt.Println(err)
			}
			proxy := httputil.NewSingleHostReverseProxy(url)
			proxy.ServeHTTP(c.Writer, c.Request)
		} else {
			file := "./static/" + c.Request.URL.Path
			http.ServeFile(c.Writer, c.Request, file)
		}
	}
}
