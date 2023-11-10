import React, { Component } from 'react'
import anime from 'animejs'
import styles from '../styles/greatthings.module.css'
import PropTypes from 'prop-types'

export class GreatThings extends Component {
  static propTypes = {
    text: PropTypes.string
  };

  componentDidMount() {
    anime
      .timeline({ loop: true })
      .add({
        targets: '.ml3 .letter',
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 2250,
        delay: (el, i) => 150 * (i + 1)
      })
      .add({
        targets: '.ml3',
        opacity: 0,
        duration: 1000,
        easing: 'easeOutExpo',
        delay: 1000
      })
  }

  render() {
    return (
      <h1 className={styles.ml3 + ' ml3'}>
        {this.props.text.split('').map((v, index) => (
          <span className='letter' key={index}>
            {v}
          </span>
        ))}
      </h1>
    )
  }
}
