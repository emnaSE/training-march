## How to build  the dev environment
``` docker build -t ammou/rust-nightly .  ```

## How to build  this project inside docker 

``` docker run -it -v `pwd`:/code -w /code -p 8000:8000  ammou/rust-nightly  bash ```

``` cargo run ```

```cargo build --release ```

## How to run this project with build
``` docker build -t ammou/rust-build -f dockerfile-run . ```

```docker run  -p 8010:8000 ammou/rust-build ```