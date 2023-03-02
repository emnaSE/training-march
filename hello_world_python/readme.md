## How to build  the dev envirment
``` docker build -t ammou/python-flask .  ```

## How to build  this project inside docker 

``` docker run -it -v `pwd`:/code -w /code -p 5001:5000  ammou/python-flask  bash ```