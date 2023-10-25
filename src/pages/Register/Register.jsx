import { Link } from "react-router-dom";
import loginImg from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  console.log(createUser);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
     .then(result => {
        const user = result.user;
        console.log(user);
     })
      .catch((error) => {
        const errorMsg = error.message;
        console.error(errorMsg);
      });
    console.log(email, password);
  };
  return (
    <div className="p-14 min-h-screen ">
      <div className="hero-content flex-col  lg:flex-row gap-10">
        <div className="text-center  justify-between w-1/2">
          <img src={loginImg} alt="" />
        </div>
        <div className="card w-1/2   shadow-2xl bg-base-100">
          <h1 className="text-3xl text-center font-bold">Register now!</h1>
          <form onSubmit={handleRegister} className="card-body">
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
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn text-lg bg-red-500 hover:bg-red-400 text-black"
                type="submit"
                value="Sign Up"
              />
            </div>
          </form>

          <p className="capitalize font-semibold  mx-auto mb-3">
            Already have an account please
            <Link to="/login" className="underline text-red-700">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
