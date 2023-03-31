import React from 'react'

function Contact() {
  return (
    <div className='container py-5'>
      <h4 className='text-center py-3'>Get In Touch</h4>
    <div className='row'>
      
      <div className='col-lg-6 rightform'>
   <form  className='form'>
  <div className="mb-3">
  <label htmlFor="firstname" className="form-label py-2">First Name</label>
    <input type="text" className="form-control " id="firstname" aria-describedby="emailHelp"  placeholder='name'/>
    <label htmlFor="exampleInputEmail1" className="form-label py-2">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='email' />

    <label htmlFor="subject" className="form-label py-2">Subject</label>
    <input type="text" className="form-control" id="subject" aria-describedby="emailHelp" placeholder='subject' />
  </div>
  <label htmlFor="floatingTextarea2">Comments</label>
<div className="form-floating py-2">
  <textarea className="form-control" placeholder="Message Here.." id="floatingTextarea2" style={{height: 150}} defaultValue={""} />
  
</div>

 
  <button type="submit" className="btn btn-warning my-3">Submit</button>
</form>

      </div>
      <div className='col-lg-6 leftform'>
        <div className='numform d-flex justify-content-evenly'>
          <div className='numright text-center'>
          <i class="bi bi-telephone-fill fs-3"></i>
          <h6>Phone</h6>
          <p>< a href=''>+(323) 9847 3847 383</a></p>
            <p>< a href=''>+(434) 5466 5467 443</a></p>

          </div>
          <div className='numleft text-center'>
          <i class="bi bi-envelope-fill fs-3"></i>
          <h6>Email</h6>
          <p>< a href=''>Demoemail@gmail.com</a></p>
          <p>< a href=''>rafiqulislamsuvobd@gmail.com</a></p>
          </div>
        </div>
        <div className='mapform py-3'>
          <div className='row'>
            <div className='col-lg-12 '>
              <div className='address d-flex justify-content-center gap-2'>
             <div className='point'>
             <i class="bi bi-geo-alt-fill fs-3"></i>
             </div>
             <div className='adresstxt'>
              <h6>Address</h6>
              <p>4517 Washington Ave. Manchester, <br/> Road 2342,
              Kentucky 39495</p>
             </div>

              </div>
              <div className='map'>
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.02993251731!2d85.3426193142573!3d27.68546973306168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198d99470043%3A0x167d008efb47d64c!2sBroadway%20Infosys!5e0!3m2!1sen!2snp!4v1677742167957!5m2!1sen!2snp" width={"100%"} height={220} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      
    </div>
  )
}

export default Contact
