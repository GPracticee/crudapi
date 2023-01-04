import React from 'react'

const Contact = () => {
    return (
        <>
            <section>

                <div class="container text-center ">
                    <div class="row">
                        <div class="col">
                            <div>Phone</div>
                            <div>+91 12365425</div>
                        </div>
                        <div class="col">
                            <div>Email</div>
                            <div>gautam@gmail.com</div>
                        </div>
                        <div class="col">
                            <div>Address</div>
                            <div>fdhj-55</div>
                        </div>
                    </div>
                </div>

            </section>
            <br />
            <br />
            <section>
            <div class="container text-center " style={{width:"60%"}}>
            <h1>Get in Touch</h1>
            <br />
                    <div class="row">
                        <div class="col">
                            <input type="text" placeholder="your name"  style={{padding:"8px",borderRadius:"5px",border:"none",outline:"0.2px solid black"}}/>
                        </div>
                        <div class="col">
                        <input type="email" placeholder="your email"  style={{padding:"8px",borderRadius:"5px",border:"none",outline:"0.2px solid black"}}/>
                        </div>
                        <div class="col">
                        <input type="number" placeholder="your phone"  style={{padding:"8px",borderRadius:"5px",border:"none",outline:"0.2px solid black"}}/>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div>
                        <textarea  placeholder='Enter Message' cols="20" rows="5" style={{width:"94%",borderRadius:"6px",border:"none",outline:"0.2px solid black",padding:"15px"}}/>
                    </div>
                    <br />
                    <div style={{textAlign:"left", margin:"0px 0px 0px 21px"}}>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact