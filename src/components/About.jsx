import React from 'react'

const About = () => {
  return (
      <div className='d-flex justify-content-center py-4'>
    <div className="card mb-3 " style={{maxWidth: '540px'}}>
  <div className="row  g-0">
    <div className="col-md-4">
      <img src="./images/profile.jpeg" className="img-fluid rounded-start" style={{height:'100%'}}alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">About</h5>
        <p className="card-text">Name:&nbsp;Voodiga Rajachandra</p>
        <p className="card-text">Education:&nbsp;MBA</p>
        <p className="card-text">Email:&nbsp;voodiga@gmail.com</p>
        <p className="card-text">Mobile:&nbsp;8374312937</p>
        
        
      </div>
    </div>
  </div>
</div>
</div>
  )
}

export default About