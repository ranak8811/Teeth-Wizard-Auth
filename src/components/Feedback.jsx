/* eslint-disable react/prop-types */
const Feedback = ({ feedbackData }) => {
  //   console.log(feedbackData);

  return (
    <div className="grid grid-cols-3 gap-6">
      {feedbackData.map((feed, id) => (
        <div key={id} className="card bg-base-100 w-96 shadow-xl">
          <div className="card-body">
            <div className="flex items-center justify-between">
              <img
                className="w-12 h-12 rounded-full mr-3"
                src={feed.userImg}
                alt=""
              />
              <h2 className="card-title">{feed.name}</h2>
              <p className="text-right">{new Date().toLocaleDateString()}</p>
            </div>
            <p>{feed.review}</p>
            <div className="card-actions justify-end">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
              </div>

              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feedback;
