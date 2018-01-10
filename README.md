# offline-forum

>Example app built with [`create-react-app`](https://github.com/facebookincubator/create-react-app) for integration and snapshot testing. The app is a forum with posts and comments that uses `localStorage`. It also has a bot that responds with delay. **CSS-framework is [Tailwind](https://tailwindcss.com/)**

The project is already set up with all packages to test react components: [**`enzyme`**](http://airbnb.io/enzyme/docs/api/), `enzyme-adapter-react-16`, `react-test-renderer` and `enzyme-to-json` for snapshot testing. You can read more about setting it up here: [**Running test @ create-react-app**](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests)


## Installation

_with npm_
```bash
git clone https://github.com/FEND16/offline-forum.git
cd jest-react-testing
npm install
```
_with yarn_
```bash
git clone https://github.com/FEND16/offline-forum.git
cd jest-react-testing
yarn
```

## Running tests

```bash
yarn test
```
```bash
npm test
```

### With coverage


```bash
yarn test --coverage
```
```bash
npm test -- --coverage
```

## ESLint

Running ESLint

```bash
./node_modules/.bin/eslint
```

Running from global eslint

```bash
npm i -g eslint
```

```bash
eslint .eslintrc
```

### ESLint editor integrations

If you want `.eslintrc` to be detected by your editor you need to install plugin/extensions for your editor.

* https://eslint.org/docs/user-guide/integrations
