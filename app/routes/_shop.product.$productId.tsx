import { useParams } from "@remix-run/react";

export default function ProductItemPage() {
  const { productId } = useParams(); // Отримуємо динамічний параметр productId
  // const product = useLoaderData<typeof loader>(); // Отримуємо дані з loader (якщо є)

  return (
    <div>
      <h1>Product ID: {productId}</h1>
      {productId && (
        <div>
          <h2>{productId}</h2>
        </div>
      )}
    </div>
  );
}