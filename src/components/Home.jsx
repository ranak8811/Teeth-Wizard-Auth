import { Link, useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import ServiceCards from "./ServiceCards";
import Feedback from "./Feedback";

const Home = () => {
  const { servicesData, feedbackData } = useLoaderData();
  // console.log(services);
  return (
    <div className="container mx-auto">
      <Banner></Banner>
      <div className="grid grid-cols-4 gap-4 mt-8">
        {servicesData.slice(0, 4).map((service, id) => (
          <ServiceCards key={id} service={service}></ServiceCards>
        ))}
      </div>

      <button className="btn mx-auto bg-warning block mt-6">
        <Link to={"/allTreatments"}>Show more</Link>
      </button>

      <Feedback feedbackData={feedbackData}></Feedback>
    </div>
  );
};

export default Home;
