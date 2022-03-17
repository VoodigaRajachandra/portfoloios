import React from 'react'

const Daprojects = () => {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 py-2">
  <div className="col">
    <div className="card">
      <img src="./images/youtube.png" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Youtube CaseStudy</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <a href="#" class="btn btn-primary">View Github Repo</a>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="./images/stockmarket.png" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Stock Market Casestudy</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <a href="#" class="btn btn-primary">View Github Repo</a>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="./images/zomato.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Zomato Casestudy</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">View Github Repo</a>
      </div>
    </div>
  </div>
 
</div>
  )
}

export default Daprojects