import { useRouter } from "next/router"

export default function Review(){
    const router = useRouter();
    const {productid, reviewid} = router.query;
    return(
        <h2>product {productid}, review {reviewid}</h2>
    )
}