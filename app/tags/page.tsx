import { getAllTags, sortTagsByCount } from "@/lib/data"
import { Metadata } from "next"
import { posts } from "#site/content"
import { Tag } from "@/Components/tags"



export const metadata: Metadata = {
    title: 'Tags',
    description: "Projects I'v made using these tags"
}

export default async function TagsPage() {
    const tags = getAllTags(posts)
    const sortedTags = sortTagsByCount(tags)

    return (
        
        <div className="max-w-lg mx-auto ">
            <h1 className="font-sans font-bold text-center text-5xl pt-40">TAGS</h1>
            <hr className="h-0.5 m-5"></hr>
            <div className="flex flex-wrap gap-2">
                {sortedTags?.map(tag => <Tag tag={tag} key={tag} count={tags[tag]} />)}
            </div>
        </div>

    
    )

}