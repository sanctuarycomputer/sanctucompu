import React, { Component } from 'react';
import { v, atomics as a } from 'vudu';
import smoothScroll from 'smoothscroll';

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = src;
    image.onload = () => {
      resolve((image.height * window.innerWidth) / image.width);
    }
  });
}

function showWriteup(e) {
  e.preventDefault();
  smoothScroll(window.innerHeight, 1000);
}

const flagStyles = v({
  flag: {
    transition: '150ms ease-in-out',
    position: 'fixed',
    top: '20px',
    backgroundColor: 'white',
    margin: 0,
    textAlign: 'center',
    boxSizing: 'border-box',
    width: 'inherit',

    right: '20px',
    padding: '8px 20px 11px 20px',
    zIndex: 100,
    cursor: 'pointer',
    color: 'black',
    boxShadow: '0 0 20px 6px #00000014',

    width: 'calc(100% - 40px)',
    '@media only screen and (min-width: 500px)': {
      width: 'inherit'
    },

    ':hover': {
      color: 'white',
      backgroundColor: '#173963',
    }
  },
});

const Flag = () => {
  return (
    <a
      href="https://medium.com/sanctuary-computer-inc/were-hiring-a-full-stack-developer-23a8719bf55a"
      target="_blank">
      <div className={flagStyles.flag}>
        <span>{`👋 We're hiring a full-stack developer!`}</span>
      </div>
    </a>
  );
}

const Hero = (props) => {
  const name = 'slowPan';
  const styles = v({
    container: {
      height: '100vh',
      position: 'fixed',
      width: '100vw',
      top: 0,
      zIndex: 50,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundImage: `url(${props.image})`,
      backgroundRepeat: 'repeat-y',
      backgroundSize: '100% auto',
      animationName: name,
      animationDuration: '90s',
      animationIterationCount: 'infinite',
      animationTimingFunction: 'linear',
      [`@keyframes ${name}`]: {
        '0%': {
          backgroundPosition: '0 0'
        },
        '100%': {
          backgroundPosition: `0 -${props.imageHeight}px`
        }
      },
      'img': {
        width: '20rem'
      }
    },
    indent: {
      display: 'block',
      height: '0px',
      textIndent: '-9999px'
    },
    downArrow: {
      left: '50%',
      opacity: '.5',
      transform: 'translateX(-50%)',
      cursor: 'pointer',
      '@composes': [
        a.absolute,
        a.bottom0,
        a.pb4
      ]
    }
  });

  const companyName = 'Sanctuary Computer';

  return (
    <div className='fade-in one'>
      <div className={styles.container}>
        <h1 className='fade-in two'>
          <img src='/static/images/logo.png' alt={companyName} itemProp='logo' />
          <span className={styles.indent} itemProp='name'>{companyName}</span>
        </h1>
        <div onClick={showWriteup} className={styles.downArrow}>
          <svg className='fade-in four' xmlns="http://www.w3.org/2000/svg" width="48" viewBox="0 0 64 25">
            <g fill="none" fill="#fff">
              <path d="M32 23.6L31.9 23.7 30.8 22.9 2 4.4 0.9 3.6 2.4 1.3 3.5 2.1 31.9 20.4 60.4 2 61.6 1.3 63.1 3.6 61.9 4.4 33.2 22.9 32 23.7 32 23.6Z"/>
            </g>
          </svg>
        </div>
      </div>
    </div>

  );
};

const softBlack = '#141414';

const Writeup = () => {
  const styles = v({
    writeup: {
      backgroundColor: 'white',
      position: 'relative',
      width: '100vw',
      zIndex: 99,
      'p': {
        color: softBlack,
        lineHeight: '1.3',
        '@composes': [
          a.m0,
          a.py3
        ]
      },
      'a': {
        transition: '300ms color',
        '@composes': [
          a.black,
          a.noUnderline
        ]
      },
      'a:hover': {
        color: '#173963'
      },
      'span.heading': {
        fontSize: 'inherit',
        borderBottom: `1px solid ${softBlack}`,
        lineHeight: '1.1',
        top: '-4px',
        '@composes': [
          a.inlineBlock,
          a.relative
        ]
      },
      '@composes': [
        a.pb4
      ]
    },
    padWriteup: {
      maxWidth: '700px',
      '@composes': [
        a.p4
      ]
    }
  });
  return (
    <div className={styles.writeup}>
      <div className={styles.padWriteup}>
        <p itemProp='description'>Sanctuary Computer is an artful user interface studio, based on the Bowery in Chinatown, Manhattan.</p>
        <p>We work with established companies, city entities and startups to build compelling and empathetic digital products in the art, music & social infrastructure spaces.</p>
        <p>
          <span className='heading'>Selected Collaborators</span>
          <br />
          <a href='http://ginlane.com/' target='_blank' itemProp='brand' itemScope itemType='http://schema.org/Organization'>
            <span itemProp='name'>Gin Lane</span>
          </a>
          {', '}
          <a href='http://www.roandcostudio.com/' target='_blank' itemProp='brand' itemScope itemType='http://schema.org/Organization'>
            <span itemProp='name'>RoAndCo</span>
          </a>
          {', '}
          <a href='http://playlab.org/' target='_blank' itemProp='brand' itemScope itemType='http://schema.org/Organization'>
            <span itemProp='name'>PlayLab</span>
          </a>
          {', '}
          <a href='http://human-nyc.com/' target='_blank' itemProp='brand' itemScope itemType='http://schema.org/Organization'>
            <span itemProp='name'>Human NYC</span>
          </a>
        </p>
        <p>
          <span className='heading'>Selected Clients</span>
          <br />
          <a href='https://ge.com/' target='_blank' itemProp='brand' itemScope itemType='http://schema.org/Organization'>
            <span itemProp='name'>General Electric</span>
          </a>
          {', '}
          <a href='https://adobe.com/' target='_blank' itemProp='brand' itemScope itemType='http://schema.org/Organization'>
            <span itemProp='name'>Adobe</span>
          </a>
          {', '}
          <a href='https://www.diginn.com/' target='_blank' itemProp='brand' itemScope itemType='http://schema.org/Organization'>
            <span itemProp='name'>Dig Inn</span>
          </a>
          {', '}
          <a href='http://www.hermanmiller.com/' target='_blank' itemProp='brand' itemScope itemType='http://schema.org/Organization'>
            <span itemProp='name'>Herman Miller</span>
          </a>
        </p>
        <p>
          <span className='heading'>Technology Stack</span>
          <br />React, React Native, Ember, Phoenix, Elixir, Ruby, Rails, Sass, Greensock and Aframe, among others
        </p>
        <p><a href="mailto:hello@sanctuary.computer" itemProp='email' target='_blank'>hello@sanctuary.computer</a></p>
        <p>
          <a href="https://www.facebook.com/sanctucompu/" target="_blank">Facebook</a><br />
          <a href="https://twitter.com/sanctucompu" target="_blank">Twitter</a><br />
          <a href="https://www.instagram.com/sanctucompu/" target="_blank">Instagram</a>
        </p>
        <p itemProp='location' itemScope itemType='http://schema.org/PostalAddress'>
          <a href="https://www.google.com/maps/place/Sanctuary+Computer/@40.71811,-73.995313,15z/data=!4m5!3m4!1s0x0:0xcdc06390643521f5!8m2!3d40.71811!4d-73.995313" target="_blank">
            <span itemProp='streetAddress'>110 Bowery, Fourth Floor</span>
            <br />
            <span itemProp='addressLocality'>New York City</span>
            <span itemProp='postalCode'> 10013</span>
          </a>
        </p>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1280 172">
        <g fill="none" stroke="#000">
          <path d="M640.7 170.2L0.5 1.6 0 1.5 0.3 0.5 0.7 0.6 641 169.3 1281.3 0.6 1281.7 0.5 1282 1.5 1281.5 1.6 641.3 170.2 641.3 170.4 641 170.3 640.7 170.4 640.7 170.2Z"/>
        </g>
      </svg>
    </div>
  );
};

export default class Hello extends Component {

  constructor(props) {
    super(props);
    this.image = '/static/images/bg.jpg';
    this.state = {
      imageHeight: null
    };
  }

  componentDidMount() {
    loadImage(this.image).then(response => {
      this.setState({
        imageHeight: response
      });
    });
  }

  render() {
    const styles = v({
      siteWrapper: {
        fontFamily: '"AustinNewsLight", "Georgia", serif',
        marginTop: '100vh',
      }
    });
    return (
      <div itemScope itemType='http://schema.org/LocalBusiness' className={styles.siteWrapper}>
        <Flag />
        <Hero image={this.image} imageHeight={this.state.imageHeight} />
        <Writeup />
      </div>
    );
  }
}
