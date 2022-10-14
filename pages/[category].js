import { useRouter } from "next/router";

const categoryDetail = () => {
    const categoryId = router.query.caregoryId;
    return (
        <div>
            <h1>{categoryId}</h1>
        </div>
    )
}

export default categoryDetail