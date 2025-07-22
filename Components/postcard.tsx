import Link from "next/link"
import Image from "next/image"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function PostCard(props: { post: any }) {
    const { post } = props
    return (
        <div className="font-serif">
            {post.pictureTop && (

                <div className="border-2 border-black overflow-hidden transition-all duration-300 grayscale-0 hover:grayscale w-100">
                    <Image
                        src={post.pictureTop}
                        alt={post.alt}
                        width={400}
                        height={400}
                        className="w-full h-auto object-cover"
                    />
                </div>
            )}

            <Link href={''}>
                <div className="w-lg  p-5 hover:opacity-60">

                    <h3 className="text-2xl font-serif font-bold underline underline-offset-2 pb-8">{post.title}</h3>
                    <hr className="w-30 h-0.5 bg-black"></hr>
                    <p className="pt-4">{post.tools}</p>
                    <p className="font-bold pt-4">{post.description}</p>

                </div>
            </Link>
            {post.pictureBottom && (
                <div className="border-2 border-black overflow-hidden transition-all duration-300 grayscale-0 hover:grayscale w-100">
                    <Image
                        src={post.pictureBottom}
                        alt={post.alt}
                        width={400}
                        height={300}
                        className="w-full h-auto object-cover" />
                </div>
            )}


        </div>
    )
}