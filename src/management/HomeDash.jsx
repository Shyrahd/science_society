import React from "react";

function HomeDash() {
  return <HomeCard />;
}

export default HomeDash;

function HomeCard() {
  return (
    <>
      <div className="card card-border bg-[#f58634] w-96 h-50">
        <div className="card-body">
          <h2 className="card-title">Card Title</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
}
