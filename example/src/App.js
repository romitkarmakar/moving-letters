import React, { Component } from 'react'
import "./index.css";
import { SunnyMorning, GreatThings, BeautifulQuestions, SignalNoise } from 'moving-letters'

export default class App extends Component {
  render () {
    return (
      <div>
        <SunnyMorning text='Sunny Morning' />
        <GreatThings text='Great Things' />
        <BeautifulQuestions text="Beautiful Questions" />
        <SignalNoise />
      </div>
    )
  }
}
