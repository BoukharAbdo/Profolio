import { content } from "../Content";

const Experience = () => {
  const { experience } = content;

  return (
    <section id="experience" className="bg-bg_light_primary py-16">
      <div className="md:container px-5">
        <h2 className="title" data-aos="fade-down">
          {experience.title}
        </h2>

        <h4 className="subtitle" data-aos="fade-down">
          {experience.subtitle}
        </h4>

        <div className="mt-12 relative">
          {/* ligne verticale */}
          <div className="hidden md:block absolute left-7 top-0 bottom-0 w-[2px] bg-slate-200"></div>

          <div className="flex flex-col gap-10">
            {experience.exp_content.map((item, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 200}
                className="relative flex gap-5"
              >
                {/* timeline logo */}
                <div className="hidden md:flex flex-col items-center relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center">
                    <img
                      src={item.logo}
                      alt={item.company}
                      className="w-9 h-9 object-contain"
                    />
                  </div>
                </div>

                {/* card */}
                <div className="w-full bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition duration-300">
                  {/* mobile logo */}
                  <div className="md:hidden mb-4 flex items-center gap-3">
                    <div className="w-14 h-14 rounded-2xl bg-[#EAF2FA] border border-slate-200 flex items-center justify-center">
                      <img
                        src={item.logo}
                        alt={item.company}
                        className="w-9 h-9 object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-dark_primary leading-tight">
                        {item.role}
                      </h3>
                      <p className="text-slate-600 text-sm">
                        {item.company}
                      </p>
                    </div>
                  </div>

                  {/* desktop title */}
                  <div className="hidden md:block">
                    <h3 className="text-2xl font-semibold text-dark_primary leading-tight">
                      {item.role}
                    </h3>
                    <p className="text-lg text-slate-700 mt-1">
                      {item.company}
                    </p>
                  </div>

                  {/* badges */}
                  <div className="flex flex-wrap gap-3 mt-4">
                    <span className="bg-[#EAF2FA] text-dark_primary text-sm px-3 py-1 rounded-full border border-slate-200">
                      {item.contract}
                    </span>
                    <span className="bg-slate-100 text-slate-600 text-sm px-3 py-1 rounded-full">
                      {item.date}
                    </span>
                    <span className="bg-slate-100 text-slate-600 text-sm px-3 py-1 rounded-full">
                      {item.location}
                    </span>
                  </div>

                  {/* description */}
                  <div className="mt-6 space-y-4 text-slate-700 leading-8">
                    <p>{item.desc1}</p>
                    <p>{item.desc2}</p>
                  </div>

                  {/* responsibilities */}
                  <div className="mt-6">
                    <h4 className="text-lg font-semibold text-dark_primary mb-4">
                      Responsabilités principales
                    </h4>

                    <ul className="grid gap-3">
                      {item.responsibilities.map((resp, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 bg-[#F8FAFC] rounded-xl p-4 border border-slate-100"
                        >
                          <span className="mt-1 w-2.5 h-2.5 rounded-full bg-dark_primary shrink-0"></span>
                          <span className="text-slate-700 leading-7">
                            {resp}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;