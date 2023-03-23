# Theme Darker 🌗

[![Build Status](https://img.shields.io/badge/status-developing-orange)](https://github.com/Pgmjun/Parking-Service)
![NPM total downloads](https://img.shields.io/npm/dw/theme-darker)

> Toggle dark mode with **Theme Darker**

![ThemeDarker_Baner](https://user-images.githubusercontent.com/68261245/226919253-a366ea90-9dd8-42d6-a72e-74574f8523d1.png)

## Installation

Below Command is an example of how to install **Theme Darker**

> npm

```
npm install theme-darker@latest -g
```

> clone

```
git clone https://github.com/HJ2Yoon/themedarker.git ./
```

## Usage

Getting started with theme darker

```js
import { Theme, ThemeDarker } from 'theme-darker';
```

### [Theme](index.js#L29)

**Enums**

- `LIGHT` : light mode
- `DARK` : dark mode

**Example**

```js
enum Theme {
  LIGHT,
  DARK,
}
```

### [ThemeDarker](index.js#L65)

It's a Component that has three arguments

**Params**

- `theme` **{ Theme | undefined }**: Put your current theme
- `toggleTheme` **{ () => void }**: The function to set theme.
- `size` **{ number }**: Size of component

**Example**

```js
<ThemeDarker
  theme={curTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT}
  toggleTheme={toggleTheme}
  size={15}
/>
```

## Release History

📄 **v0.3.0** ✅ (Valid version)

- Button reface

<details>
<summary>v0.2.0</summary>

- **v0.2.3** -dev
- **v0.2.2** -dev
- **v0.2.1** -dev ❌ (Error exist)
- **v0.2.0** -dev ❌ (Error exist)

</details>

📄 **v0.1.0** ❌ (Error exist)

- Work in progress

## License

[MIT]
