import React, { Component } from 'react'
import PropTypes from 'prop-types'
import anime from 'animejs'
export * from './components/SunnyMorning'
export * from './components/GreatThings'
export * from './components/ReadySetGo'

export class BeautifulQuestions extends Component {
  static propTypes = {
    text: PropTypes.string
  };

  componentDidMount() {
    var textWrapper = document.querySelector('.ml6 .letters')
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    )

    anime
      .timeline({ loop: true })
      .add({
        targets: '.ml6 .letter',
        translateY: ['1.1em', 0],
        translateZ: 0,
        duration: 750,
        delay: (el, i) => 50 * i
      })
      .add({
        targets: '.ml6',
        opacity: 0,
        duration: 1000,
        easing: 'easeOutExpo',
        delay: 1000
      })
  }
  render() {
    return (
      <h1 className='ml6'>
        <span className='text-wrapper'>
          <span className='letters'>{this.props.text}</span>
        </span>
      </h1>
    )
  }
}

export class SignalNoise extends Component {
  static propTypes = {
    text1: PropTypes.string,
    text2: PropTypes.string
  };

  componentDidMount() {
    anime
      .timeline({ loop: true })
      .add({
        targets: '.ml5 .line',
        opacity: [0.5, 1],
        scaleX: [0, 1],
        easing: 'easeInOutExpo',
        duration: 700
      })
      .add({
        targets: '.ml5 .line',
        duration: 600,
        easing: 'easeOutExpo',
        translateY: (el, i) => -0.625 + 0.625 * 2 * i + 'em'
      })
      .add({
        targets: '.ml5 .ampersand',
        opacity: [0, 1],
        scaleY: [0.5, 1],
        easing: 'easeOutExpo',
        duration: 600,
        offset: '-=600'
      })
      .add({
        targets: '.ml5 .letters-left',
        opacity: [0, 1],
        translateX: ['0.5em', 0],
        easing: 'easeOutExpo',
        duration: 600,
        offset: '-=300'
      })
      .add({
        targets: '.ml5 .letters-right',
        opacity: [0, 1],
        translateX: ['-0.5em', 0],
        easing: 'easeOutExpo',
        duration: 600,
        offset: '-=600'
      })
      .add({
        targets: '.ml5',
        opacity: 0,
        duration: 1000,
        easing: 'easeOutExpo',
        delay: 1000
      })
  }
  render() {
    return (
      <h1 className='ml5'>
        <span className='text-wrapper'>
          <span className='line line1' />
          <span className='letters letters-left'>{this.props.text1}</span>
          <span className='letters ampersand'>&amp;</span>
          <span className='letters letters-right'>{this.props.text2}</span>
          <span className='line line2' />
        </span>
      </h1>
    )
  }
}

export class Thursday extends Component {
  static propTypes = {
    text: PropTypes.string
  };

  componentDidMount() {
    var textWrapper = document.querySelector('.ml1 .letters')
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    )

    anime
      .timeline({ loop: true })
      .add({
        targets: '.ml1 .letter',
        scale: [0.3, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: 'easeOutExpo',
        duration: 600,
        delay: (el, i) => 70 * (i + 1)
      })
      .add({
        targets: '.ml1 .line',
        scaleX: [0, 1],
        opacity: [0.5, 1],
        easing: 'easeOutExpo',
        duration: 700,
        offset: '-=875',
        delay: (el, i, l) => 80 * (l - i)
      })
      .add({
        targets: '.ml1',
        opacity: 0,
        duration: 1000,
        easing: 'easeOutExpo',
        delay: 1000
      })
  }

  render() {
    return (
      <h1 className='ml1'>
        <span className='text-wrapper'>
          <span className='line line1' />
          <span className='letters'>{this.props.text}</span>
          <span className='line line2' />
        </span>
      </h1>
    )
  }
}
