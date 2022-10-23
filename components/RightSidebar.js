import Link from "next/link"

const Sidebar = () => {
    return (
        <>
            <Link href={'/post'}><button className="w-full my-2 sm:m-0 py-2 rounded-sm bg-slate-300 capitalize ">Write more</button></Link>
        </>
    )
}

export default Sidebar