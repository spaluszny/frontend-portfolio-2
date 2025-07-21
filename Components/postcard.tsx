import Link from "next/link"
import Image from "next/image"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function PostCard(props: { post: any }) {
    const { post } = props
    return (
        <div>
            <div className=""> <Image src={post.pictureTop} alt={post.alt} width={400} height={300} /></div>
            <Link href={''}>
                <div className="w-lg  p-5">


                    <h2 className="text-2xl font-serif font-bold underline underline-offset-2 pb-8">{post.title}</h2>
                    <hr className="w-30 h-0.5 bg-black"></hr>
                    <p className="pt-4">{post.tools}</p>
                    <p className="font-bold pt-4">{post.description}</p>

                </div>
            </Link>
            <div className=""> <Image src={post.pictureBottom} alt={post.alt} width={400} height={300} /></div>
            
            </div>
    )
}