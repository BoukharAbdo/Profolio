import { content } from "../Content";

const Formation = () => {
  const { formation } = content;

  return (
    <section id="formation" className=" py-16">
      <div className="md:container px-5">

        {/* Title */}
        <h2 className="title" data-aos="fade-down">
          {formation.title}
        </h2>

        <h4 className="subtitle" data-aos="fade-down">
          {formation.subtitle}
        </h4>

        <div className="mt-10 bg-white rounded-xl p-6 shadow-sm border border-slate-200">

          {formation.formation_content.map((item, i) => (
            <div key={i} className={`${i !== 0 ? "mt-8 pt-8 border-t" : ""}`}>

              {/* Header */}
              <div className="flex gap-4">
                <img
                  src={item.logo}
                  alt="logo"
                  className="w-14 h-14 object-contain rounded-md"
                />

                <div>
                  <h3 className="text-xl font-semibold text-dark_primary">
                    {item.school}
                  </h3>

                  <p className="text-slate-700">
                    {item.diploma}
                  </p>

                  <p className="text-slate-500 text-sm">
                    {item.date}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-slate-800 leading-7">
                {item.desc}
              </p>

              {/* Skills */}
              <p className="mt-3 text-sm text-dark_primary font-medium">
                💡 {item.skills}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Formation;