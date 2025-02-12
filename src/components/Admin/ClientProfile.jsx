import React from 'react'

const ClientProfile = () => {
  return (
    <div>
        <div class="container-fluid ">
    <div class="row">
   
        <div class="col-lg-8 col-md-12">
            
            <div class="p-3 border rounded bg-white d-flex align-items-center">
            
                <div class="me-3">
                    <img src="https://i.pravatar.cc/300?u=modesta.johnson@example.net2" 
                         alt="Profile Picture" 
                         style="width: 100px; height: 100px; border-radius: 10px; object-fit: cover;"/>

                </div>

        
                <div class="flex-grow-1">
                    <h5>Giles Conn</h5>
                    <p class="mb-1 text-muted" style="font-size: 14px;">Senior - Research | User Role: Employee</p>
                    <small class="text-muted">Last Login: --</small>
                

                    
                    <div class="row mt-3">
                        <div class="col-6 col-sm-3">
                            <h6 class="mb-1" style="font-size: 14px;">Open Tasks</h6>
                            <p class="fw-bold mb-0" style="font-size: 16px;">4</p>
                        </div>
                        <div class="col-6 col-sm-3">
                            <h6 class="mb-1" style="font-size: 14px;">Projects</h6>
                            <p class="fw-bold mb-0" style="font-size: 16px;">2</p>
                        </div>
                        <div class="col-6 col-sm-3 mt-3 mt-sm-0">
                            <h6 class="mb-1" style="font-size: 14px;">Hours Logged</h6>
                            <p class="fw-bold mb-0" style="font-size: 16px;">0</p>
                        </div>
                        <div class="col-6 col-sm-3 mt-3 mt-sm-0">
                            <h6 class="mb-1" style="font-size: 14px;">Tickets</h6>
                            <p class="fw-bold mb-0" style="font-size: 16px;">0</p>
                        </div>
                    </div>
                </div>
            </div>


            <div class="bg-white border rounded p-3 mt-3">
                <h5>About</h5>
                <p style="font-size: 14px;">I am superhuman</p>
            </div>

            <div class="bg-white border rounded p-3 mt-3">
                <h5>Profile Info</h5>
                <table class="table table-borderless">
                    <tbody>
                        <tr><td><strong>Employee ID</strong></td><td>EMP-3</td></tr>
                        <tr><td><strong>Full Name</strong></td><td>Giles Conn</td></tr>
                        <tr><td><strong>Designation</strong></td><td>Senior</td></tr>
                        <tr><td><strong>Department</strong></td><td>Research</td></tr>
                        <tr><td><strong>Gender</strong></td><td>♂ Male</td></tr>
                        <tr><td><strong>Work Anniversary</strong></td><td>2 months from now</td></tr>
                        <tr><td><strong>Email</strong></td><td>mooteta.johnson@example.net2</td></tr>
                        <tr><td><strong>Hourly Rate</strong></td><td>$74</td></tr>
                        <tr><td><strong>Address</strong></td><td>11960 Kyleigh Cove Suite 484 Octaviaborgh, AL 75404</td></tr>
                        <tr><td><strong>Language</strong></td><td>English</td></tr>
                        <tr><td><strong>Marital Status</strong></td><td>Single</td></tr>
                        <tr><td><strong>Joining Date</strong></td><td>29-04-2024</td></tr>
                    </tbody>
                </table>
            </div>
        </div>

      
        <div class="col-lg-4 col-md-12 mt-3 mt-lg-0">
            
            <div class="bg-white border rounded p-3 mb-3">
                <h6 style="font-size: 14px;">Appreciation</h6>
                <p style="font-size: 14px;"><i class="fa-regular fa-thumbs-up" style=" background-color: #495E6720;"></i></p>
            </div>

           
            
            <div class="row g-2 bg-white border rounded p-3">
                <div class="col-6">
                    <div class="">
                        <h6 style="font-size: 14px;">Reporting To</h6>
                        <p style="font-size: 14px;">--</p>
                    </div>
                </div>
                <div class="col-6">
                    <div class="">
                        <h6 style="font-size: 14px;">Reporting Team</h6>
                        <p style="font-size: 14px;">--</p>
                    </div>
                </div>
            </div>

          
            <div class="row g-2 mt-2">
                <div class="col-6">
                    <div class="bg-white border rounded p-3">
                        <h6 style="font-size: 14px;">Late Attendance </h6>
                        <p style="font-size: 14px;">0</p>
                    </div>
                </div>
                <div class="col-6">
                    <div class="bg-white border rounded p-3">
                        <h6 style="font-size: 14px;">Leaves Taken</h6>
                        <p style="font-size: 14px;">0</p>
                    </div>
                </div>
            </div>

     
            <div class="bg-white border rounded p-3 mt-2">
                <h6 style="font-size: 14px;">Tasks</h6>
                <p style="font-size: 14px;">--</p>
            </div>

            
            <div class="bg-white border rounded p-3 mt-2">
                <h6 style="font-size: 14px;">Tickets</h6>
                <p style="font-size: 14px;">- Not enough data -</p>
            </div>
        </div>
    </div>
        </div>
    </div>
  )
}

export default ClientProfile