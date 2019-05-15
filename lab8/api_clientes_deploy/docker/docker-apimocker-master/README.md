# apimocker docker image

Dockerfile for [apimocker](https://www.npmjs.com/package/apimocker) docker image generation.

## Usage

### Docker Compose

```yaml
version: "2"
services:
    apimocker:
        container_name: "apimocker"
        image: "julianohsf/apimocker:1.0.3"
        ports:
            - "5050:5050"
        volumes:
            - ./config.json:/apimocker/conf.d/config.json
            - ./responses:/apimocker/responses
```

## Contact

Please leave me an issue on this github repository or a DM on @julianohsf Twitter Account