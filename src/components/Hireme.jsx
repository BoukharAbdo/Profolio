import { content } from "../Content";

const Hireme = () => {
  const { Hireme } = content;

  return (
    <section className="bg-bg_light_primary py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Titles */}
        <h2 className="title text-center md:text-left" data-aos="fade-down">
          {Hireme.title}
        </h2>
        <h4 className="subtitle text-center md:text-left" data-aos="fade-down">
          {Hireme.subtitle}
        </h4>

        {/* Content */}
        <div className="mt-10 flex flex-col md:flex-row items-center gap-8">

          {/* Images */}
          <div className="flex justify-center w-full md:w-1/2">

            {/* Desktop image */}
            <img
            src={Hireme.image1}
            alt="..."
            data-aos="fade-right"
            className="max-w-sm md:block hidden"
            />
            <img
              src={Hireme.image1}
              data-aos="fade-up"
              alt="..."
              className="max-w-sm md:hidden"
            />

          </div>

          {/* Card */}
          <div
            data-aos="fade-left"
            className="w-full md:w-1/2 border-2 border-dark_primary
            p-5 sm:p-6 shadow-md rounded-4xl md:rounded-br-[6rem]
            bg-white"
          >
            <p className="text-sm sm:text-base leading-7 sm:leading-8 text-slate-700 text-center md:text-left">
              {Hireme.para}
            </p>

            <div className="mt-5 text-center md:text-left">
              <button className="btn bg-dark_primary text-white px-6 py-2.5 sm:px-8 sm:py-3 rounded-full hover:scale-105 transition duration-300">
                <a href="#contact" className="btn">
                  {Hireme.btnText}
                </a>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hireme;