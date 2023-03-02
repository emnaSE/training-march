## How to run dev environment
```  docker run -it -v `pwd`:/code -w /code ange10k/angularcli  bash ``` 

``` ng serve  --host=0.0.0.0 ```



<img width="831" alt="image" src="https://user-images.githubusercontent.com/50323642/222401982-a83d7109-05fb-4d43-847a-c646f71030ef.png">


## How to run this project from build
```docker build -t ammou/angular-ngnix .```

```docker run   -p 8088:80 ammou/angular-ngnix ```