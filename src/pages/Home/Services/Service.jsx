import { AiOutlineArrowRight } from "react-icons/ai";
import PropTypes from "prop-types";
const Service = ({ service }) => {
  const { img, title, price } = service;
  console.log(service);
  return (
    <div className="card flex flex-col bg-base-100 shadow-xl p-4">
      <figure className=" flex-grow">
        <img src={img} alt={title} />
      </figure>
      <div className="">
        <p className="text-6 font-bold mt-3">{title}</p>
        <div className="card-actions flex justify-between items-center text-red-500 ">
          <span className="capitalize">{`price: $ ${price}`}</span>
          <button className="btn bg-transparent text-red-500">
            <AiOutlineArrowRight></AiOutlineArrowRight>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
Service.propTypes = {
  service: PropTypes.obj,
};
