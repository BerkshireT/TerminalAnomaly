# https://terminalanomaly.dev

React Router v7 (framework mode, static/SPA output — no server process). This
repo uses [Git LFS](https://git-lfs.com/) for images under `app/assets/`; install
it before cloning (`git lfs install`) so those files check out correctly.

## Project setup
```
npm install
```

### Run locally
```
npm run dev
```

### Build
Prerenders every route to static HTML in `build/client/`, ready to be served
by any static file host (nginx, apache, etc.) or opened straight from disk.
```
npm run build
```

### Typecheck
```
npm run typecheck
```
