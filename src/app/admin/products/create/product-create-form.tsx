"use client";

import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createProduct } from "@/lib/fetch/products";
import { CategoryI } from "@/types";
import { toast } from "sonner";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";

const formSchema = z.object({
  name: z.string(),
  image: z.string(),
  price: z.coerce.number().positive(),
  category_id: z.coerce.number().positive(),
});

export default function ProductCreateForm({
  categories,
  token,
}: {
  categories: CategoryI[];
  token: string;
}) {
  const [image, setImage] = useState<any>(null);

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target == null) return;
    if (e.target.files == null) return;
    setImage(e?.target?.files[0]);
  };

  async function handleSubmit(e: any) {
    e.preventDefault();

    const fileInput = e.target.elements.file;
    const file = fileInput.files[0];
    const name = e.target.name.value;
    const price = +e.target.price.value;
    const description = e.target.description.value;
    const ingredients = e.target.ingredients.value;
    const category = +e.target.category.value;

    const formData = new FormData();
    formData.append("name", name);
    formData.append("file", file);
    formData.append("price", price.toString());
    formData.append("description", description);
    formData.append("ingredientes", ingredients);
    formData.append("category_id", category.toString());

    await createProduct(formData, token);
    e.target.reset();
    toast("Producto creado.");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      <div>
        <Label htmlFor="name">Nombre</Label>
        <Input id="name" name="name" type="text" required={true} />
      </div>
      <div>
        <Label htmlFor="price">Price</Label>
        <Input id="price" name="price" type="number" min={0} required={true} />
      </div>
      <div>
        <Label htmlFor="description">Description</Label>
        <Input id="description" name="description" />
      </div>
      <div>
        <Label htmlFor="ingredients">Ingredientes</Label>
        <Input id="ingredients" name="ingredients" />
      </div>
      <div className="flex flex-col gap-1">
        <Label htmlFor="category">Categoria</Label>
        <select
          name="category"
          id="category"
          defaultValue={0}
          className="w-72 px-2 py-1"
          required={true}
        >
          <option value={0}>Seleccione una categoria</option>
          {categories.map((category, i) => (
            <option key={i} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <Label htmlFor="file">Imagen</Label>
        <Input
          type="file"
          id="file"
          name="file"
          required={true}
          onChange={handleImage}
        />
      </div>
      <div>
        {image && <img src={URL.createObjectURL(image)} className="w-52" />}
      </div>

      <Button className="w-full" type="submit">
        Crear Prodcuto
      </Button>
    </form>
  );
}
