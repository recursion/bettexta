# bettexta

A simple browser extension that enhances existing textareas with subtle, simple, advanced editor options including syntax highlighting, color themes, linting, and editor emulation modes such as vim, emacs, and sublime.

The project uses [CodeMirror](https://codemirror.net) to implement advanced editor features and is built using Svelte and rollup.

## Getting Started

```bash
git clone https://github.com/recursion/bettexta
```

Then, install the dependencies:

```bash
npm install
```

## Building and Developing

### Build

```bash
npm run build
```

## Build Clean

- Deletes the `/dist` directory
- Rebuilds the package

```bash
npm run build:clean
```

### Development

Development mode will:

- build on file change
- serve locally at <code>localhost:5000</code>
- live reload

```bash
npm run dev
```

## TODO

- [ ] Module for managing settings
  - [ ] Set from extension options/popup.
  - [ ] Set from content page.
  - [ ] Set on init.
  - [ ] Save settings (on change).
  - [ ] Load saved settings.
- [ ] Panels - Top/bottom/side?

## Credits

Started from [sveltejs/template](https://github.com/sveltejs/template)
