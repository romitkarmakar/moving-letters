# Moving Letters

> A animejs powered react library to create text animations.
Inspired by the works of [Tobia Sahlin Moving Letters](https://tobiasahlin.com/moving-letters/).

[![NPM](https://img.shields.io/npm/v/moving-letters.svg)](https://www.npmjs.com/package/moving-letters) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save moving-letters
```
or
```bash
yarn add moving-letters
```

## Usage

```jsx
import React, { Component } from 'react'
import { GreatThings, BeautifulQuestions, SignalNoise, Thursday, ReadySetGo, SunnyMorning } from 'moving-letters'

export default class App extends Component {
  render () {
    return (
      <React.Fragment>
        <SunnyMorning text='Sunny Morning' />
        <GreatThings text='Great Things' />
        <BeautifulQuestions text="Beautiful Questions" />
        <SignalNoise text='Signal Noise'/>
        <Thursday text='Thursday'/>
        <ReadySetGo text='Ready Set Go'/>
      </React.Fragment>
    )
  }
}
```

# Demo

You can check the demo at https://romitkarmakar.github.io/moving-letters/

## License

MIT © [romitkarmakar](https://github.com/romitkarmakar)
