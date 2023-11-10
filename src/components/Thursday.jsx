import React, { Component } from 'react'
import PropTypes from 'prop-types'
import anime from 'animejs'

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
  