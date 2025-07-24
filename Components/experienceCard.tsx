/* eslint-disable @typescript-eslint/no-explicit-any */

import { ExperienceData } from "@/lib/data";

export default function ExperienceCard() {

  const groupedExperiences = ExperienceData.reduce((acc: any, experience: any) => {
    const companyName = experience.Company;
    
    if (!acc[companyName]) {
      acc[companyName] = [];
    }
    
    acc[companyName].push(experience);
    
    return acc;
  }, {});

  return (
    <div className="flex flex-col gap-10 pt-10">
      {Object.entries(groupedExperiences).map(([companyName, experiences]: [string, any]) => (
        <div key={companyName} className="flex flex-col gap-4">
          <h4 className="text-xl md:text-2xl font-bold italic">{companyName}</h4>
          
          {experiences.map((experience: any, index: number) => (
            <div key={index} className="p-5 bg-[rgba(214,211,206,0.2)] dark:bg-[#1e293b] rounded-lg">
              <p className="font-semibold text-lg">{experience.Title}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{experience.StartDate} - {experience.EndDate}</p>
              <ul className="list-disc list-inside space-y-1">
                {experience.Description.map((description: any, descIndex: number) => (
                  <li key={descIndex} className="">{description}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}