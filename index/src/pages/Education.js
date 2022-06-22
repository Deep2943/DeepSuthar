import React from "react";

function Education() {
    return (
        <React.Fragment>
            <div className="min-h-screen">
                <div className="container py-5">
                    <h1 className="text-center mb-5">Education</h1>
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="card mb-5">
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Bachelor of Technology  <span className="h6">from Silver Oak University</span></h5>
                                    <p className="mb-0">SEP 2020 - </p>
                                    <small>Study B.Tech Information Technology From Silver Oak University In Ahmedabad.Right Now Pursuing 5th semester.</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">HSC <span className="h6">from K M Patel School</span></h5>
                                    <p className="mb-0">2018 - 2019</p>
                                    <small></small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Education;