import { useLoaderData, useNavigate } from "react-router-dom";

export async function productLoader({ params, request }) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`, {
    signal: request.signal,
  });
  if (!res.ok) {
    throw new Response("Failed to load product", { status: res.status });
  }

  // الـ API بيرجّع 200 بجسم فاضي لو الـ id مش موجود
  const text = await res.text();
  if (!text) {
    throw new Response("Product not found", { status: 404 });
  }
  return JSON.parse(text);
}

export default function ProductDetail() {
  const product = useLoaderData();
  const navigate = useNavigate();

  return (
    <article className="detail">
      <button className="btn" onClick={() => navigate(-1)}>← رجوع</button>

      <div className="detail-body">
        <img src={product.image} alt={product.title} />
        <div>
          <h1>{product.title}</h1>
          <p className="muted">{product.category}</p>
          <p className="price">${product.price}</p>
          <p>{product.description}</p>
          {product.rating && (
            <p className="muted">
              ★ {product.rating.rate} ({product.rating.count} reviews)
            </p>
          )}
        </div>
      </div>
    </article>
  );
}