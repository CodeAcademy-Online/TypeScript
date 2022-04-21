# TypeScript - Kompleksinė užduotis 1

Šios pamokos tikslas susikonfiguruoti projrektą naudojant webpack

0. Pežiūrėkite vaizdo įrašus:
  0.1. https://www.youtube.com/watch?v=X1nxTjVDYdQ&ab_channel=SwashbucklingwithCode
  0.2. https://www.youtube.com/watch?v=4lpmVZdj12g&ab_channel=SwashbucklingwithCode

1. Susikurkite node projektą:
  npm init

2. Parsisiųskite projektą projektui reikalingas bilbiotekas VYSTYMUI, naudojant 'npm i -D':
  * "@typescript-eslint/eslint-plugin": "^5.14.0",
  * "@typescript-eslint/parser": "^5.14.0",
  * "eslint": "^8.10.0",
  * "eslint-config-airbnb-base": "^15.0.0",
  * "eslint-config-airbnb-typescript": "^16.1.0",
  * "eslint-plugin-import": "^2.25.4",
  * "ts-loader": "^9.2.8",
  * "typescript": "^4.6.2",
  * "webpack": "^5.70.0",
  * "webpack-cli": "^4.9.2",
  * "webpack-dev-server": "^4.7.4",
  * "webpack-merge": "^5.8.0"
  * "html-webpack-plugin": "^5.5.0"

3. Sukurkite TypeScript konfigūracijos failą 'tsconfig.json' su tokiomis taisyklėmis:
  {
    "compilerOptions": {
      "target": "es2017", // į kokią JavaScript versiją paversti kodą                 
      "module": "commonjs", // Transpiliuojamų failų modulio tipas                        
      "experimentalDecorators": true, // ar leisti naudoti dekoratorius               
      "emitDecoratorMetadata": true, // ar sukurti dekoratorių aprašymų failą               
      "sourceMap": true, // ar susieti transpiliuoto JavaScript failų eilutes su orginalių failų eilutėmis                           
      "forceConsistentCasingInFileNames": true, // ar versti vadinti failus pagal vienodą failų įvardinimo sintaksę
      "strict": true, // ar kodas privalo būti griežtos sintaksės                            
      "noImplicitAny": true, // ar drausti palikti kintamuosius be tipų                       
      "strictNullChecks": true, // griežtas null tipo kintamųjų tikrinimas                    
      "strictFunctionTypes": true, // griežtas funkcijų aprašymas                 
      "strictBindCallApply": true, // this reikšmės aprašymas, atliekant Function.bind, Function.call ir Function.apply metodus                 
      "noImplicitThis": true, // this nuorodos aprašymo reikalavimas                      
      "alwaysStrict": true, // ar JavaScript failams pridėti 'use strict'                        
      "noUnusedLocals": true, // ar drausti nepanaudotus kintamuosius
      "noUnusedParameters": true, // ar drausti nepanaudotus funkcijos parametrus                
      "exactOptionalPropertyTypes": true, // reikalauti tiksliai aprašytų objekto savybių            
      "noImplicitReturns": true, // reikalavimas apibūtinti funkcijų grąžinimo tipus                   
      "noFallthroughCasesInSwitch": true, // switch direktyvos sugriežtinimas
      "noImplicitOverride": true, // reikalavimas įvardinti  aktažodžiu 'override' jeigu perrašome funkcijas
      "removeComments": true, // ar pašalinti komentarus sukompiliuotuose failuose                    
      "skipLibCheck": true // ar praleisti tipų tikrinimą naudojant bibliotekas
    },
  }

4. Sukurkite bendrų webpack traspiliavimo nustatymų failą 'webpack.config.common.js':
  const path = require('path');
  const HtmlWebpackPlugin = require('html-webpack-plugin');

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
          // Actions:
          loader: "ts-loader",
        },
      ],
    },

    plugins: [
      new HtmlWebpackPlugin({
        title: 'Development',
        template: 'src/index.html'
      }),
    ],
  }

5. Sukurkite webpack vystymo aplikos konfigūracijos failą 'webpack.config.dev.js':
  const path = require('path');
  const { merge } = require('webpack-merge');
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
  });

6. Sukurkite webpack produkcinės aplikos konfigūracijos failą 'webpack.config.prod.js':
  const { merge } = require('webpack-merge');
  const webpackCommon = require('./webpack.config.common');

  module.exports = merge(webpackCommon, {
    mode: 'production',
  });

7. Sukurkite eslint kodo rašymo kokybės nustatymus faile '.eslintrc.js':
  module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'airbnb-base',
      'airbnb-typescript',
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
      "comma-dangle": "off",
      "@typescript-eslint/comma-dangle": [2],
      'react/jsx-filename-extension': [0],
      "@typescript-eslint/indent": [0]
    },
  };

8. Sukurkite '.eslintignore' failą ir jame išsaugokite failų sąrašą, kuriems nebus taikomos eslint taisyklės:
  .eslintrc.js
  public
  webpack.config*

9. Sukurkite '.gitignore' failą, kuriame nurodysite kurių failų nesinchronizuoti su projekto repozitorijos pakitimais:
  public
  node_modules

10. Sukurkite projekto paleidimo komandas faile 'package.json':
  {
    ...
    "scripts": {
      "build": "webpack --config webpack.config.prod.js",
      "start": "webpack serve --config webpack.config.dev.js"
    },
    ...
  }

11. Sukurkite VSCode redaktoriaus nustatymų failą '.vscode/settings.json', kuriame nurodysime formatavimą išsaugojus:
  {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    }
  }

12. Sukurkite failą 'src/main.ts', kuriame parašykite patikrinimo komandas, pvz.: 
  const a: number = 7;
  console.log(a);
  console.log(a);
  console.log(a);

13. Sukurkite HTML šablono failą 'src/index.html':
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <!-- JavaScript Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <title>TS projektas</title>
  </head>

  <body>
    <main id="root"></main>

  </body>

  </html>

14. Paleiskite projektą vystymui 'npm start'

15. Paleiskite projektą vystymui 'npm run build'

16. Suformuokite bent 3 klausimus raštu, kurie bus atsakyti sekančiojo pamokoje.