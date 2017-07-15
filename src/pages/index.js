import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import {SocialIcon} from "react-social-icons";

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <h1>Hi people.</h1>
        <p>Welcome to my site.</p>
		<br/>
		<SocialIcon url="http://facebook.com/stevemorin"/>
		<SocialIcon url="http://twitter.com/stmorii"/>
		<SocialIcon url="http://linkedin.com/in/stephenmorin"/>
		<SocialIcon url="http://www.instagram.com/staav0"/>
      </div>
    )
  }
}
