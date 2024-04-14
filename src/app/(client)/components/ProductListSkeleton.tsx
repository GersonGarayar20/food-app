"use client"
/* eslint-disable @next/next/no-img-element */

function ProductSkeleton() {
    return (
        <article className=" rounded-md flex flex-col gap-1">
            <img
                className="aspect-[3/2] object-cover rounded-3xl bg-slate-300"
                src={""}
                alt={""}
            />
            <h4 className="h-4 w-full bg-slate-300 rounded-3xl"></h4>
            <p className="h-4 w-2/5 bg-slate-300 rounded-3xl"></p>
        </article>
    );
}


export function ProductListSkeleton() {
    const listTest =[1,2,3,4]
    return (
        <div className="grid grid-cols-2 gap-4 ">
         { listTest.map((item,index)=>( <ProductSkeleton key={index}/>))}
        </div>
    );
}




