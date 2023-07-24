# Olympus UI component library

## Publishing a new version

### Versioning

Increase version on `package.json` file. Please use semantic versioning with X.X.1 being a patch, X.1.X a minor release and 1.X.X a major release

### Build

Run `yarn run build-library` for compiled and minified output in the `/dist` folder.

### Npm publishing

#### Login

Login to NPM with `npm login` and follow the instructions. You should be authorized on npm.org for publishing a new version.

#### Publish

Run `npm publish` to publish compiled files of the newest version (as defined in `package.json`)

### Update package to the new version in consuming repositories

In the project using `olympus-ui` go to its `package.json` file, look for the `olympus-ui` package and update to the newest version.
Then, run `yarn` or `npm install` to pull the newest version.

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).
