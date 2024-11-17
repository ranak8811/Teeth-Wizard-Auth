const Modal = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e);
  };
  return (
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <form onSubmit={handleSubmit} action="">
          <div>
            First Name
            <input
              type="text"
              name="Fname"
              placeholder="Type here"
              className="input input-bordered input-primary w-full max-w-xs"
            />
          </div>
          <div>
            Last Name
            <input
              type="text"
              name="Lname"
              placeholder="Type here"
              className="input input-bordered input-primary w-full max-w-xs"
            />
          </div>
          <div>
            Emial
            <input
              type="text"
              name="email"
              placeholder="Type here"
              className="input input-bordered input-primary w-full max-w-xs"
            />
          </div>
          <div>
            Phone Number
            <input
              type="text"
              name="phone"
              placeholder="Type here"
              className="input input-bordered input-primary w-full max-w-xs"
            />
          </div>
          <div>
            Appointment Date
            <input
              type="date"
              name="date"
              placeholder="Type here"
              className="input input-bordered input-primary w-full max-w-xs"
            />
          </div>
          <div>
            Address
            <input
              type="text"
              name="address"
              placeholder="Type here"
              className="input input-bordered input-primary w-full max-w-xs"
            />
          </div>
          <button className="btn" type="submit">
            Make Appointment
          </button>
        </form>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
