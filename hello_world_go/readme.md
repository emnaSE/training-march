
## How to build  this project inside docker 

``` docker run -it -v `pwd`:/code -w /code  -p 8083:8080  golang bash ```

```go run hello.go```

<img width="784" alt="image" src="https://user-images.githubusercontent.com/50323642/222540233-f8e4f303-fb4a-4706-8f9e-dfcdf80a1119.png">
 
 
``` go build -o bin/hello hello.go ```


## How to run this project from build


```docker build -t ammou/hello-go . ```

```docker run -p 8083:8080 ammou/hello-go```

<img width="756" alt="image" src="https://user-images.githubusercontent.com/50323642/222540543-d3d9a427-8e83-4848-8e0e-19d7b4a91043.png">


