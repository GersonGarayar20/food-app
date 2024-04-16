import { useEffect, useState } from "react"

export function useNotifications() {

    const [notifications,setNoitifications]=useState(()=>localStorage.getItem('food-app')?JSON.parse(localStorage.getItem('food-app')).state.cart.length:0)
    const [trigger,setTrigger]=useState(()=>Math.random())

    useEffect(()=>{
        setNoitifications(JSON.parse(localStorage.getItem('food-app')).state.cart.length)
      },[trigger])

      return {notifications,setTrigger}
}