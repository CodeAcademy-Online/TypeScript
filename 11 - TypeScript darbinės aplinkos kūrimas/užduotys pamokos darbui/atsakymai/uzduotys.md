<!-- 
  Parsisiųskite extension'ą:
    https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one

  spauskite dešinį klavišą ant failo šio failo navigacijos meniu ir pasirinkite:
    "Open Preview" 
    
  arba: Ctrl+Shift+V 
 -->

# Typescript projekto programavimo aplikos kūrimo užduotys - 85 min

## Webpack konfigūracija - 50 min
<!-- 3 min -->
1. Sukurkite projektą Node.js projektą:
```
npm init
```

<!-- 2 min -->
2. Parsiųskite webpack bibliotekas
```
npm i -D webpack webpack-cli 
```

<!-- 3 min -->
3. Sukurkite pradinį failą src/main.ts kuriame spausdinate bet kokį tekstą

<!-- 3 min -->
4. Sukurkite pradinį webpack konfigūracijos failą __webpack.config.js__:

```js
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/main.ts',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public'),
  },
};

```

<!-- 5 min -->
5. Sukurkite vykdymo komandą __package.json__ faile
```json
{
"scripts": {
    ...
    "start": "webpack"
  },
}
```
Išsitestuokite komandą terminale, peržiūrėkite failą __public/__ aplanke.

<!-- 2 min -->
6. Parsiųskite bibliotekas, typescript failų kompiliavimui:
``` 
npm i -D typescript ts-loader
```

<!-- 5 min -->
7. Panaudokite parsiųstą __ts-loader__, kad visi __**.ts__ failai būtų konvertuojami į JavaScript. Papildykite __webpack.config.js__ failą

```js
{
    ...
    module: {
      rules: [
        {
          test: /\.ts?$/,
          exclude: [
            path.resolve(__dirname, "node_modules")
          ],
        
          loader: "ts-loader",
        },
      ],
    },
    ...
}
```

<!-- 3 min -->
8. Sukurekite TS taisyklių failą __tsconfig.json__. Jame sukurkite taisykles ir papildomai nurodykite, kad būtų tikrinami tik tie failai, kurie naudojami projekte, t.y.: kurie įtraukti į failą __src/main.ts__: 
```json
{
  "compilerOptions": {
    "target": "es2017",
    "module": "commonjs",
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "sourceMap": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "strictBindCallApply": true,
    "noImplicitThis": true,
    "alwaysStrict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "exactOptionalPropertyTypes": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "noImplicitOverride": true,
    "removeComments": true,
    "skipLibCheck": true
  },
  "include": [
    "src/main.ts"
  ]
}
```

<!-- 5 min -->
9. Pasitikrinkite ar kompiliuojasi TS kodas, faile __src/main.ts__:
```ts
const message: string = 'Veikia';

console.log(message);
```

<!-- 2 min -->
10. Parsiųskite plugin'ą reikalingą užklauti HTML failams:
```
npm i -D html-webpack-plugin
```

<!-- 5 min -->
11. Sukurkite failą __src/index.html__ kuriame rašysite HMTL turinį. Jame įtraukite __Bootstrap__ reikalingas bibliotekas ir šakninį elementą su __id="root"__:
```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
  <title>TS projektas</title>
</head>

<body>
  <main id="root"></main>

</body>
```

<!-- 2 min -->
12.  Įgalinsime html failo atidarymą naršyklėje ir sukompiliuoto typescript kodo automatinį įtraukimą į html failą, tam mums reikia parsisiųsti bibliotekas:
```
npm i -D webpack-dev-server html-webpack-plugin
```

<!-- 5 min -->
13.   Panaudokite __webpack-dev-server__ ir __html-webpack-plugin__ bibliotekas, nurodant vystymui skirto serverio nustatymus ir HTML failo užkrovimo nustatymus. Atliekame nustatymųpapildymus __webpack.config.js__ faile:
```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  ...
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    open: true,
    compress: true,
    port: 3000,
  },
  ...

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: 'src/index.html'
    }),
  ],
}
```

<!-- 5 min -->
14.    Papildykite __package.json__ failo komandą __start__, kad būtų įgalinamas vystymui skirto serverio veikimas. __package.json__:
```json
{
  ...
  "scripts": {
    ...
    "start": "webpack serve"
  },
}
```
Pasitikrinkite ar veikia automatinis projekto atnaujinimas keičiant failus.

## Skirtingų programavimo aplinkų kūrimas - 15 min
<!-- 2 min -->
1.   Įgalinsime skirtingą failų kompiliavimą produkcinei ir vystymo aplinkoms, tam mums reikės parsisiųsti:
```
npm i -D webpack-merge
```

<!-- 3 min -->
2.  Sukuriame bendrų nustatymų failą __webpack.config.common.js__ ir jame išsaugome bendrus nustatymus:
```js
const path = require('path');

module.exports = {
  entry: "./src/main.ts",
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  output: {
    path: path.resolve(__dirname, "public"),
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        exclude: [
          path.resolve(__dirname, "node_modules")
        ],
        loader: "ts-loader",
      },
    ],
  },
}
```

<!-- 3 min -->
3.  Sukuriame produkciniam projektui skirtą nustatymų failą __webpack.config.prod.js__ ir jame išsaugome nustatymus:
```js
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackCommon = require('./webpack.config.common');

module.exports = merge(webpackCommon, {
  mode: 'production',

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: 'src/index.html'
    }),
  ],
});
```

<!-- 3 min -->
4.  Sukuriame vystomam projektui skirtą nustatymų failą __webpack.config.dev.js__ ir jame išsaugome nustatymus:
```js
const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackCommon = require('./webpack.config.common');

module.exports = merge(webpackCommon, {
  mode: 'development',
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    open: true,
    compress: true,
    port: 3000,
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: 'src/index.html'
    }),
  ],
});
```

<!-- 4 min -->
5. Atnaujiname __package.json__ failo komandas, nurodant konfigūracijos failus:
```json
{
  ...
  "scripts": {
    "build": "webpack --config webpack.config.prod.js",
    "start": "webpack serve --config webpack.config.dev.js"
  },
  ...
}
```
Ištestuokite šias naujas komandas, peržiūrėkite failus aplanke __public/__.


## ESlint konfigūracijos diegimas - 20 min
<!-- 5 min -->
1. Sukurkite ESlint konfigūraciją:
```
$ npm init @eslint/config
Need to install the following packages:
  @eslint/create-config
Ok to proceed? (y) y
√ How would you like to use ESLint? · problems    
√ What type of modules does your project use? · esm
√ Which framework does your project use? · none
√ Does your project use TypeScript? · No / Yes
√ Where does your code run? · browser
√ What format do you want your config file to be in? · JavaScript
Local ESLint installation not found.
The config that you've selected requires the following dependencies:

@typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest eslint@latest
√ Would you like to install them now with npm? · No / Yes
Installing @typescript-eslint/eslint-plugin@latest, @typescript-eslint/parser@latest, eslint@latest

added 83 packages, and audited 429 packages in 6s
```

<!-- 2 min -->
2. Papildomai įsirašykite praktikoje naudojamų ESlint taisyklių rinkinius ir plugin'am skirtą biblioteką:
```
npm i -D eslint-config-airbnb-base eslint-config-airbnb-typescript eslint-plugin-import
```

<!-- 3 min  -->
3.  Panaudokite ESlint parsiųstų bibliotekų taisyklių rinkinius ir įgalinkite sujungimą su __tsconfig.json__ failu. Tam koreguosime failą __.eslint.js__:
```js
module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'airbnb-base',
        'airbnb-typescript/base',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json'
    },
    plugins: [
        '@typescript-eslint',
    ],
    rules: {
    },
};
```

<!--  6 min -->
4.  Sukurkite failą __.vscode/settings.json__ kuriame išsaugosite automatinį ESlint taisyklių pritaikymą išsaugojus failą:
```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```
Perkraukite VS Code programą

<!-- 2 min -->
5. Įsirašykite plugin: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

<!-- 2 min -->
6. Pabandykite parašyti neformatuotą kodą main.js faile ir paspauskite __Ctrl+S__ (__Cmd+S__).
