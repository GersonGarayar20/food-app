<<<<<<< HEAD
"use client";
import { Button } from "@/components/ui/button";
import useStore from "@/store/useStore";
import { useCartStore, CartStore } from "@/store/cart";
import { Heart, Home, Settings } from "lucide-react";
import Link from "next/link";
import ArrowBack from "@/components/icons/ArrowBack";
import { XIcon, PlusIcon, MinusIcon } from "lucide-react";
import styles from "./order.module.css";
import NavbarClient from "../components/NavbarClient";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { url } from "inspector";
import { getPagePayment } from "@/lib/fetch/payment";
export default function OrderPage() {
  
  const stateCart = useStore<CartStore, CartStore>(useCartStore, (state: any) => state);
  const [urlPayment, setUrlPayment] = useState("")
  
  const getLinkPay = async () => {
    if (stateCart?.cart.length! > 0) {
      const json = await getPagePayment(stateCart?.cart)
      setUrlPayment(json.url)
    }
  }
=======
import { getServerSession } from "next-auth";
import OrderPage from "./page.client";
import { authOptions } from "@/lib/auth";
>>>>>>> dev

export default async function OrderServer() {

    const session=await getServerSession(authOptions)

    return(
        <OrderPage session={session}/>
    )
}