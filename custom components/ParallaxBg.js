import { Parallax, Background } from "react-parallax";
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import FadeIn from 'react-fade-in';
const image1 = require('../Assets/img/doc.jpg');

const styles = {
  fontFamily: "Roboto",
  textAlign: "center",
};
const insideStyles = {
  background: "transparent",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  color: "white",
  fontSize: "70px",
  // fontSize: '2em',
  width: "100%",
};

const ParallaxBg = () => (
  <div style={styles}>
    <Parallax bgImage={image1} strength={600}>
      <FadeIn delay={800}>
        <div style={{ height: 700 }}>
          <div style={insideStyles}>Your Health is our priority</div>
          <a href='#appointment'><Button variant="success" style={{ marginTop: '85vh' }}>Book an appointment now</Button></a>
        </div>
      </FadeIn>
    </Parallax>
  </div>
);

export default ParallaxBg;