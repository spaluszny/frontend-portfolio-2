import * as cheerio from 'cheerio'
import ProgressBar from './progressBar'
import ToolTip from './toolTip'

export default async function CurrentGoodReads() {

    const url = process.env.GOODREADS_URL

    const res = await fetch(url!)
    const html = await res.text()
    const $ = cheerio.load(html)

    const books = $('.Updates').map((i, element) => {
        const progressText = $(element).find('a.greyText.smallText').text()
        console.log(progressText)

        let percent = 0

        if (progressText.includes('page')) {
            const match = progressText.match(/page\s+(\d+)\s+of\s+(\d+)/)
            const currentPage = match ? Number(match[1]) : 0
            const totalPages = match ? Number(match[2]) : 0
            percent = totalPages > 0 ? Math.round((currentPage / totalPages) * 100) : 0
        } else {
            const percentMatch = progressText.match(/(\d+)%/)
            percent = percentMatch ? Number(percentMatch[1]) : 0
        }

        return {
            title: $(element).find('.bookTitle').text().trim(),
            author: $(element).find('.authorName').text().trim(),
            img: $(element).find('img').attr('src') ?? '',
            percent
        }
    }).get()

    return (
        <>
            

            <div className='block w-full lg:hidden'>
                {books.slice(1).map((book, key) => (
                    <p key={key}><span className='font-bold uppercase'> Currently Reading:</span> {book.title} by {book.author}</p>
                ))}
            </div>

            <p className='w-full font-bold uppercase hidden lg:block'>Currently Reading:</p>

            <div className='hidden lg:block bg-[rgba(214,211,206,0.2)] dark:bg-[#1e293b] w-full px-10 py-2 relative rounded-lg mt-2'>
                
                <ToolTip text='This data is from the currently reading section in GoodReads' />

                <div className='flex flex-col gap-5'>
                    {books.slice(1).map((book, key) => (
                        <div key={key} className='flex items-center'>
                            <img src={book.img} alt={book.title} className='h-25 rounded-xs'></img>
                            <div className='p-5 grow'>
                                <p className='font-semibold'>{book.title}</p>
                                <p>{book.author}</p>
                                <div className='flex items-center gap-2'>

                                    <ProgressBar bgcolor="#7992DD" percent={book.percent} />
                                    <p>{book.percent}%</p>
                                </div>
                            </div>

                        </div>
                    ))}</div>
            </div>
        </>
    )
}


//id currentlyReadingReview
// a tag class bookTitle
// a tag class authorName
// img alt and src