import { createElement, useState } from "react";
import { content } from "../Content";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "30rem",
    width: "90%",
    borderRadius: "12px",
    padding: "20px",
  },
  overlay: {
    padding: "2rem",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
};

Modal.setAppElement("#root");

const Skills = () => {
  const { skills } = content;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectSkill, setSelectSkill] = useState(null);

  const openModal = (skill) => {
    setSelectSkill(skill);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectSkill(null);
  };

  return (
    <section className="min-h-fit bg-bg_light_primary" id="skills">
      {/* modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="flex items-center gap-3">
          <img
            className="h-10 w-10 object-contain"
            src={selectSkill?.logo}
            alt={selectSkill?.name || "logo"}
          />
          <h6 className="text-xl font-semibold">{selectSkill?.name}</h6>
        </div>

        <p className="mt-3 text-sm italic text-gray-600">
          {selectSkill?.para}
        </p>

        <br />

        <ul className="list-decimal px-5 font-Poppins sm:text-sm text-xs leading-7 text-gray-700">
          {selectSkill?.projectsList?.map((project, index) => (
            <li key={index}>{project}</li>
          ))}
        </ul>

        <br />

        <div className="flex justify-end">
          <button onClick={closeModal} className="btn">
            Fermer
          </button>
        </div>
      </Modal>

      {/* content */}
      <div className="md:container px-5 py-14">
        <h2 className="title" data-aos="fade-down">
          {skills.title}
        </h2>

        <h4 className="subtitle" data-aos="fade-down">
          {skills.subtitle}
        </h4>

        <br />

        <div className="flex flex-wrap gap-4 justify-center">
          {skills.skills_content.map((skill, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 200}
              className="bg-white relative group w-full max-w-sm flex items-center gap-5 p-5 rounded-md border-2 border-slate-200 shadow-sm hover:shadow-md duration-300"
            >
              <div className="flex items-center justify-center">
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-10 h-10 object-contain group-hover:scale-110 duration-200"
                />
              </div>

              <div className="flex-1">
                <h6 className="font-semibold text-lg">{skill.name}</h6>
                <p className="italic text-sm text-gray-600">{skill.para}</p>
              </div>

              <button
                onClick={() => openModal(skill)}
                className="text-xl absolute top-3 right-3 hover:text-blue-600 duration-200"
                aria-label={`Voir plus sur ${skill.name}`}
              >
                {createElement(skills.icon)}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;