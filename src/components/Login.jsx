import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";

const Login = () => {
  const { handleGoogleLogin, handleLogin, handleLogout, handleTwitterLogin } =
    useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    // get form data's
    const formData = new FormData(e.target);

    const email = formData.get("email");
    const password = formData.get("password");

    handleLogin(email, password);
  };
  return (
    <div className="min-h-[calc(100vh-70px)] flex justify-center items-center bg-gradient-to-r from-blue-600 to-green-500">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
        <h2 className="text-2xl font-semibold text-center">
          Login your account
        </h2>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none" type="submit">
              Login
            </button>
          </div>
          <div className="flex flex-col my-4 space-y-3">
            <button onClick={handleGoogleLogin} className="btn">
              Google Login
            </button>

            {/* ------------------------------------------------------------ */}
            <button onClick={handleTwitterLogin} className="btn">
              Twitter Login
            </button>
            {/* ------------------------------------------------------------ */}

            <button onClick={handleLogout} className="btn">
              Logout
            </button>
          </div>
        </form>
        <p className="text-center font-semibold">
          Don&apos;t Have An Account ?{" "}
          <Link to={"/register"} className="text-red-500">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
