# native-x-divider

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

This component adds divider between other components

## Install

### Yarn

```sh
yarn add native-x-divider
```

### NPM

```sh
npm install native-x-divider
```

## Usage

```tsx
import { Divider } from 'native-x-divider'

function MyComponent() {
  return (
    <Stack>
      ...
      <Divider />
      ...
    </Stack>
  )
}
```

## API

| Property           | Default Value | Usage                                          |
| ------------------ | ------------- | ---------------------------------------------- |
| vertical?: boolean | false         | Show vertical divider, (horizontal by default) |
| color?: string     | COLOR.DIVIDER | Any color defined by theme provider            |
| size?: string      | 'normal'      | Valid values: 'normal', 'large', 'x-large'     |

## Automatic Release

Here is an example of the release type that will be done based on a commit messages:

| Commit message      | Release type          |
| ------------------- | --------------------- |
| fix: [comment]      | Patch Release         |
| feat: [comment]     | Minor Feature Release |
| perf: [comment]     | Major Feature Release |
| doc: [comment]      | No Release            |
| refactor: [comment] | No Release            |
| chore: [comment]    | No Release            |
