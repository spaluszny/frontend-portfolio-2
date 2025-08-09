import { Post } from '#site/content'
import { slug } from 'github-slugger';

export function sortPosts(posts: Array<Post>) {
  return posts.sort((a, b) => {
    if (a.date > b.date) return -1;
    if (a.date < b.date) return 1;
    return 0
  })
}

export function getAllTags(posts: Array<Post>) {
  const tags: Record<string, number> = {}
  posts.forEach(post => {
    post.tags?.forEach(tag => {
      tags[tag] = (tags[tag] ?? 0) + 1
    })
  })
  return tags;
}

export function sortTagsByCount(tags: Record<string, number>) {
  return Object.keys(tags).sort((a, b) => tags[b] - tags[a])
}

export function getPostsByTagSlug(posts: Array<Post>, tag: string) {
  return posts.filter(post => {
    if (!post.tags) return false
    const slugifiedTags = post.tags.map(tag => slug(tag))
    return (
      slugifiedTags.includes(tag)
    )
  })
}


export interface Experience {
  Company: string;
  Title: string;
  StartDate: string;
  EndDate: string;
  Description: string[];
  Tags?: string[];
}


export const ExperienceData: Experience[] = [
  {
    Company: 'Radiology of Indiana',
    Title: 'Data Analyst',
    StartDate: 'July 2023',
    EndDate: 'Present',
    Description: [
      "Spearheaded the formation of the data analytics team and implemented a standardized request system, while centralizing 20+ reports previously scattered across multiple departments",
      "Automated recurring quality and performance reports using SQL and SSRS, cutting manual processing time by 60% while eliminating formatting errors and improving consistency across 10 hospital clients",
      "Collaborated with clinical and executive stakeholders to design tailored reporting views and filters, increasing dashboard adoption rates and enabling proactive, data-informed decision-making ",
      "Created technical documentation and standardized templates for analytics workflows, reducing report creation time and cutting internal support requests by over 50%",
      "Streamline SSRS report automation, minimizing errors and boosting report reliability while supporting increased volume without added overhead"
    ],
    Tags: ['SQL', 'SSRS', 'Excel', 'SSMS'],
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
    ],
    Tags: ['SQL', 'SSRS', 'Excel', 'SSMS'],
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



export interface TagConfig {
  name: string;
  category: TagCategory;
}

export type TagCategory =
  | 'programming'
  | 'frameworks'
  | 'data'
  | 'design'
  | 'tools';

// config/tags.ts

export const TAG_CATEGORIES: Record<TagCategory, { label: string; colors: string }> = {
  programming: {
    label: 'Programming',
    colors: 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-500/20 dark:text-blue-200 dark:border-blue-400/30'
  },
  frameworks: {
    label: 'Frameworks & Libraries',
    colors: 'bg-green-100 text-green-800 border-green-200 dark:bg-emerald-500/20 dark:text-emerald-200 dark:border-emerald-400/30'
  },
  data: {
    label: 'Data & Analytics',
    colors: 'bg-purple-100 text-purple-800 border-purple-200 dark:bg-violet-500/20 dark:text-violet-200 dark:border-violet-400/30'
  },
  design: {
    label: 'Design & Prototyping',
    colors: 'bg-pink-100 text-pink-800 border-pink-200 dark:bg-rose-500/20 dark:text-rose-200 dark:border-rose-400/30'
  },
  tools: {
    label: 'Tools & Workflow',
    colors: 'bg-orange-100 text-orange-800 border-orange-200 dark:bg-amber-500/20 dark:text-amber-200 dark:border-amber-400/30'
  }
};

export const TAGS: TagConfig[] = [
  // Programming
  { name: 'HTML', category: 'programming' },
  { name: 'MDX', category: 'programming' },
  { name: 'CSS', category: 'programming' },
  { name: 'JavaScript', category: 'programming' },
  { name: 'TypeScript', category: 'programming' },
  { name: 'Python', category: 'programming' },

  // Frameworks & Libraries
  { name: 'React', category: 'frameworks' },
  { name: 'Next.js', category: 'frameworks' },
  { name: 'Tailwind', category: 'frameworks' },
  { name: 'Node.js', category: 'frameworks' },

  // Data & Analytics
  { name: 'SQL', category: 'data' },
  { name: 'SSMS', category: 'data' },
  { name: 'SSRS', category: 'data' },
  { name: 'Excel', category: 'data' },
  { name: 'REST APIs', category: 'data' },
  { name: 'JSON', category: 'data' },

  // Design & Prototyping
  { name: 'Figma', category: 'design' },
  { name: 'Framer', category: 'design' },
  { name: 'Photoshop', category: 'design' },
  { name: 'InDesign', category: 'design' },
  { name: 'After Effects', category: 'design' },
  { name: 'Canva', category: 'design' },

  // Tools & Workflow
  { name: 'Git', category: 'tools' },
  { name: 'GitHub', category: 'tools' },
  { name: 'Agile/Scrum', category: 'tools' },
  { name: 'VS Code', category: 'tools' }
];