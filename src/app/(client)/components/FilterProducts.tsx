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
import { Filter } from "lucide-react"
import { Slider } from "@/components/ui/slider"
import { ChangeEvent, useState } from "react"
import { useFilterStore } from "@/app/global/filter"
import { formFilterSchema } from "@/dto/FormFilter"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { SearchForm } from "./ProductForm"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"




export function FilterProducts() {

  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(500);
  const [open, setOpen] = useState(false);
  const { setFilters } = useFilterStore()


  const handleMinInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMinPrice(Number(e.target.value));
  };

  const handleMaxInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(Number(e.target.value));
  };
  const handleSliderChange = (newValues: number[]) => {
    setMaxPrice(newValues[1]);
  };

  const handleFilterClick = () => {
    setFilters({ minPrice, maxPrice });
    setOpen(false)
  };


  const form = useForm<z.infer<typeof formFilterSchema>>({
    resolver: zodResolver(formFilterSchema),
    defaultValues: {
      word: "",
    },
  })


  function onSubmit(data: z.infer<typeof formFilterSchema>) {
    setFilters({word:data.word})
  }




  return (
    <div className="flex gap-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
          <FormField
            control={form.control}
            name="word"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </form>
      </Form>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button>
            Filter <Filter className="ml-2"></Filter>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">

          <DialogHeader>
            <DialogTitle>Precio:</DialogTitle>
          </DialogHeader>
          <Slider
            defaultValue={[minPrice, maxPrice]}
            onValueChange={handleSliderChange}
            max={500}
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
  )
}
