## postcss-custom-media-bug

### Prerequisites
1. Use Node 16+
1. Run `npm install`
1. Run `npm build`

### Expected:
1. Custom media query variable references have been replaced in `dist/main.css`.
1. `div` turns green between 1024px and 1440px viewport width

### Actual:
1. Custom media query variable references have NOT been replaced in `dist/main.css`
1. `div` does NOT turn green between 1024px and 1440px viewport width

---

### Patch bug with a custom loader:
1. Uncomment line 51 in `webpack.config.js`.
1. Run `npm install`
1. Run `npm build`
