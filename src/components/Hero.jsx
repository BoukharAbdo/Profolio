import { content } from "../Content";

const Hero = () => {
  const { hero } = content;

  return (
    <section id="home" className="overflow-hidden">
      <div className="min-h-screen relative flex flex-col-reverse md:flex-row items-center md:items-end justify-center md:pl-20 px-4 sm:px-6">

        {/* Background + Nom vertical */}
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
        >
          <h1 className="rotate-90 absolute top-[10%] right-[-15%] text-[#EAF2FA]">
            {hero.firstName}{" "} <br></br>
            <span className="text-dark_primary">{hero.LastName}</span>
          </h1>
        </div>

        {/* first col */}
        <div
          className="pb-10 md:pb-18 px-2 sm:px-4 pt-6 sm:pt-8 max-w-3xl w-full mt-6 md:mt-10"
          data-aos="fade-down"
        >
          <h4 className="text-2xl sm:text-3xl md:text-4xl leading-relaxed text-center md:text-left">
            {hero.title1}
          </h4>
          <h4 className="text-2xl sm:text-3xl md:text-4xl leading-relaxed text-center md:text-left">
            {hero.title2}
          </h4>
          <h4 className="text-2xl sm:text-3xl md:text-4xl leading-relaxed text-center md:text-left">
            {hero.title3}
          </h4>

          <div className="flex justify-center md:justify-end mt-5">
            <a href="#contact" className="btn">
              {hero.btnText}
            </a>
          </div>

          <div className="flex flex-col gap-6 sm:gap-8 mt-8 sm:mt-10">
            {hero.hero_content.map((item, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className={`flex items-start gap-4 sm:gap-5 ${
                  i === 1 ? "md:flex-row-reverse md:text-right" : ""
                }`}
              >
                <h3 className="min-w-[50px] sm:min-w-[60px] text-2xl sm:text-3xl md:text-4xl font-bold">
                  {item.count}
                </h3>

                <p
                  className={`bg-[#EAF2FA] border-l-4 border-dark_primary whitespace-pre-line p-3 sm:p-4 rounded-xl shadow-sm leading-relaxed w-full max-w-3xl text-sm sm:text-base ${
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
        <div className="w-full md:w-auto flex justify-center items-end relative pt-6 md:pt-0">
          <img
            src={hero.image}
            data-aos="slide-up"
            alt="profile"
            className="h-full object-cover mt-20"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;