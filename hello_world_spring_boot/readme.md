 How to build  this project inside docker 

``` docker run -it -v `pwd`:/code -w /code -p 8080:8080  gradle:jdk17 bash ```

``` ./gradlew build ```

```java -jar build/libs/training-0.0.1-SNAPSHOT.jar  ```



<img width="863" alt="image" src="https://user-images.githubusercontent.com/50323642/222429561-e484befe-f0c2-4e13-af7a-99f568f119cc.png">



<img width="867" alt="image" src="https://user-images.githubusercontent.com/50323642/222429641-cfc38bad-8ccf-479a-a9ad-69b199f9e73a.png">
