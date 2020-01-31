import React, { Component } from "react";
import PropTypes from "prop-types";
import anime from "animejs";
import styles from "../styles/sunnymorning.module.css";

export class SunnyMorning extends Component {
  static propTypes = {
    text: PropTypes.string
  };

  componentDidMount() {
    anime
      .timeline({ loop: true })
      .add({
        targets: ".ml2 .letter",
        scale: [4, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 950,
        delay: (el, i) => 70 * i
      })
      .add({
        targets: ".ml2",
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
      });
  }

  render() {
    return (
      <h1 className={styles.ml2 + " ml2"}>
        {this.props.text.split("").map((v, index) => (
          <span className={styles.ml2letter + " letter"} key={index}>{v}</span>
        ))}
      </h1>
    );
  }
}
