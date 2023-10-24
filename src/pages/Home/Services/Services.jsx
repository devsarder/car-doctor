import { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, []);
  console.log(services);
  return (
    <div className="my-6">
      <div className="lg:w-2/3 mx-auto p-10 text-center  space-y-3">
        <h2 className="text-5xl font-bold">Our Service Area</h2>
        <p className="text-gray-500">
          the majority have suffered alteration in some form, by injected
          humour, or randomized words which do not look even slightly
          believable.
        </p>
      </div>
      {/* services cards */}
      <div className="grid lg:grid-cols-3 gap-3">
        {services.map((service) => (
          <Service service={service} key={service._id}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
