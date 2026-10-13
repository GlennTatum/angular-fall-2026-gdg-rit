# angular-fall-2026-gdg-rit
Angular (Fall 2026) - Google Developer Groups on Campus Rochester Institute of Technology

### Development

<u>Setup</u>

```bash

# Build the init container
docker build . -t angular-init:latest -f Dockerfile.init

# Setup the Development Environment
docker run  -it --rm --user $UID -v .:/app -w /app angular-init:latest

> ng new demo

# exit the container
```

<u>Run</u>

```bash

docker build . -t angular-app:latest

docker run -it --rm -v ./demo/:/app/demo/ --user $UID -p 4200:4200 angular-app:latest
```