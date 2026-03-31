import { content } from "../Content";

const Hero = () => {
  const { hero } = content;

  return (
    <section id="home" className="overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center px-4 sm:px-6 md:px-0">
        
        {/* Background + Nom vertical */}
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
        >
          <h1 className="rotate-90 absolute top-[10%] md:top-[25%] right-[-20%] sm:right-[-25%] md:right-[-15%] text-[#EAF2FA] text-3xl sm:text-4xl md:text-5xl font-bold whitespace-nowrap">
            {hero.firstName}{" "} <br></br>
            <span className="text-dark_primary">{hero.LastName}</span>
          </h1>
        </div>

        {/* first col */}
        <div
          className="pb-10 md:pb-16 px-2 sm:px-4 md:px-6 pt-5 z-10 w-full md:w-auto"
          data-aos="fade-down"
        >
        <h1 className="text-4xl sm:text-5xl md:text-5xl  leading-tight text-center md:text-left">
          {hero.title1}
          <br />
          <span className="block">{hero.title2}</span>
          <span className="block">{hero.title3}</span>
        </h1>

          <br />

          <div className="flex justify-center md:justify-end">
            <a href="#contact" className="btn">
              {hero.btnText}
            </a>
          </div>

          <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 mt-8 md:mt-10">
            {hero.hero_content.map((item, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className={`flex items-start sm:items-center w-full md:w-[32rem] gap-4 sm:gap-5 ${
                  i === 1 ? "md:flex-row-reverse md:text-right" : ""
                }`}
              >
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold min-w-[50px] sm:min-w-[70px]">
                  {item.count}
                </h3>

                <p
                  className={`bg-[#EAF2FA] p-4 sm:p-5 rounded-2xl shadow-sm border-l-4 border-dark_primary text-sm sm:text-base leading-relaxed whitespace-pre-line ${
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
        <div className="md:h-[37rem] h-80 sm:h-96 flex items-end z-10">
          <img
            src={hero.image}
            data-aos="slide-up"
            alt="profile"
            className="h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;