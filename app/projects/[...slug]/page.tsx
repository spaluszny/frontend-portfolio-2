import { posts } from "#site/content";
import { notFound  } from "next/navigation";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";



interface PostPageProps{
    params: {
        slug: string [];
    };
}

export async function getPostFromParams(params: PostPageProps["params"]){
    const slug = params?.slug?.join('/')
    const post = posts.find((post) => post.slugAsParams === slug)
    return post;
}

export async function generateStaticParams(): Promise<PostPageProps["params"][]>{
    return posts.map(post => ({slug: post.slugAsParams.split("/")}))
}

export default async function PostPage({params}: PostPageProps){

    const post  = await getPostFromParams(params)
    if (!post || !post.published){
        notFound();
    }

    return(
        <article className="max-w-3xl mx-auto pb-20 pt-40 pr-8 pl-8"> 
       <Link href={'/#projects'}><FaArrowLeft className="h-6 w-6 absolute top-15 hover:opacity-60" /></Link> 
        
        <Image
                            src={post.picture}
                            alt={post.alt}
                            width={700}
                            height={600}
                            className="w-full h-auto object-cover border-2 border-black dark:border-white" />

        <h3 className="font-serif text-2xl md:text-4xl pt-10 underline underline-offset-4">{post.title} </h3>
        <p className="font-sans pt-5 pb-5">BY SARAH PALUSZNY</p>
        <hr></hr>
        <p className="pt-5 font-serif text-lg">{post.description}</p>
        
        </article>
    )
}