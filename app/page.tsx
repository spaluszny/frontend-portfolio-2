'use client'

import { ChevronsDown } from "lucide-react";
import { posts } from "#site/content"
import { PostItem } from "@/Components/postFeatured";
import { Tag } from "@/Components/tags";
import PostOther from "@/Components/postOther";
import Link from "next/link";

export default function Home() {
  const featuredPosts = posts.filter(post => post.type === 'feature');
  const otherPosts = posts.filter(post => post.type === 'other');

  const heroTags = ['React', 'TypeScript', 'REST APIs', 'Figma']

  const scrollToTarget = () => {
    const targetElement = document.getElementById('projects');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' }); // 'smooth' for animated scroll
    }
  }


  return (
    <div className="max-w-screen-xl mx-auto pb-30 p-5">

      {/* HERO */}
      <div className="h-screen flex justify-center flex-col gap-2 md:gap-20 max-w-screen-xl relative mx-auto">

          <div className="flex flex-col gap-1 lg:pt-20">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-nowrap z-5">SARAH PALUSZNY</h1>
            <p className="text-2xl font-sans md:text-3xl lg:text-5xl font-light text-nowrap">Frontend Developer</p>
          </div>

          <div className="flex flex-col md:items-end items-start gap-2">
            <hr className="w-10 border-1 mt-2"></hr>
            <p className="md:w-101 w-75 pt-2 lg:text-right text-sm  lg:text-base">Frontend developer focusing on creative design and intuitive user experience. Building thoughtful digital experiences with modern web technologies.</p>
            <p className="font-bold">Based in New York, NY</p>
            <div className="flex flex-row flex-wrap gap-2 mt-2">
              {heroTags.map((tag) => (
                <Tag tag={tag} key={tag} />
              ))}
            </div>
          </div>

        <ChevronsDown
          onClick={scrollToTarget}
          className="text-black dark:text-white h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12  absolute bottom-10 left-1/2 transform -translate-x-1/2 z-0 cursor-pointer" />

      </div>

      <div className="mx-auto" id='projects'>
        <div className="flex flex-col items-center">
          <h1 className="font-sans text-4xl md:text-5xl lg:text-7xl font-bold text-center" >PORTFOLIO</h1>
          <hr className="my-5 h-0.5 w-1/2 bg-black"></hr>
          <h2 className="text-2xl pb-10 tracking-widest font-light">FEATURED PROJECTS</h2>
        </div>

        {featuredPosts?.length > 0 ? (
          <div className="flex flex-row flex-wrap gap-10 justify-evenly">
            {featuredPosts.map((post, index) => {
              const { slug, title, description, picture, alt, tags, readMore, github, website } = post;
              return (
                <PostItem
                  slug={slug}
                  title={title}
                  description={description}
                  picture={picture}
                  alt={alt}
                  key={slug}
                  index={index}
                  tags={tags}
                  readMore={readMore}
                  github={github}
                  website={website}
                />
              )
            })}
          </div>
        ) : (
          <p>No featured projects to show</p>
        )}
      </div>

      <div className="bg-[rgba(214,211,206,0.2)] dark:bg-[#1e293b] rounded-lg mt-16 p-5 max-w-screen-xl mx-auto">
        <h2 className="text-2xl font-sans font-light text-center py-10">
          OTHER NOTEWORTHY PROJECTS
        </h2>

        {otherPosts?.length > 0 ? (
          <div className="flex flex-col lg:flex-row pb-10 justify-center lg:items-start items-center gap-10 lg:gap-5">
            {otherPosts.map((post) => {
              const { slug, title, description, tags, tools, readMore, website, github, published } = post;
              return (
                <PostOther
                  slug={slug}
                  title={title}
                  description={description}
                  key={slug}
                  tags={tags}
                  tools={tools}
                  readMore={readMore}
                  website={website}
                  github={github}
                  published={published}
                />
              );
            })}
          </div>
        ) : (
          <p className="text-center pb-10">No other projects to show</p>
        )}
      </div>

      <div className="text-right pt-10">
        <Link href="/archive" className="hover:opacity-70 transition-all duration-150 font-sans group md:text-2xl font-light pr-10">
          VIEW PROJECT ARCHIVE <span className="group-hover:translate-x-1 inline-block transition-transform duration-150 pb-5">→</span>
        </Link>
      </div>

    </div>
  );
}
