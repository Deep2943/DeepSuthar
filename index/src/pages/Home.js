import React from "react";
import avtar from "./../images/1655629630215.jpg";

function Home() {
    return (
        <div className="min-h-screen">
            <div className="container pt-5 d-flex flex-column align-items-center">
                <img src={avtar} width={200} alt="Deep Suthar" />
                <h1>Deep Suthar</h1>
                <h4>(Software Engineer)</h4>
                <p className="text-center border-bottom pb-3">Right now i’m in Silver Oak University pursuing 5th Semester in B-Tech IT. I would like to implement my Innovative ideas, Skills and Creativity for accomplishing the project. I like to Learn and Adopt new Devlopment Technology.</p>
                <p className="text-center">
                    <span className="d-mobile-block">Email: suthardeep2624@gmail.com</span>
                    <span className="d-none d-web-contents"> | </span>
                    <span className="d-mobile-block">Phone: +91-9888888888</span>
                </p>
                <p className="text-center">Address: Saral Residency,Nr.Aristo bliss,Satyamev vista road,Gota, Ahmedabad. IN - 382481</p>
            </div>
            <hr />
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title fw-bold pb-3">Skills</h5>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div>
                                            <p className="mb-0">HTML</p>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: "70%" }}>70%</div>
                                            </div>
                                        </div>
                                        <div className="pt-3">
                                            <p className="mb-0">CSS</p>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: "60%" }} >60%</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div>
                                            <p className="mb-0">JavaScript</p>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: "50%" }}>50%</div>
                                            </div>
                                        </div>
                                        <div className="pt-3">
                                            <p className="mb-0">REACTJS</p>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: "30%" }} >30%</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title fw-bold pb-3">Hobbies</h5>
                                <span class="badge bg-primary me-3 mb-3 p-2">Reading</span>
                                <span class="badge bg-secondary me-3 mb-3 p-2">Coding</span>
                                <span class="badge bg-success me-3 mb-3 p-2">Games</span>
                                <span class="badge bg-danger me-3 mb-3 p-2">Traveling</span>
                                {/* <span class="badge bg-warning text-dark me-3 mb-3 p-2">Warning</span>
                                <span class="badge bg-info text-dark me-3 mb-3 p-2">Info</span> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;