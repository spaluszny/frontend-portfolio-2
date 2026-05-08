import { posts } from "#site/content";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { parseISO, format } from 'date-fns';

import { MDXContent } from "@/Components/mdx-component";
import { Tag } from "@/Components/tags";
import BackButton from "@/Components/backButton";
import { Icons } from "@/Components/icons";
import { FaUpRightFromSquare } from "react-icons/fa6";
import AnimatedArticle from "@/Components/animateArticle";
import FadeUp from "@/Components/fadeUp";
import "@/styles/mdx.css";


interface PostPageProps {
  params: Promise<{
    slug: string[];
  }>;
}

export async function generateStaticParams(): Promise<{ slug: string[] }[]> {
  return posts.filter(post => post.readMore).map(post => ({ slug: post.slugAsParams.split("/") }));
}


async function getPostFromParams(params: { slug: string[] }) {
  const slug = params?.slug?.join('/')
  const post = posts.find((post) => post.readMore && post.slugAsParams === slug)
  return post;
}

export default async function PostPage({ params }: PostPageProps) {
  const resolvedParams = await params;
  const post = await getPostFromParams(resolvedParams)


  if (!post || !post.published) {
    notFound();
  }
  const date = parseISO(post.date)
  const dateFormat = format(date, 'MMMM dd, yyyy')

  return (

    <article className="max-w-5xl mx-auto pb-20 pt-25 sm:pt-50 pr-8 pl-8">
      <BackButton />
      <AnimatedArticle>
        <FadeUp>
          <div className="flex flex-col gap-7">
            <h4 className="text-center uppercase">{dateFormat}</h4>
            <h1 className="text-center">{post.title}</h1>
            <h4 className="text-center italic">{post.description}</h4>
            <div className="flex justify-center items-center gap-4">
              {post.github && (
                <Link href={post.github} target="_blank"><Icons.gitHub className="h-6 transform transition duration-300 hover:scale-110" /></Link>
              )}
              <p>|</p><p>Sarah Paluszny</p>
            </div>

          </div>
        </FadeUp>

        <div className='pt-10 markdown max-w-3xl mx-auto'>
          <FadeUp>
            <Link href={post.website} target="_blank"> <Image
              src={post.picture}
              alt={post.alt}
              width={700}
              height={600}
              className="w-full h-auto object-cover border-2 border-black dark:border-white grayscale dark:grayscale-0 hover:grayscale-0 dark:hover:grayscale mb-10 transition-all duration-400"
              priority={true}
            /></Link>
          </FadeUp>
          {/* <div className="flex flex-row justify-between items-baseline">

          <div className="flex flex-row gap-5">
            <Link href={post.website} target="_blank" className="transform transition duration-150 hover:scale-110"><FaUpRightFromSquare className="h-5" /></Link>
            {post.github && (<Link href={post.github} target="_blank" className="transform transition duration-150 hover:scale-110"><Icons.gitHub className="h-5" /></Link>)}
          </div>


        </div> */}
          <FadeUp>

            <MDXContent code={post.body}/>
          </FadeUp>
          <FadeUp>
            <div className="flex flex-wrap gap-2 pt-10">
              {post.tags?.map(tag => <Tag tag={tag} key={tag} />)}
            </div>
          </FadeUp>
        </div>
      </AnimatedArticle >
    </article>

  )
}