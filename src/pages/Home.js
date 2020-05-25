import React from 'react';

function Home() {
  return (
    <div>
      <div className="m-1">
        <h4 className="m-1 mb-4">H_jiny's React Demo Site</h4>
      </div>

      <div className="row">
        <div className="col-12 col-md-6">
          <div className="card m-1">
            <div className="card-header">
              <h5 className="card-title">React beginner</h5>
              <h6 className="card-subtitle text-muted">SPA(Single Page Application) Tutorial</h6>
            </div>
            <div className="card-body">
              <p className="card-text">Heroes</p>
              <p className="card-text">Scoreboard</p>
              <p className="card-text">Product</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
