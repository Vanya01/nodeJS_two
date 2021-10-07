
// const newUser = require(`./CreateUser`)
//
// newUser.CreateUser('Vanya',19)
// console.log(newUser)

// library
// const fs = require('fs')
// library
// const path = require('path') // this was created for work with different ways were files can be located

// const appendFilePath = path.join(__dirname,'files','textHere') //it is create the way without /

// console.log(appendFilePath)
//
// const mkdirPath = path.join(__dirname,'files','textHere')

// fs.mkdir(mkdirPath,{recursive:true},(e)=>{
//     console.log(e)
// }) // create new directory and option - true -  will create directory which uncreated

// fs.stat() - return statistic of the file ( which contains inside )
// fs.stat ( appendFilePath,(err,stats) => {
//     console.log(stats)
// })

// fs.rmdir ( way here ) - it could delete the directory

// fs.unlink(appendFilePath,err => {
//     console.log(err)
// }) // if want to delete

// fs.rename - can move files to different folders
//
// fs.rename(
//     appendFilePath,
//     path.join(mkdirPath,'newFile.txt',(err)=>{
//         console.log(err)
//     }) // connect with previous created way to folder
//     )

//how to read the file
// fs.readFile(`${__dirname}/files/textHere`,((err,data)=>{
//     if (err){
//         console.log(err)
//         return
//     }
//
//     console.log(data.toString())
// }))
// how to read the file

//rewriting of current text file
// fs.writeFile(`${__dirname}/files/textHere`, 'Some new text',(err => {
//     console.log(err)
// }))
//rewriting of current text file

// this code will update current file as much as I want \n will create each text from the new line
// fs.writeFile(`${__dirname}/files/textHere`, 'Some new text maaaany times \n',(err => {
//     console.log(err)
// }))

// this code will update current file as much as I want and \n will create each text from the new line

// console.log(__dirname)
// console.log(__filename)


// const CreateUser = (name,age)=>{
//     return{
//         name,
//         age,
//         greeting:()=>{
//             console.log(`Hi ${name}`)
//         }
//     }
// }
//
//
// module.exports = {
//     CreateUser
// }

// __filename - the same, but shows were this variable running example - G:\react-1ls\nodeJS\app.js
// __dirname - is a global variable.It shows were located my file (which I will run ) example - G:\react-1ls\nodeJS

///////////////////// lesson 3 ///////////////////////////////////////////////////

// first of all u need to install - npm install eslint --save-dev
// this library could help with checking the code (is code wrote correct or no)
//also need to add the plugins -   "devDependencies": {
//     "eslint": "^7.32.0",
//     "eslint-plugin-import": "^2.24.2",
//     "eslint-plugin-node": "^11.1.0"

// also add to the project - npm install husky --save-dev
//{
//   "dependencies": {
//     "eslint": "^7.32.0",
//     "express": "^4.17.1"
//   },
//   "devDependencies": {
//     "eslint": "^7.32.0",
//     "eslint-plugin-import": "^2.24.2",
//     "eslint-plugin-node": "^11.1.0",
//     "husky": "4.3.0",
//     "lint-staged": "^11.2.0"
//   },
//   "husky": {
//     "hooks": {
//       "pre-commit": "lint-staged"
//     }
//   },
//   "lint-staged": {
//     "*.js": [
//       "eslint",
//       "git add"
//     ]
//   }
// }

//

//////////create .eslintrc.js /////////////
// module.exports = {
//     env: {
//         browser: true,
//         commonjs: true,
//         es2021: true
//     },
//     parserOptions: {
//         ecmaVersion: 12,
//     },
//     rules: {
//         'array-bracket-newline': [
//             'error',
//             {minItems: 2}
//         ],
//         'array-element-newline': [
//             'error',
//             {minItems: 2}
//         ],
//         'arrow-body-style': 'error',
//         'block-scoped-var': 'error',
//         complexity: 'error',
//         'constructor-super': 'error',
//         camelcase: 'off',
//         curly: 'error',
//         'default-case': 'off',
//         'no-case-declarations': 'off',
//         'dot-notation': 'error',
//         'eol-last': 'error',
//         eqeqeq: 'error',
//         'guard-for-in': 'off',
//         'global-require': 'off',
//         indent: [
//             'warn',
//             4,
//             {SwitchCase: 1}
//         ],
//         'linebreak-style': 'off',
//         'max-classes-per-file': 'off',
//         'newline-per-chained-call': 'error',
//         'new-parens': 'error',
//         'no-alert': 'error',
//         semi: "error",
//         'no-duplicate-imports': 'error',
//         'no-nested-ternary': 'error',
//         'no-mixed-spaces-and-tabs': 'error',
//         'no-underscore-dangle': 'off',
//         'no-bitwise': 'error',
//         'no-caller': 'error',
//         'no-cond-assign': 'error',
//         'no-console': 'warn',
//         'no-else-return': 'error',
//         'no-empty': 'off',
//         'no-plusplus': 'off',
//         'no-empty-functions': 'off',
//         'consistent-return': 'off',
//         'no-dynamic-require': 'off',
//         'no-eval': 'error',
//         'no-extend-native': 'error',
//         'no-extra-bind': 'error',
//         'no-fallthrough': 'error',
//         'no-floating-decimal': 'error',
//         'no-implicit-globals': 'error',
//         'no-implied-eval': 'error',
//         'no-invalid-this': 'off',
//         'no-iterator': 'error',
//         'no-labels': 'error',
//         'no-lone-blocks': 'error',
//         'no-loop-func': 'error',
//         'max-len': [
//             'error',
//             {
//                 ignoreRegExpLiterals: true,
//                 ignoreUrls: true,
//                 comments: 130,
//                 code: 130
//             }
//         ],
//         'no-magic-numbers': [
//             'off',
//             {ignoreArrayIndexes: true}
//         ],
//         'no-multi-spaces': 'error',
//         'no-multi-str': 'error',
//         'no-multiple-empty-lines': 'error',
//         'no-new': 'error',
//         'comma-dangle': 'off',
//         'no-new-func': 'error',
//         'no-new-wrappers': 'error',
//         'no-octal-escape': 'error',
//         'no-param-reassign': 'warn',
//         'no-proto': 'error',
//         'no-return-assign': 'error',
//         'no-return-await': 'error',
//         'no-restricted-syntax': 'off',
//         'no-script-url': 'error',
//         'no-self-compare': 'error',
//         'no-sequences': 'error',
//         'no-throw-literal': 'error',
//         'no-undef-init': 'error',
//         'no-unsafe-finally': 'error',
//         'no-unused-expressions': 'error',
//         'no-unused-vars': [
//             'error',
//             {varsIgnorePattern: 'ctx'}
//         ],
//         'no-use-before-define': [
//             'error',
//             {functions: false}
//         ],
//         'no-useless-call': 'error',
//         'no-useless-concat': 'error',
//         'no-useless-return': 'error',
//         'no-var': 'error',
//         'no-void': 'error',
//         'object-shorthand': 'error',
//         'one-var': [
//             'error',
//             'never'
//         ],
//         'padding-line-between-statements': 'error',
//         'prefer-const': 'error',
//         'prefer-object-spread': 'warn',
//         'quote-props': [
//             'error',
//             'as-needed'
//         ],
//         radix: 'error',
//         'require-await': 'error',
//         'sort-imports': [
//             'error',
//             {
//                 ignoreCase: true,
//                 ignoreDeclarationSort: true,
//                 ignoreMemberSort: false
//             }
//         ],
//         'space-before-function-paren': [
//             'error',
//             {
//                 anonymous: 'never',
//                 asyncArrow: 'always',
//                 named: 'never'
//             }
//         ],
//         'use-isnan': 'error',
//         'wrap-iife': 'error',
//         yoda: 'error'
//     },
// };

// next step - connect mongoose ( it helps connect mongodb and node js ) //
// const mongoose = require('mongoose')
// mongoose.connect('./way/data/base/here')
