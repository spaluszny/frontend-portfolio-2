import { posts } from "#site/content";
import { notFound } from "next/navigation";
import Image from "next/image";

import { MDXContent } from "@/Components/mdx-component";
import { Tag } from "@/Components/tags";
import BackButton from "@/Components/backButton";

interface PostPageProps {
  params: Promise<{
    slug: string[];
  }>;
}

export async function generateStaticParams(): Promise<{ slug: string[] }[]> {
  return posts.map(post => ({ slug: post.slugAsParams.split("/") }))
}


async function getPostFromParams(params: { slug: string[] }) {
  const slug = params?.slug?.join('/')
  const post = posts.find((post) => post.slugAsParams === slug)
  return post;
}

export default async function PostPage({ params }: PostPageProps) {
  const resolvedParams = await params;
  const post = await getPostFromParams(resolvedParams)
  
  if (!post || !post.published) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto pb-20 pt-40 pr-8 pl-8">
      <BackButton />
      <Image
        src={post.picture}
        alt={post.alt}
        width={700}
        height={600}
        className="w-full h-auto object-cover border-2 border-black dark:border-white"
        priority={true} 
      />
      <h3 className="font-serif text-2xl md:text-4xl pt-10">{post.title}</h3>
      <p className="font-sans pt-5 pb-5">BY SARAH PALUSZNY</p>
      <hr></hr>
      <div className='pt-10'>
        <MDXContent code={post.body} />
      </div>
      <div className="flex flex-wrap gap-2 pt-10">
        {post.tags?.map(tag => <Tag tag={tag} key={tag} />)}
      </div>
    </article>
  )
}