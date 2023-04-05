# \_\_BrandName Browser Extension Wallet

The \_\_BrandName browser extension wallet is an Ethereum smart contract wallet with social recovery via the guardianship concept and is designed work in the Chrome browser.

<!-- ## Supported Platforms

The \_\_BrandName browser extension wallet is designed to work with the Chrome browser and is tested and supported on the following platforms:

| platform | chrome version |
| :------: | :------------: |
|  macOS   | 108.0.5359.124 |
| Windows  | 108.0.5359.124 |
|  Linux   | 108.0.5359.124 | -->

### Supported Blockchains

- Ethereum
- (more EVM based chain support to follow)

## Development

The following sections explain how to get started developing the browser extension

### Tech stack

The extension wallet is designed to work with the Chrome browser and utilizes the following tech stack:

- React / Typescript
- Material UI React Components
- Ethereum smart contracts (EIP-4337 account abstraction via alternative mempool)
- Chrome browser

### Local Development

**Installing Dependencies**

1. `npm i` to install dependancies
2. `npm start` to start running the fast development mode Webpack build process that bundle files into the `dist` folder

**Loading The Chrome Extension**

1. Open Chrome and navigate to `chrome://extensions/`
2. Toggle on `Developer mode` in the top right corner
3. Click `Load unpacked`
4. Select the entire `dist` folder

**Production Build**

1. `npm run build` to generate a minimized production build in the `dist` folder
2. ZIP the entire `dist` folder (e.g. `dist.zip`)
3. Publish the ZIP file on the Chrome Web Store Developer Dashboard!
