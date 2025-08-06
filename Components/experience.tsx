

import ExperienceCard from "./experienceCard";

export default function Experience(){
    return(
        <div className="md:border-2 md:dark:border-1  p-5 md:p-10 font-sans">
            <h2 className="text-3xl md:text-4xl underline">Experience</h2>
            <div>
                <ExperienceCard />
            </div>

        </div>
    )
}