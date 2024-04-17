"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CircleX, Divide, Filter } from "lucide-react"
import { Slider } from "@/components/ui/slider"
import { ChangeEvent, useRef, useState } from "react"
import { useFilterStore } from "@/app/global/filter"
import { formFilterSchema } from "@/dto/FormFilter"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Badge } from "@/components/ui/badge"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

const InitialPriceState ={
minPrice:0,
maxPrice:100
}


export function FilterProducts() {

  const [minPrice, setMinPrice] = useState<number>(InitialPriceState.minPrice);
  const [maxPrice, setMaxPrice] = useState<number>(InitialPriceState.maxPrice);
  const [open, setOpen] = useState(false);
  const { category_id, setFilters } = useFilterStore()

  const closeRef = useRef(null)

  const handleMinInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMinPrice(Number(e.target.value));
  };

  const handleMaxInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(Number(e.target.value));
  };
  const handleSliderChange = (newValues: number[]) => {
    setMinPrice(newValues[0]);
    setMaxPrice(newValues[1]);
  };

  const handleFilterClick = () => {
    setFilters({ minPrice, maxPrice });
    setOpen(false)
    handleShowClick()
  };


  const form = useForm<z.infer<typeof formFilterSchema>>({
    resolver: zodResolver(formFilterSchema),
    defaultValues: {
      word: "",
    },
  })


  function onSubmit(data: z.infer<typeof formFilterSchema>) {
    setFilters({ word: data.word })
  }

  const handleCloseClick = () => {
    closeRef!.current!.classList.add("hidden")
    setMaxPrice(InitialPriceState.maxPrice)
    setFilters({ minPrice, maxPrice:InitialPriceState.maxPrice });
  }

  const handleShowClick = () => closeRef!.current!.classList.remove("hidden")



  return (

    <div className="w-full h-auto">
      <div className="flex  gap-4 w-full">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className=" w-full">
            <FormField
              control={form.control}
              name="word"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="buscar.." {...field} className="" />
                  </FormControl>
                </FormItem>
              )}
            />
          </form>
        </Form>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button>
              <Filter className=""></Filter>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">

            <DialogHeader>
              <DialogTitle>Precio:</DialogTitle>
            </DialogHeader>
            <Slider
              defaultValue={[minPrice, maxPrice]}
              onValueChange={handleSliderChange}
              max={100}
            />

            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-5 gap-5">
                <div className="col-span-2 flex items-center">
                  <Input
                    id="Min"
                    value={minPrice.toString()}
                    onChange={handleMinInputChange}
                  />
                </div>
                <div className="flex items-center justify-center col-span-1">
                  <span className="text-center">-</span>
                </div>
                <div className="col-span-2 flex items-center">
                  <Input
                    id="Max"
                    value={maxPrice.toString()}
                    onChange={handleMaxInputChange}
                  />
                </div>
              </div>
            </div>

            <DialogFooter>
              <Button type="button" onClick={handleFilterClick}>
                Filtrar
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="text-center" ref={closeRef}>
        <Badge variant="outline" className="my-2 ">
          <span className="mr-4">{minPrice + " - " + maxPrice}</span>
          <CircleX className="w-4 text-red-500" onClick={handleCloseClick} />
        </Badge>
      </div>
    </div>
  )
}
