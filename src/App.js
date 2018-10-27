import React, { Component } from 'react';

class App extends Component {

  
  validateAuthDetails=()=>{
    console.log('~~~~~~~~~~~~ validateAuthDetails ~~~~~~~~~~~~');
  }

  render() {
    return (
      <div className="container-fluid" style={{ height: "100%" }}>
        <div className="d-flex align-items-center" style={{ height: "100%" }}>
          <div className="row" style={{width: "100%"}}>
            <div className="offset-3 col-6">
              <div className="card">
                <div className="card-body">
                  <form>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Email address</label>
                      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                      <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Password</label>
                      <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div className="form-group form-check">
                      <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                      <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="button" className="btn btn-primary"  onClick={this.validateAuthDetails} >Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
