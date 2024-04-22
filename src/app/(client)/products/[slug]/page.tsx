import { getProduct } from "@/lib/fetch/products";
import ProductPage from "./page.client";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function ServerPage({params}:{params:any}) {
    
    const product=await getProduct(params.slug)
    const session=await getServerSession(authOptions)

    if (!product?.id)  return <>Product not found</>

    return(
        <ProductPage token={session.user.accessToken} product={product} id={+params.slug}/>
    )
}