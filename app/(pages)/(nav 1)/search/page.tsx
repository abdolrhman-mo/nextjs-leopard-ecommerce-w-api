'use client'

import { fetchProductsAPI } from "@/app/lib/services/products/productService"
import ProductsList from "@/app/ui/products/products-list"
import Search from "@/app/ui/search/search"

export default async function Page({
    searchParams,
}: {
    searchParams?: {
        query?: string
        page?: string
    }
}) {
    const query = searchParams?.query || ''
    const currentPage = Number(searchParams?.page) || 1

    // try {   
    //     document.querySelector('nav').click()
    // } catch (error) {
    //     console.log('fuckumean')
    // }
    const products = await fetchProductsAPI()

    return (
        <>
            <div className="w-5/6 mx-auto pt-14">
                <Search placeholder="Search our store" />

                <ProductsList
                    products={products}
                    styles="py-12"
                    limit={8}
                    search={true}
                    query={query}
                    currentPage={currentPage}
                />
            </div>
        </>
    )
}