
## How to build  this project inside docker 

``` docker run -it -v `pwd`:/code -w /code  -p 8083:8080  golang bash ```

``` go build -o bin/hello hello.go ```
