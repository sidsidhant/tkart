import React from 'react'

const Studentsettings = (profiledata:any) => {
  return (
    <>
        <div className="settings-widget profile-details mt-3">
                <div className="settings-menu p-0">
                  <div className="profile-heading">
                    <h3>Profile Details</h3>
                    <p>
                      You have full control to manage your own account setting.
                    </p>
                  </div>
                  <div className="course-group mb-0 d-none">
                    <div className="course-group-img d-flex align-items-center">
                      {/* <a href="student-profile.html"> */}
                      <img
                          src="https://dreamslms.dreamguystech.com/html/assets/img/user/user11.jpg"
                          alt=""
                        />
                      {/* </a> */}
                      <div className="course-name">
                        <h4>
                          <p>Your avatar</p>
                        </h4>
                        <p>PNG or JPG no bigger than 800px wide and tall.</p>
                      </div>
                    </div>
                    <div className="profile-share d-flex align-items-center justify-content-center">
                      <a href="javascript:;" className="btn btn-success">
                        Update
                      </a>
                      <a href="javascript:;" className="btn btn-danger">
                        Delete
                      </a>
                    </div>
                  </div>
                  <div className="checkout-form personal-address add-course-info">
                    <div className="personal-info-head d-none">
                      <h4>Personal Details</h4>
                      <p>Edit your personal information and address.</p>
                    </div>
                    <form action="#">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label className="form-control-label">
                              First Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter your first Name"
                              // value={profiledata?.name}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label className="form-control-label">
                              Last Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter your last Name"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label className="form-control-label">Phone</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter your Phone"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label className="form-control-label">Email</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter your Email"
                            />
                          </div>
                        </div>
                       
                        <div className="update-profile">
                          <button type="button" className="btn btn-orange">
                            Update Profile
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
    </>
  )
}

export default Studentsettings