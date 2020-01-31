import React, { Component } from "react";
import PropTypes from "prop-types";
import anime from "animejs";

export class ReadySetGo extends Component {
  componentDidMount() {
    var ml4 = {};
    ml4.opacityIn = [0, 1];
    ml4.scaleIn = [0.2, 1];
    ml4.scaleOut = 3;
    ml4.durationIn = 800;
    ml4.durationOut = 600;
    ml4.delay = 500;

    var animation = anime.timeline({ loop: true });

    for (let i = 0; i < this.props.text.split(" ").length; i++) {
      animation
        .add({
          targets: `.ml4 .letters-${i + 1}`,
          opacity: ml4.opacityIn,
          scale: ml4.scaleIn,
          duration: ml4.durationIn
        })
        .add({
          targets: `.ml4 .letters-${i + 1}`,
          opacity: 0,
          scale: ml4.scaleOut,
          duration: ml4.durationOut,
          easing: "easeInExpo",
          delay: ml4.delay
        });
    }
  }

  render() {
    return (
      <h1 className="ml4">
        {this.props.text.split(" ").map((v, index) => (
          <span className={`letters letters-${index + 1}`}>{v}</span>
        ))}
      </h1>
    );
  }
}
