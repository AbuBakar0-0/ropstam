import React from "react";

function BreakingBarriers() {
  return (
    <div
      className="bg-cover bg-center py-8"
      style={{ backgroundImage: `url("/assets/breaking-barriers.gif")` }}
    >
      <div className="container mx-auto flex flex-col gap-6  px-5 lg:px-20">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          <h2 className="text-3xl md:text-5xl font-medium w-full md:w-1/3">
            Breaking Barriers to Recovery
          </h2>
          <p className="w-full md:w-1/2 text-lg">
            We’re not just offering a service; we’re creating a lifeline. Our platform is designed to eliminate the challenges that often stand in the way of recovery—whether it’s stigma, inconvenience, or lack of access to quality care.
          </p>
        </div>

        {/* Stats Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="w-full md:w-1/3 text-lg">
            Our mission is to make Medication-Assisted Treatment accessible to people in both major cities and rural communities. We’re deeply committed to removing obstacles to recovery, ensuring our clients get the support they need.
          </p>

          <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="w-full md:w-1/3 flex flex-col justify-start items-start text-center md:text-left">
              <p className="text-primary text-4xl font-medium">500+</p>
              <p className="font-medium">Patients Treated</p>
            </div>
            <div className="w-full md:w-1/3 flex flex-col justify-start items-start text-center md:text-left">
              <p className="text-primary text-4xl font-medium">300+</p>
              <p className="font-medium">Centers Nationwide</p>
            </div>
            <div className="w-full md:w-1/3 flex flex-col justify-start items-start text-center md:text-left">
              <p className="text-primary text-4xl font-medium">4.9/5</p>
              <p className="font-medium">Patient Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BreakingBarriers;
