
## How to build  this project inside docker 

``` docker run -it -v `pwd`:/code -w /code  -p 8083:8080  golang bash ```

```go run hello.go```

``` go build -o bin/hello hello.go ```


## How to run this project from build


```docker build -t ammou/hello-go . ```

```docker run -p 8083:8080 ammou/hello-go```