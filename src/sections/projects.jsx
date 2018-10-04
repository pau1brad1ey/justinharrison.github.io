import React from 'react'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'
import showerImg from '../assets/img/portfolio/shower.jpg'
import bathroomImg from '../assets/img/portfolio/bathroom.jpg'
import flatImg from '../assets/img/portfolio/flat.jpg'
import maggie1Img from '../assets/img/portfolio/1_maggie_after.jpg'
import deb1Img from '../assets/img/portfolio/2_after_deb.jpg'
const images = [showerImg, bathroomImg, flatImg, maggie1Img, deb1Img]

class Projects extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      photoIndex: 0,
      isOpen: false
    }
  }

  render() {
    const { photoIndex, isOpen } = this.state
    return (

    <div className='container' id='portfolio' name='portfolio'>
      <br />
      <div className='row'>
        <br />
        <h1 className='centered'>SOME OF OUR PROJECTS</h1>
        <hr />
        <br />
        <br />
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4 '>
            <div className='grid mask'>
              <figure onClick={() => this.setState({ isOpen: true })}>
                <img className='img-responsive' src={showerImg} alt='' />
                <figcaption>
                  <h5>Shower install</h5>
                  <a data-toggle='modal' href='#myModal' className='btn btn-primary btn-lg'>Take a Look</a>
                </figcaption>
              </figure>
            </div>
          </div>

          <div className='col-md-4'>
            <div className='grid mask'>
              <figure onClick={() => this.setState({ isOpen: true })}>
                <img className='img-responsive' src={flatImg} alt='' />
                <figcaption>
                  <h5>Apartment renovation</h5>
                  <a data-toggle='modal' href='#myModal' className='btn btn-primary btn-lg'>Take a Look</a>
                </figcaption>
              </figure>
            </div>
          </div>

          <div className='col-md-4'>
            <div className='grid mask'>
              <figure onClick={() => this.setState({ isOpen: true })}>
                <img className='img-responsive' src={bathroomImg} alt='' />
                <figcaption>
                  <h5>Bathroom refit</h5>
                  <a data-toggle='modal' href='#myModal' className='btn btn-primary btn-lg'>Take a Look</a>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>

        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
        <br />
        <br />
      </div>
    </div>

    )
  }
}

export default Projects
