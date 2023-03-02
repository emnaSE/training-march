 How to build  this project inside docker 

``` docker run -it -v `pwd`:/code -w /code -p 8080:8080  gradle:jdk17 bash ```

``` ./gradlew build ```

```java -jar build/libs/hello_world_springboot-0.0.1-SNAPSHOT.jar  ```