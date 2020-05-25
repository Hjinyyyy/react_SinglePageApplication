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
              <h6 className="card-subtitle text-muted">SPA 웹사이트 만들기 튜토리얼</h6>
            </div>
            <div className="card-body">
              <p className="card-text"><a href="/react_SinglePageApplication/heroes">Heroes</a></p>
              <p className="card-text"><a href="/react_SinglePageApplication/scoreboard">Scoreboard</a></p>
              <p className="card-text"><a href="/react_SinglePageApplication/product">Product</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
