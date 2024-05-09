import CategoriesCreateForm from "./categories-create-form";

export default async function page() {
  return (
    <>
      <h1 className="text-2xl">Crear una categoria</h1>
      <CategoriesCreateForm />
    </>
  );
}
