import React from 'react';

function PostComponent(){

    return(
     
          <div className="card-body">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

               

                <form className="mx-1 mx-md-4">

                  <div className="col-md-12 pe-5">
                     <textarea className="form-control" rows="5" placeholder="Postea lo que quieras!"></textarea>
                  </div>

                  <div className="px-5 py-4">
                    <button type="submit" className="btn btn-primary btn-lg">Postear</button>
                 </div>

                </form>

              </div>
             
            </div>
          </div>
   


    );
}

export default PostComponent;