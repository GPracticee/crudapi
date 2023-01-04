import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from "../Images/logo.png"

const About = () => {
    const navigate = useNavigate()

    const callAboutPage = async () => {
        try {
            const res = await fetch('/about', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

            const data = await res.json()
            console.log(data);

            if (!res.status === 200) {
                const error = new Error(res.error)
                throw error;
            }

        } catch (err) {
            console.log(err);
            navigate('/login')
        }
    }

    useEffect(() => {
        callAboutPage();
    }, [])

    return (
        <>
            <div className="container">
                <form method='GET'>
                    <div className="row text-center">
                        <div className="col-md-4 rounded " >
                            <img src={logo} alt="" width={100} />
                        </div>
                        <div className="col-md-6">
                            <div>
                                <h5>Gautam Baghel</h5>
                                <h6>Web Developer</h6>
                                <p>RANKINGS: <span>1/10</span> </p>
                                <ul class="nav nav-tabs" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link active" data-toggle="tab" aria-current="page" role="tab" href="/home">About</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link active" data-toggle="tab" aria-current="page" role="tab" href="/profile">TimeLine</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <input type="submit" value="Edit Profile" name="btnAddMore" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <p>WORK LINKS</p>
                            <a href="https://www.google.co.in/" target="_gautam">Google</a> <br />
                            <a href="https://www.youtube.com/" target="_gautam">Youtue</a> <br />
                            <a href="https://www.facebook.com/campaign/landing.php?campaign_id=14884913640&extra_1=s%7Cc%7C550525804932%7Cb%7Cfacebook%20%27%7C&placement=&creative=550525804932&keyword=facebook%20%27&partner_id=googlesem&extra_2=campaignid%3D14884913640%26adgroupid%3D128696220912%26matchtype%3Db%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-327195741349%26loc_physical_ms%3D9061709%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAiAkfucBhBBEiwAFjbkr7UvUNq5ITkm1Z1h3ONeGEejuuC3Lnq1DhqZmNVQGuGyvq-ZL6zYXhoCwxAQAvD_BwE" target="_gautam">Facebook</a> <br />
                            <a href="https://www.instagram.com/" target="_gautam">Instagram</a> <br />
                            <a href="https://twitter.com/i/flow/login" target="_gautam">Twitter</a> <br />
                        </div>
                        <div className="col-md-8 pl-5">
                            <div>
                                <div role="tabpanel">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label htmlFor="">User Id</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>dfghjkl</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label htmlFor="">Name</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Gautam</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label htmlFor="">Email</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>dfghjkl</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label htmlFor="">Phone</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>dfghjkl</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label htmlFor="">Work</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>dfghjkl</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default About