import React from 'react'

const IndexPage = () => (
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
            We pride ourselves on our honest and reliable service and always deliver with a smile.
            We have many trusted clients and they would be more than happy to speak to you about our service if you need any kind of reassurance.
          </p>
        </div>

        <div className='col-lg-6 callout'>
          <span className='fa fa-heart' />
          <h2>Quality Assurance</h2>
          <p>
            Quality is at the core of everything we do. We are experts in our field and have partnered with the best Artisan trades in the area.
            No matter what the job, we assure our clients the highest levels of service and attention to detail. All of our work is guaranteed.
          </p>
        </div>
      </div>
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

export default IndexPage
