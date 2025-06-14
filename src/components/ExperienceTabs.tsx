import { useState } from "react";

interface Experience {
  empresa: string;
  titulo: string;
  date: string;
  description: string[];
}

interface ExperienceTabsProps {
  experiencesProps: Experience[];
}

const ExperienceTabs = ({ experiencesProps }: ExperienceTabsProps) => {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col md:flex-row gap-6">
      {/*Barra de las empresas*/}

      <ul className="md:w-48 flex md:flex-col border-l-2 ">
        {experiencesProps.map((exp, idx) => (
          <li key={exp.empresa}>
            <button
              onClick={() => setActive(idx)}
              className={`w-full text-left px-4 py-2 border-l-2 transition 
                ${
                  idx === active
                    ? "bg-indigo-50 dark:bg-slate-800"
                    : "border-transparent hover:bg-gray-100 dark:hover:bg-slate-700"
                }`}
            >
              {exp.empresa}
            </button>
          </li>
        ))}
      </ul>

      {/* Detalle de la experiencia seleccionada */}
      <div className="flex-1">
        <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
          {experiencesProps[active].titulo}{" "}
        </h3>
        <time className="block mb-4 text-sm text-gray-500">
          {experiencesProps[active].date}
        </time>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-400">
          {experiencesProps[active].description.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceTabs;
