import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section>
      <h1>404</h1>
      <p>الصفحة اللي بتدوّر عليها مش موجودة.</p>
      <Link className="btn" to="/">الرجوع للرئيسية</Link>
    </section>
  );
}