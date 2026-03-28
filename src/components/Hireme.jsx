import { content } from "../Content";

const Hireme = () => {
  const { Hireme, hero } = content;

  return (
    <section className="bg-bg_light_primary py-16 relative overflow-hidden">
      <div className="md:container px-5 relative">

        {/* 🔥 Background + Nom vertical FIXED */}
        <div className="absolute h-full md:w-3/12 w-6/12 top-0 right-0 ">
          
          {/* Background */}
          <div className="absolute inset-0"></div>

          {/* Nom visible */}
          <h1 className="rotate-90 absolute left-1/2 top-1/2 -translate-y-1/2 z-10 text-[#EAF2FA] text-3xl md:text-4xl font-bold tracking-widest whitespace-nowrap opacity-30">
            {hero.firstName}{" "}
            <span className="text-dark_primary">{hero.LastName}</span>
          </h1>
        </div>

        {/* Titles */}
        <p className="title" data-aos="fade-down">
          {Hireme.title}
        </p>

        <h6 className="subtitle" data-aos="fade-down">
          {Hireme.subtitle}
        </h6>

        {/* Content */}
        <div className="mt-10 flex items-center justify-center gap-10 md:flex-row flex-col-reverse">

          {/* Images */}
          <div className="flex justify-center" data-aos="fade-right">
            <img
              src={Hireme.image1}
              alt="profile"
              className="w-[280px] md:w-[350px] hidden md:block object-contain"
            />
            <img
              src={Hireme.image2}
              alt="profile"
              className="w-[250px] md:hidden object-contain"
            />
          </div>

          {/* Card */}
          <div
            data-aos="fade-left"
            className="border-2 border-dark_primary max-w-xl w-full
            p-8 shadow-md rounded-2xl rounded-br-[5rem]
            bg-[#EAF2FA]"
          >
            <p className="leading-8 text-[16px] text-slate-800">
              {Hireme.para}
            </p>

            <div className="mt-6">
              <a
                href="#contact"
                className="btn bg-dark_primary text-white px-8 py-3 rounded-full hover:scale-105 transition duration-300 inline-block"
              >
                {Hireme.btnText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hireme;