import { useRouter } from 'next/router'
import Nav from '../../components/Nav'
import Main from '../../components/Main'
const Categories = () => {
    const router = useRouter()
    const {categories} = router.query
    return (
        <>
            <Nav />
            <div className='p-4 text-xl font-semibold'>
                <h2>Category: {categories}</h2>
            </div>
            <Main editor={false} category={categories}/>
        </>
    )
}

export default Categories