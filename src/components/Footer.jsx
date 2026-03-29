import { content } from "../Content";

const Footer = () => {
  const { Footer } = content;

  return (
    <footer className="bg-white border-t border-slate-200 mt-20">
      <div className="md:container px-5 py-12 text-center">

        {/* Nom */}
        <h3 className="text-2xl font-semibold text-dark_primary">
          {Footer.name}
        </h3>

        {/* Métier */}
        <p className="text-slate-600 mt-2">
          {Footer.role}
        </p>

        {/* Description */}
        <p className="text-slate-500 mt-4 max-w-xl mx-auto leading-7">
          {Footer.description}
        </p>

        {/* Réseaux */}
        <div className="flex justify-center gap-6 mt-6">
          {Footer.social.map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 hover:text-dark_primary text-xl transition duration-300"
            >
              <item.icon />
            </a>
          ))}
        </div>

        {/* Ligne */}
        <div className="border-t border-slate-200 my-6"></div>

        {/* Copyright */}
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} {Footer.name}. Tous droits réservés.
        </p>

      </div>
    </footer>
  );
};

export default Footer;