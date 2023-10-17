import React from "react";

// import components
import Users from "../components/Users";

// import image
import Img from "../assets/img/logo (2).png";

const Banner = () => {
  return (
    <section className="min-h-[600px] pt-24 pb-12 text-center relative lg:pt-48 lg:pb-0 lg:text-left">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div>
            <h1
              className="text-3xl font-bold mb-8 lg:text-5xl lg:leading-snug"
              data-aos="fade-down"
              data-aos-delay="500"
            >
              EMO <br /> GO HOME
            </h1>
            <p
              className="font-secondary mb-12 max-w-[440px] mx-auto lg:mx-0"
              data-aos="fade-down"
              data-aos-delay="600"
            >
              This is a brand new version. EMO can charge himself, walk in a
              limited area and play by himself. You don’t have to worry about
              his power and safety anymore.
            </p>
            {/* btns */}
            <div
              className="flex items-center justify-around space-x-4 max-w-[320px] mx-auto mb-12 lg:space-x-8 lg:mx-0 lg:max-w-none lg:justify-start"
              data-aos="fade-down"
              data-aos-delay="700"
            >
              <button className="btn">Get it now</button>
              <a
                className="border-b-2 border-transparent hover:border-white transition ease-out"
                href="#"
              >
                Explore It
              </a>
            </div>
            <Users />
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="800"
            className="right"
            style={{ "width": "50%", "margin-left": "130px" }}
          >
            <img className="w-full" src={Img} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
