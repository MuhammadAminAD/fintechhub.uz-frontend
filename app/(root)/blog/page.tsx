import BlogCard from '@/components/BlogCard'
import { Styles } from '@/styles/styles'

export default function BlogPage() {
    const bigCardsL = [0, 14, 28, 28 + 14, 28 + 28]
    const bigCardsR = [9, 23, 37, 37 + 14, 37 + 28]
    return (
        <div className={`${Styles.container}`}>
            <h1 className='text-xl md:text-3xl font-bold mb-10'>Yangiliklar</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8'>
                {Array(50).fill(null).map((_, index) =>
                    <div key={index} className={`${bigCardsL.includes(index) ? "lg:col-start-1 lg:col-end-3" : bigCardsR.includes(index) ? "lg:col-start-3 lg:col-end-5" : ""}`}>
                        <BlogCard isBig={bigCardsL.includes(index) || bigCardsR.includes(index)} />
                    </div>
                )}
            </div>
        </div>
    )
}
