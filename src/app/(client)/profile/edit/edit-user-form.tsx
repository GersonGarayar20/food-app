"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { updateUser } from "@/lib/fetch/users";

export function EditUserForm({
  user,
  userId,
  token,
}: {
  user: any;
  userId: string;
  token: string;
}) {
  async function handleSubmit(e: any) {
    e.preventDefault();

    const fileInput = e.target.elements.file; // Acceder al input de tipo file
    const file = fileInput.files[0];
    const name = e.target.name.value;

    const formData = new FormData();

    if (file) {
      formData.append("file", file);
    } else {
      formData.append("file", user.image);
    }
    formData.append("name", name);

    const res = await updateUser(userId, token, formData);
    console.log(res);
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        <div className="aspect-square size-32 mx-auto">
          <img
            src={
              user?.image
                ? user.image
                : "https://randomuser.me/api/portraits/men/62.jpg"
            }
            className="rounded-full w-full h-full object-contain m-auto border-[1px] border-slate-300 mb-4"
            alt="foto de perfil"
          />
        </div>

        <div>
          <Label htmlFor="file">Imagen</Label>
          <Input type="file" id="file" name="file" />
        </div>

        <div>
          <Label htmlFor="name">Nombre</Label>
          <Input id="name" name="name" defaultValue={user.name} />
        </div>

        <Button className="w-full" type="submit">
          Guardar Cambios
        </Button>
      </form>
    </>
  );
}
