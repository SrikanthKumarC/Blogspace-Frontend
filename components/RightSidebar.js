import Link from "next/link"

const Sidebar = () => {
    return (
        <>
            <Link href={'/post'}><button>Write a full featured post</button></Link>
        </>
    )
}

export default Sidebar