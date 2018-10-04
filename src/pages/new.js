import React from 'react'
// import Link from 'gatsby-link'
import justinImg from '../assets/img/justin.jpg'
import nathalieImg from '../assets/img/nathalie.jpg'

import Projects from '../sections/projects'

const NewPage = () => (
  <div>
    <a name='home' className='' />
    <div id='headerwrap'>
      <header className='clearfix'>
        <h1>Justin Harrison<br />Artisan<br />Heating and plumbing services</h1>
        <p>Specialist in bathroom renovation</p>
      </header>
    </div>

    <div id='greywrap'>
      <div className='row'>
        <div className='col-lg-6 callout'>
          <span className='fa fa-eye' />
          <h2>Friendly reliable service</h2>
          <p>
          We pride ourselves on our honest and reliable service. References from our previous clients are available.
          </p>
        </div>

        <div className='col-lg-6 callout'>
          <span className='fa fa-heart' />
          <h2>Quality Assurance</h2>
          <p>
            We can assure our clients the highest level of service. All our work is guaranteed.
          </p>
        </div>
      </div>
    </div>

    <section className='section-divider textdivider artisandivider' id='services' name='services'>
      <div className='container'>
        <h1>Artisan Services</h1>
        <hr />
        <p>We work in Carcassonne and its surrounding areas</p>
      </div>
    </section>

    <div className='container'>
      <br />
      <br />
      <div className='row'>
        <h2 className='centered'>Bathroom installation specialist</h2>
        <hr />
        <br />
        <div className='col-lg-offset-2 col-lg-8'>
          <p>
            If you&apos;re thinking of installing a new bathroom we can help you from the design to installation. Good tiling could be the difference between an average bathroom to an aoutstanding one, so being skilled in the area we can help you relaise your dream.
          </p>
        </div>
      </div>

      <div className='row'>
        <h2 className='centered'>Plumbing and heating solutions</h2>
        <hr />
        <br />
        <div className='col-lg-offset-2 col-lg-8'>
          <p>
            We provide a full spectrum of services in the plumbing and heating area. With over 20 years experience in the industry you can rely on us to deliver the best solution for you.
          </p>
          <div>
            Our services range from:
            <ul>
              <li>
                Domestic plumbing
              </li>
              <li>
                Installation of full heating systems
              </li>
              <li>
                Certification of boilers with guarantee
              </li>
              <li>
                Replacement of hot and cold water pipes
              </li>
              <li>
                Replacement and repairs of electric water tanks and water pumps
              </li>
              <li>
                Boiler servicing, upgrades, and advice
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className='row'>
        <h2 className='centered'>Kitchen installation</h2>
        <hr />
        <br />
        <div className='col-lg-offset-2 col-lg-8'>
          We can help you from design to installation and advise you on the planning of your project.
        </div>
      </div>

      <div className='row'>
        <h2 className='centered'>Other services</h2>
        <hr />
        <br />
        <div className='col-lg-offset-2 col-lg-8'>
          We work with various trades that could help you with your renovation. We can also offer you additional support should you require.
        </div>
      </div>
    </div>

    <section className='section-divider textdivider qualitydivider'>
      <div className='container'>
        <h1>Quality at the heart of all we do</h1>
        <hr />
        <p>
        Our aim is to provide a high standard of workmanship in every job we do big or small
        </p>
      </div>
    </section>

    <div className='container' id='team' name='team'>
      <br />
      <div className='row white centered'>
        <h1 className='centered'>MEET THE TEAM</h1>
        <hr />
        <br />
        <br />
        <div className='col-lg-6 centered'>
          <img className='img img-circle' src={justinImg} height='120px' width='120px' alt='' />
          <br />
          <h4><b>Justin Harrison</b></h4>
          <p>Graduated from the British Gas apprenticeship scheme 20 years ago, Justin has gained a wide range of experience in this trade.
          After leaving British Gas, he set up his own business and worked with various London based estate agents. In 2004 he moved to France and set up his business in Carcassonne. He is a fully qualified Artisan and has been trading ever since.</p>
        </div>

        <div className='col-lg-6 centered'>
          <img className='img img-circle' src={nathalieImg} height='120px' width='120px' alt='' />
          <br />
          <h4><b>Nathalie Roussety</b></h4>
          <p>With a broad range of skills and experience Nathalie set up her business in 2010 offering translation and interpretation services and assistance with all aspects of settling in France.

            She can offer help in
            translation of documents,
            interpretation over the phone or face to face,
            Notaire assistance,
            help with EDF/GDF admin.
          </p>
        </div>

      </div>
    </div>

    <section className='section-divider textdivider ourworkdivider'>
      <div className='container'>
        <h1>OUR WORK</h1>
        <hr />
        <p>Every job we undertake is important to us. Customer satisfaction is our top priority</p>
      </div>
    </section>

    <Projects />

    <div className='container' id='blog' name='blog'>
      <br />
      <div className='row'>
        <br />
        <h1 className='centered'>OUR STORY SO FAR</h1>
        <hr />
        <br />
        <br />
      </div>

      <div className='row'>
        <div className='col-lg-6 blog-bg'>
          <div className='col-lg-4 centered'>
            <br />
            <p><img className='img img-circle' src={nathalieImg} width='60px' height='60px' /></p>
            <h4>Nathalie Roussety</h4>
            <h5>Published Sep 30.</h5>
          </div>
          <div className='col-lg-8 blog-content'>
            <h2>The move to France</h2>
            <p>We moved to France 15 years ago after deciding that London was no longer the place for us.  After 6 months travelling around southern France we finally settled in Carcassonne.
            </p>
            <p>15 years on, we are in our forever home with our 2 children.</p>
            <br /><br /><br />
          </div>
        </div>

        <div className='col-lg-6 blog-bg'>
          <div className='col-lg-4 centered'>
            <br />
            <p><img className='img img-circle' src={nathalieImg} width='60px' height='60px' /></p>
            <h4>Nathalie Roussety</h4>
            <h5>Published Nov 28.</h5>
          </div>
          <div className='col-lg-8 blog-content'>
            <h2>Holiday apartment</h2>
            <p>
            We recently renovated our home including a one bedroom apartment just next door. Should you be visiting the region and are looking for somewhere to stay, please don’t hesitate to get in touch.
            </p>
            <p>
              For further information about the apartment please contact Nathalie directly. If you wish, you can follow the link below <br />
              <a href='https://www.tripadvisor.co.uk/VacationRentalReview-g187151-d6465798-Apartment_The_Address-Carcassonne_Center_Carcassonne_Aude_Occitanie.html'>
                https://www.tripadvisor.co.uk/VacationRentalReview-g187151-d6465798-Apartment_The_Address-Carcassonne_Center_Carcassonne_Aude_Occitanie.html
              </a>
            </p>
            <br />
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>

    <div className='container' id='contact' name='contact'>
      <div className='row'>
        <br />
        <br />
        <h1 className='centered'>THANKS FOR VISITING</h1>
        <hr />
        <br />
        <br />
        <div className='col-lg-4'>
          <h3>Contact Justin</h3>
          <p>
            <span className='fa fa-home' /> 9 rue des Troenes, 11000 Carcassonne <br />
            <span className='fa fa-phone' /> 06 65 06 05 74 <br />
            <span className='fa fa-phone' /> 00336 65 06 05 74 (from UK) <br />
            <span className='fa fa-envelope' /> <a href='mailto:contact@justinharrison.net'> contact@justinharrison.net</a> <br />
            <span className='fa fa-building' /> siret: 480 307 396 00030<br />
          </p>
        </div>
        <div className='col-lg-4'>
          <h3>Contact Nathalie</h3>
          <p>
            <span className='fa fa-home' /> 9 rue des Troenes, 11000 Carcassonne <br />
            <span className='fa fa-phone' /> 06 06 42 47 35 <br />
            <span className='fa fa-phone' /> 00336 06 42 47 35 (from UK) <br />
            <span className='fa fa-envelope' /> <a href='mailto:theaddressfrance@gmail.com'> theaddressfrance@gmail.com</a> <br />
            <span className='fa fa-building' /> siret: 518 757 133 00013<br />
          </p>
        </div>

        <div className='col-lg-4'>
          <h3>Call us today</h3>
          <p>
            Small jobs can be arranged over the phone whilst larger projects can be discussed in person. Call now to make an appointment for a free no obligations estimate. 
          </p>
        </div>
      </div>

    </div>
  </div>
)

export default NewPage
