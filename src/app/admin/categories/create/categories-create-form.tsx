"use client";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createCategory } from "@/lib/fetch/categories";
import { Label } from "@radix-ui/react-label";
import { toast } from "sonner";
import { useState } from "react";

const formSchema = z.object({
  name: z.string(),
  image: z.string(),
});

export default function CategoriesCreateForm({ token }: { token: string }) {
  const [image, setImage] = useState<any>(null);
  const [errors, setErrors] = useState({ name: "", image: "" });

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

    const formData = new FormData();
    formData.append("name", name);
    formData.append("file", file);

    await createCategory(formData, token);
    e.target.reset();
    toast("Categoria creada");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      {errors.name && <p>Este campo es requerido</p>}
      <div>
        <Label htmlFor="name">Nombre</Label>
        <Input
          id="name"
          name="name"
          type="text"
          required={true}
          onBlur={(e) =>
            setErrors((prev) => ({ ...prev, [e.target.name]: "sdas" }))
          }
        />
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
      <div className="border-[1px] w-3/12 ">
        {image && (
          <img src={URL.createObjectURL(image)} alt="" className="w-40" />
        )}
      </div>
      <Button className="w-full" type="submit">
        Crear Categoria
      </Button>
    </form>
  );
}
