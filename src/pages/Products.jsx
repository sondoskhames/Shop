import { Link, useLoaderData, useSearchParams } from "react-router-dom";

export async function productsLoader({ request }) {
  const res = await fetch("https://fakestoreapi.com/products", {
    signal: request.signal,
  });
  if (!res.ok) {
    throw new Response("Failed to load products", { status: res.status });
  }
  return res.json();
}

export default function Products() {
  const products = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get("category") ?? "all";
  const categories = ["all", ...new Set(products.map((p) => p.category))];

  const visible =
    category === "all"
      ? products
      : products.filter((p) => p.category === category);

  function handleCategory(next) {
    if (next === "all") setSearchParams({});
    else setSearchParams({ category: next });
  }

  return (
    <section>
      <h1>Products</h1>

      <label className="filter">
        Category:{" "}
        <select value={category} onChange={(e) => handleCategory(e.target.value)}>
          {categories.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </label>

      {visible.length === 0 ? (
        <p className="muted">No products in this category.</p>
      ) : (
        <ul className="grid">
          {visible.map((p) => (
            <li key={p.id} className="card">
              <Link to={`/products/${p.id}`}>
                <img src={p.image} alt={p.title} loading="lazy" />
                <h3>{p.title}</h3>
                <p className="price">${p.price}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}