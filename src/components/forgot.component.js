import React, { Component }  from "react";


export default class Forgot extends Component{
    render(){
        return(
            <form>
                <h3>Qual seu email de acesso?</h3>
             <div className="mb-3">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="Enter Email" />
           </div>
           <div className="d-grid">
          <button type="submit" className="btn btn-primary" onClick={console.log("bbb")}>
            Submit
          </button>
        </div>
            </form>
        )
    }
}