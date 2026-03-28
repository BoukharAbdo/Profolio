import { content } from "../Content";

const Hero = () => {
  const { hero } = content;

  return (
    <section id="home" className="overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center md:pl-20 px-5">

        {/* Background + Nom vertical */}
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear -z-10"
        >
          <h1 className="rotate-90 absolute left-1/2 top-1/3 -translate-y-1/2 text-[#EAF2FA] text-3xl md:text-5xl font-bold tracking-widest whitespace-nowrap -z-8">
            {hero.firstName}{" "} <br></br>
            <span className="text-dark_primary">{hero.LastName}</span>
          </h1>
        </div>

        {/* first col */}
        <div className="pb-20 px-4 pt-8 max-w-4xl w-full mt-10" data-aos="fade-down">
          <h4>{hero.title1} </h4>
          <h4>{hero.title2}</h4>
          <h4>{hero.title3}</h4>

          <div className="flex justify-end mt-4">
            <a
              href="#contact"
              className="btn"
            >
              {hero.btnText}
            </a>
          </div>

          <div className="flex flex-col gap-8 mt-10">
            {hero.hero_content.map((item, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className={`flex items-start gap-5 ${
                  i === 1 ? "md:flex-row-reverse md:text-right" : ""
                }`}
              >
                <h3 className="min-w-[60px] text-4xl font-bold">
                  {item.count}
                </h3>

                <p
                  className={`bg-[#EAF2FA] border-l-4 border-dark_primary whitespace-pre-line p-3 rounded-xl shadow-sm leading-relaxed w-full max-w-3xl ${
                    i === 1 ? "md:text-right text-left" : "text-left"
                  }`}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* sec col */}
        <div className="md:h-[37rem] flex justify-center items-end relative">
          <img
            src={hero.image}
            data-aos="slide-up"
            alt="profile"
            className="h-full object-contain max-w-full relative z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;