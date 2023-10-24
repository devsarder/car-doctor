import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";

const Banner = () => {
  return (
    <div className="carousel max-h-[600px]  rounded-md w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full object-cover h-[600px]" />
        <div className="absolute flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)]-full text-white  gap-5 left-0 h-full pl-24 ">
          <div className="w-1/3 space-y-4 ">
            <h1 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-primary bg-gradient-to-r from-red-700 to-red-500 mr-4">
                Discover More
              </button>
              <button className="btn btn-outline outline-white text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex ml-[900px] gap-5 transform -translate-y-1/2 left-5 right-5 bottom-5">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full object-cover h-[600px]" />
        <div className="absolute flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)]-full text-white  gap-5 left-0 h-full pl-24 ">
          <div className="w-1/3 space-y-4 ">
            <h1 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-primary bg-gradient-to-r from-red-700 to-red-500 mr-4">
                Discover More
              </button>
              <button className="btn btn-outline outline-white text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>{" "}
        <div className="absolute flex ml-[900px] gap-5 transform -translate-y-1/2 left-5 right-5 bottom-5">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full object-cover h-[600px]" />
        <div className="absolute flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)]-full text-white  gap-5 left-0 h-full pl-24 ">
          <div className="w-1/3 space-y-4 ">
            <h1 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-primary bg-gradient-to-r from-red-700 to-red-500 mr-4">
                Discover More
              </button>
              <button className="btn btn-outline outline-white text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>{" "}
        <div className="absolute flex ml-[900px] gap-5 transform -translate-y-1/2 left-5 right-5 bottom-5">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full object-cover h-[600px]" />
        <div className="absolute flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)]-full text-white  gap-5 left-0 h-full pl-24 ">
          <div className="w-1/3 space-y-4 ">
            <h1 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-primary bg-gradient-to-r from-red-700 to-red-500 mr-4">
                Discover More
              </button>
              <button className="btn btn-outline outline-white text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>{" "}
        <div className="absolute flex ml-[900px] gap-5 transform -translate-y-1/2 left-5 right-5 bottom-5">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
