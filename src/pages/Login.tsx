import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LoginFormInputs } from "../types/globalTypes";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { loginUser } from "../redux/features/user/userSlice";
import { toast } from "react-hot-toast";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();
  const { user, isLoading, isError, error } = useAppSelector(
    (state: { user: any }) => state.user
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const onSubmit = (data: LoginFormInputs) => {
    // Handle form submission here
    dispatch(loginUser({ email: data.email, password: data.password }));
  };
  useEffect(() => {
    if (user.email && !isLoading) {
      navigate(from, { replace: true });
      toast.success("User loggedin Successfully");
    }
  }, [user.email, isLoading, navigate, from]);
  if (isError) {
    toast.error(error);
  }
  return (
    <div>
      <div className="m-auto xl:container px-12 sm:px-0 mx-auto">
        <div className="mx-auto h-full sm:w-max">
          <div className="m-auto  py-12">
            <div className="mt-12 rounded-3xl border bg-gray-50 dark:border-gray-700 dark:bg-gray-800 -mx-6 sm:-mx-10 p-8 sm:p-10">
              <h3 className="text-2xl font-semibold text-gray-700 dark:text-white">
                Login into your account
              </h3>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-10 space-y-8 dark:text-white"
              >
                <div>
                  <div
                    className={`relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300 ${
                      errors.email ? "before:bg-red-400" : ""
                    }`}
                  >
                    <input
                      type="email"
                      id="email"
                      placeholder="Your email or user name"
                      {...register("email", { required: "Email is required" })}
                      className={`w-full bg-transparent pb-3 border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none ${
                        errors.email ? "invalid:border-red-400" : ""
                      } transition`}
                    />
                  </div>
                  {errors.email && (
                    <span className="text-red-400">
                      {/* {errors.email.message} */}
                    </span>
                  )}
                </div>

                <div className="flex flex-col items-end">
                  <div
                    className={`w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300 ${
                      errors.password ? "before:bg-red-400" : ""
                    }`}
                  >
                    <input
                      type="password"
                      id="password"
                      placeholder="Your password"
                      {...register("password", {
                        required: "Password is required",
                      })}
                      className={`w-full bg-transparent pb-3 border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none ${
                        errors.password ? "invalid:border-red-400" : ""
                      } transition`}
                    />
                  </div>
                  {errors.password && (
                    <span className="text-red-400">
                      {errors.password.message}
                    </span>
                  )}
                  <button type="reset" className="-mr-3 w-max p-3">
                    <span className="text-sm tracking-wide text-sky-600 dark:text-sky-400">
                      Forgot password ?
                    </span>
                  </button>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full rounded-full bg-sky-500 dark:bg-sky-400 h-11 flex items-center justify-center px-6 py-3 transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800"
                  >
                    <span className="text-base font-semibold text-white dark:text-gray-900">
                      Login
                    </span>
                  </button>
                  <button type="reset" className="-ml-3 w-max p-3">
                    <span className="text-sm tracking-wide text-sky-600 dark:text-sky-400">
                      Don't have an account?
                      <Link to="/sign-up">Register</Link>
                    </span>
                  </button>
                </div>
              </form>
            </div>
            <div className="border-t pt-12 text-gray-500 dark:border-gray-800">
              <div className="space-x-4 text-center">
                <span>&copy; Read & Discover</span>
                <Link
                  to=""
                  className="text-sm hover:text-sky-900 dark:hover:text-gray-300"
                >
                  Contact
                </Link>
                <Link
                  to="#/"
                  className="text-sm hover:text-sky-900 dark:hover:text-gray-300"
                >
                  Privacy & Terms
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
