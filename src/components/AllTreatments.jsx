import { useLoaderData } from "react-router-dom";
import ServiceCards from "./ServiceCards";

const AllTreatments = () => {
  const services = useLoaderData();

  return (
    <div className="grid grid-cols-4 gap-4 mt-8">
      {services.map((service, id) => (
        <ServiceCards key={id} service={service}></ServiceCards>
      ))}
    </div>
  );
};

export default AllTreatments;
