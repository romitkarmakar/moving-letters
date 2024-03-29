import React, { Component } from 'react'
import "./index.css";
import { GreatThings, BeautifulQuestions, SignalNoise, Thursday, ReadySetGo, SunnyMorning } from 'moving-letters'

export default class App extends Component {
  render () {
    return (
      <div>
        <SunnyMorning text='Sunny Morning' />
        <GreatThings text='Great Things' />
        <BeautifulQuestions text="Beautiful Questions" />
        <SignalNoise text1="Signal" text2="Noise" />
        <Thursday text="Thursday" />
        <ReadySetGo text="Ready Set Go Start" />
      </div>
    )
  }
}
