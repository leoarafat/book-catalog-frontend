import heroImage from "../../assets/Reading glasses-cuate.png";
const Hero = () => {
  return (
    <div>
      <div className="pt-32 md:py-12 xl:container m-auto px-6 md:px-12">
        <div
          aria-hidden="true"
          className="absolute inset-0 my-auto w-96 h-32 rotate-45 bg-gradient-to-r from-primaryLight to-secondaryLight blur-3xl opacity-50 dark:opacity-20"
        ></div>
        <div className="relative lg:flex lg:items-center lg:gap-12">
          <div className="text-center lg:text-left md:mt-12 lg:mt-0 sm:w-10/12 md:w-2/3 sm:mx-auto lg:mr-auto lg:w-6/12">
            <h1 className=" font-bold text-4xl md:text-6xl lg:text-5xl xl:text-6xl ">
              Embark on a Journey of Reading and Discovery with Read &{" "}
              <span className="text-primary dark:text-primaryLight">
                Discover.
              </span>
            </h1>
            <p className="mt-8">
              Embark on a Journey of Reading and Discovery with Read & Discover.
              Explore captivating stories, gain knowledge, and find new literary
              adventures. Start your reading pleasure today!
            </p>
            <div>
              <form action="" className="w-full mt-12">
                <div className="relative flex items-center px-2 p-1 rounded-full bg-white  border border-primary/10 shadow-md md:p-2 lg:pr-3">
                  <div className="pl-6 py-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 m-auto fill-blue-900/60 dark:fill-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <input
                    autoComplete="email"
                    placeholder="Your mail address"
                    className="w-full p-4 rounded-full placeholder-gray-600 dark:placeholder-white bg-transparent"
                    type="email"
                  />
                  <div className="md:pr-1.5 lg:pr-0">
                    <button
                      type="button"
                      title="Start buying"
                      className="relative h-12 w-20 sm:w-auto ml-auto sm:px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary dark:before:bg-primaryLight before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                    >
                      <span className="relative hidden w-max text-white  font-semibold md:block">
                        Get Started
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="relative h-6 w-6 mx-auto text-white dark:text-gray-900 md:hidden"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="mt-12 flex gap-6 lg:gap-12 justify-between grayscale dark:grayscale-0">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
                className="h-8 sm:h-10 w-auto lg:h-12"
                alt=""
              />
              <img
                src="https://w7.pngwing.com/pngs/132/565/png-transparent-ge-logo-illustration-general-electric-logo-company-business-locomotive-electric-company-text-trademark.png"
                className="h-8 sm:h-10 w-auto lg:h-12"
                alt=""
              />

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1280px-Microsoft_logo_%282012%29.svg.png"
                className="h-8 sm:h-10 w-auto lg:h-12"
                alt=""
              />
            </div>
          </div>
          <div className="overflow-hidden w-full lg:w-7/12 lg:-mr-16">
            <img
              src={heroImage}
              alt="project illustration"
              height=""
              width=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
