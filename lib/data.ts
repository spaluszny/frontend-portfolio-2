
export interface Experience {
    Company: string;
    Title: string;
    StartDate: string;
    EndDate: string;
    Description: string[];
}


export const ExperienceData: Experience[] = [
    {
        Company: 'Radiology of Indiana',
        Title: 'Data Analyst',
        StartDate: 'July 2023',
        EndDate: 'Present',
        Description: [
            "Spearheaded the formation of the data analytics team and implemented a standardized request system, while centralizing 20+ reports previously scattered across multiple departments Automated recurring quality and performance reports using SQL and SSRS, cutting manual processing time by 60% while eliminating formatting errors and improving consistency across 10 hospital clients",
            "Collaborated with clinical and executive stakeholders to design tailored reporting views and filters, increasing dashboard adoption rates and enabling proactive, data-informed decision-making ",
            "Created technical documentation and standardized templates for analytics workflows, reducing report creation time and cutting internal support requests by over 50%",
            "Streamline SSRS report automation, minimizing errors and boosting report reliability while supporting increased volume without added overhead"
        ]
    },
    {
        Company: 'Radiology of Indiana',
        Title: 'Data Analyst Intern',
        StartDate: 'September 2022',
        EndDate: 'July 2023',
        Description: [
            "Developed proficiency in SSRS report and dashboard creation, building foundational skills in data visualization and automated reporting systems that supported department-wide efficiency improvements",
            "Designed and automated monthly SSRS reports for 9 major hospital clients, providing enhanced visibility into quality metrics that directly supported the acquisition of 4 additional hospital contracts ",
            "Transformed manual daily reporting processes through automation, reducing processing time from 60 minutes to under 1 minute daily—a 98% time savings that freed up 20+ hours monthly for strategic analysis"
        ]
    },
    {
        Company: 'Jacobs School of Music',
        Title: 'Audio Engineer',
        StartDate: 'August 2019',
        EndDate: 'May 2023',
        Description: [
            "Engineered and edited over 400 hours of live concert recordings across diverse genres, delivering professional-grade audio for faculty, student ensembles, and archival use while consistently meeting tight production deadlines",
            "Led technical setup and execution for high-profile performances, managing mic placement, live mixing, and multi-track recording logistics for ensembles of up to 50 performers in acoustically varied venues ",
            "Supervised and mentored a team of 3 junior engineers during complex live sessions, providing hands-on training in audio signal flow, session planning, and editing best practices to ensure broadcast-level quality",
            "Troubleshoot and resolve technical issues in high-pressure live recording environments, ensuring uninterrupted, error-free archival audio delivery"
        ]
    }

];