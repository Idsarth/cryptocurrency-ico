import React, { Fragment } from 'react'
import Particles from 'react-particles-js'

const Particle = () => {
  return (
    <Fragment>
      <Particles className='particles'
        params={{
          particles: {
            number: {
              value: 70
            },
            size: {
              value: 3
            }
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: 'repulse'
              }
            }
          }
        }} />

    </Fragment>
  )
}

export default Particle
