import loginImg from "../../assets/images/login/login.svg";

const Login = () => {
  return (
    <div className="p-14 min-h-screen ">
      <div className="hero-content flex-col  lg:flex-row gap-10">
        <div className="text-center  justify-between w-1/2">
          <img src={loginImg} alt="" />
        </div>
        <div className="card w-1/2   shadow-2xl bg-base-100">
          <h1 className="text-3xl text-center font-bold">Login now!</h1>
          <form className="card-body">
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
                value="Login"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
