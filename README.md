# Fly.io -> Bun + SQLite

<sup>**Social Media Photo by [Annie Ruygt](https://annieruygtillustration.com/) on [fly.io](https://fly.io/blog/flydotio-heart-bun/)**</sup>

This project uses [Bun](https://bun.sh), a fast all-in-one JavaScript runtime.

To install dependencies:

```bash
bun install
```

To run:

```bash
bun index.js
```

## Deploy with fly

```sh
# login via GitHub or Google or .. whatever
fly auth login

# be sure the region is correct and/or free to use
# be sure you use 1x CPU with 256MB machine for free tier
fly launch

# for free tier use just 1 volume
fly volume create litefs -r $REGION -n 1

# deploy this and have fun
fly deploy
```

**[Live Demo](https://fly-bun-sqlite.fly.dev/)**
