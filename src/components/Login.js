import React from 'react'

function Login() {
  return (

    <>
        <form className='container'>
            <div className="row   mb-3  d-flex justify-content-center">
                <div className="col-auto">
                    <label htmlFor="loginId" className="form-label">Login ID</label>
                </div>
                <div className="col-auto">
                    <input type="text" className="form-control" id="loginid" aria-describedby="loginIdHelp"/>
                </div>
            </div>
            {/*Password*/}
            <div className="row  align-items-center  d-flex justify-content-center">
                <div className="col-auto">
                    <label htmlFor="inputPassword6" className="col-form-label">Password</label>
                </div>
                <div className="col-auto">
                    <input type="password" id="inputPassword6" className="form-control" aria-describedby="passwordHelp"/>
                </div>
            </div>

            <div className="m-3 form-check d-flex d-flex justify-content-center">
                <input type="checkbox" className="form-check-input" id="exampleCheck1 "/>
                <label className="form-check-label px-4" htmlFor="exampleCheck1">Not a robot</label>
            </div>
            <button type="submit" className="btn btn-danger">Login</button>
        </form>
    </>
  )
}

export default Login