import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function RouteError() {
  const error = useRouteError();

  const is404 = isRouteErrorResponse(error) && error.status === 404;
  const message = isRouteErrorResponse(error)
    ? error.data || error.statusText
    : error?.message || "Something went wrong";

  return (
    <main className="container">
      <h1>{is404 ? "404" : "Oops"}</h1>
      <p>{is404 ? "المنتج أو الصفحة مش موجودة." : message}</p>
      <Link className="btn" to="/products">Back to products</Link>
    </main>
  );
}