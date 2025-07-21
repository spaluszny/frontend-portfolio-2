import fs from 'fs'
import matter from 'gray-matter'


export default function getPostMetadata(basePath: string){
    const folder = basePath + '/'
    const files = fs.readdirSync(folder)
    const markdownPosts = files.filter(file => file.endsWith('.md'))

    //get the file data
    const posts = markdownPosts.map((filename) =>{
        const fileContents = fs.readFileSync(`${basePath}/${filename}`, 'utf-8')
        const matterResult = matter(fileContents)
        return {
            title: matterResult.data.title,
            tools: matterResult.data.tools,
            description: matterResult.data.description,
            pictureTop: matterResult.data.pictureTop,
            pictureBottom: matterResult.data.pictureBottom,
            alt: matterResult.data.alt,
            slug: filename.replace('.md', '')
        }
    })

    return posts
}