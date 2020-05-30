# React Boilerplate Component

I personally got tired of writing `import React from 'react'` over and over again. This little package lets you create boilerplate for a React component and write it to a file with a single command. It has almost no customizability at the moment but I plan to add more options in the near future. This is just a rough 1.0.0.

## Installation

`$ npm install -g react-boilerplate-component`

or

`$ npm install react-boilerplate-component --save-dev`

## Usage

This package is meant to be used with `create-react-app`. When you need a new component simply run

`make-component [componentName]`

and a new component file will be generated inside the working directory. `react-boilerplate-component` generates functional components by default, so if you want a class component run

`make-component [componentName] --class`

Other options: `-h`, `--help`

## Contributing

If you think this can be improved, please submit a pull request.

## License

MIT. Do whatever the heck you want with it :).
