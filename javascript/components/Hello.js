import React, { Component } from 'react';
import { v, atomics as a } from 'vudu';


function loadImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = src;
    image.onload = () => {
      resolve((image.height * window.innerWidth) / image.width);
    }
  });
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
        <h1>
          <img src='https://img42.com/iZrzL+' alt={companyName} itemProp='logo' />
          <span className={styles.indent} itemProp='name'>{companyName}</span>
        </h1>
        <div className={styles.downArrow}>
          <svg xmlns="http://www.w3.org/2000/svg" width="48" viewBox="0 0 64 25">
            <g fill="none" fill="#fff">
              <path d="M32 23.6L31.9 23.7 30.8 22.9 2 4.4 0.9 3.6 2.4 1.3 3.5 2.1 31.9 20.4 60.4 2 61.6 1.3 63.1 3.6 61.9 4.4 33.2 22.9 32 23.7 32 23.6Z"/>
            </g>
          </svg>
        </div>
      </div>
    </div>

  );
};


const Writeup = () => {
  const styles = v({
    writeup: {
      backgroundColor: 'white',
      position: 'relative',
      width: '100vw',
      zIndex: 99,
      'p': {
        '@composes': [
          a.h1,
          a.m0,
          a.py3
        ]
      },
      'a': {
        '@composes': [
          a.black,
          a.noUnderline
        ]
      },
      'span.heading': {
        fontSize: 'inherit',
        borderBottom: '1px solid black',
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
      '@composes': [
        a.p4
      ]
    }
  });
  return (
    <div className={styles.writeup}>
      <div className={styles.padWriteup}>
        <p itemProp='description'>Sanctu Compu makes digital products.</p>
        <p>New website coming soon.</p>
        <p>
          <span className='heading'>Selected Collaborators</span>
          <br />
          <a href='http://ginlane.com/' target='_blank' itemProp='brand' itemScope itemType='http://schema.org/Organization'>
            <span itemProp='name'>Gin Lane</span>
          </a>
          {', '}
          <a href='http://playlab.org/' target='_blank' itemProp='brand' itemScope itemType='http://schema.org/Organization'>
            <span itemProp='name'>PlayLab</span>
          </a>
          {', '}
          <a href='http://labour-ny.com/' target='_blank' itemProp='brand' itemScope itemType='http://schema.org/Organization'>
            <span itemProp='name'>Labour NY</span>
          </a>
          {', '}
          <a href='http://human-nyc.com/' target='_blank' itemProp='brand' itemScope itemType='http://schema.org/Organization'>
            <span itemProp='name'>Human NYC</span>
          </a>
        </p>
        <p>
          <span className='heading'>Selected Clients</span>
          <br />
          <a href='https://www.diginn.com/' target='_blank' itemProp='brand' itemScope itemType='http://schema.org/Organization'>
            <span itemProp='name'>Dig Inn</span>
          </a>
          {', '}
          <a href='http://www.hermanmiller.com/' target='_blank' itemProp='brand' itemScope itemType='http://schema.org/Organization'>
            <span itemProp='name'>Herman Miller</span>
          </a>
          {' and '}
          <a href='https://www.dameproducts.com/' target='_blank' itemProp='brand' itemScope itemType='http://schema.org/Organization'>
            <span itemProp='name'>Dame Products</span>  
          </a>
        </p>
        <p>
          <span className='heading'>Technology Stack</span>
          <br />React, React Native, Ember, Phoenix, Elixir, Ruby, Rails, Sass, Greensock and Aframe, among others
        </p>
        <p><a href="mailto:hello@sanctuary.computer" itemProp='email'>hello@sanctuary.computer</a></p>
        <p>
          <a href="https://www.facebook.com/sanctucompu/" target="_blank">Facebook</a><br />
          <a href="https://twitter.com/sanctucompu" target="_blank">Twitter</a><br />
          <a href="https://www.instagram.com/sanctucompu/" target="_blank">Instagram</a>
        </p>
        <p itemProp='location' itemScope itemType='http://schema.org/PostalAddress'>
          <span itemProp='streetAddress'>110 Bowery St, Fourth Floor</span>
          <br />
          <span itemProp='addressLocality'>New York City</span>
          <span itemProp='postalCode'>10013</span>
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
    this.image = 'https://img42.com/qfSiP+';
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
        fontFamily: '"AustinNewsLight", "Helvetica Neue", Helvetica',
        marginTop: '100vh',
      }
    });
    return (
      <div itemScope itemType='http://schema.org/LocalBusiness' className={styles.siteWrapper}>
        <Hero image={this.image} imageHeight={this.state.imageHeight} />
        <Writeup />
      </div>
    );
  }
}
