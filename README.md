# 📝 Start with Create React, TypeScript Boilerplate

리액트 앱을 이용한 프로젝트의 초반 세팅을 도와주는 준비물

## 📦 Using
|라이브러리|version|
|---|---|
|react|**^18.2.0**|
|react-dom|**^18.2.0**|
|react-router|**^6.8.2**|
|react-query|**^3.39.3**|
|react-scripts|**5.0.1**|
|styled-components|**^5.3.8**|
|typescript|**^4.9.5**|
|recoil|**^0.7.7**|

## 📚 Configuration

### 📕 .prettierrc

```json
{
  "singleQuote": true, 
  "semi": true,
  "useTabs": false,
  "tabWidth": 2,
  "trailingComma": "all",
  "printWidth": 80,
  "arrowParens": "avoid",
  "orderedImports": true
}
```

|설정|내용|
|---|---|
|singleQuote|single 쿼테이션 이용 여부|
|semi|세미클론 이용|
|useTabs|탭 사용 여부|
|tabWidth|탭 너비|
|trailingComma|여러 줄 사용시, 후행 콤마 사용 방식|
|printWidth|줄 바꿈 할 폭 길이|
|arrowParens|화살표 함수 괄호 표기 방식|
|orderedImports|import 정렬 여부|

### 📙 .tsconfig.json

해당 파일은 **Typescript** [컴파일러 옵션](https://typescript-kr.github.io/pages/compiler-options.html)이 정의되어있는 파일입니다.

본 **Boilerplate**에서는 다음 커맨드를 통해 생성한 `.tsconfig.json`에서 수정한 설정파일을 사용합니다.
```
  npx tsc --init
```

아래에 정의된 옵션 상세설명을 보려면 링크되어있는 문서를 참조

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "ESNext", 
    "jsx": "preserve", 
    "strict": true, 
    "noImplicitAny": true, 
    "strictNullChecks": true, 
    "allowJs": true, 
    "checkJs": true,
    "allowSyntheticDefaultImports": true,
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true
  }
}
```

### 📒 .eslintrc.json 

해당 **Boilerplate**는 ESLint + `eslint-plugin-prettier` + `eslint-config-prettier`와 같이 사용하고
**Eslint Ruled**은 `Standard`를 사용하고 있습니다.
추가적으로 Typescript lint를 위해 `typescript-eslint`을 사용하고있습니다.

```json
{
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module",
    "project": "./tsconfig.json"
  },
  "plugins": ["react", "@typescript-eslint", "prettier"],
  "rules": {
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "prettier/prettier": ["error", { "endOfLine": "auto" }]
  }
}
```
`@typescript-eslint/explicit-module-boundary-types` **Typescript** 규칙 중 반환 타입을 명시하는 설정을 OFF했습니다.
<br>
( rule means that you need to explicitly tell Typescript what is being returned )

### 📗 Font.css

**Boilerplate**의 `Font.css`에서는 `assets/fonts` 내부 라이브러리에 있는 폰트 파일을 선언한 css입니다.

## Noto Sans Korean
|Style|Weight|
|-----|------|
|normal|400|
|bold|700|

### Fromat
`woff2`

### License
You can use them in your products & projects – print or digital, commercial or otherwise.

## Roboto Mono
|Style|Weight|
|-----|------|
|normal|400|
|bold|700|

### Format
`tff`

### License
You can use them in your products & projects – print or digital, commercial or otherwise.


## 🎁 Installation 

```
 git clone https://github.com/HJ2Yoon/react-typescript-bolierplate.git ./
```

# License

MIT
