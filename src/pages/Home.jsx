import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section>
      <h1>Welcome to Shop</h1>
      <p>Browse our catalog and find something you like.</p>
      <Link className="btn" to="/products">View products</Link>
    </section>
  );
}