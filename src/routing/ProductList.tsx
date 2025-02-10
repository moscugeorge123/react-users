import { Link, useNavigate } from "react-router";

export function ProductList() {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/home");
  }, 10000);

  return (
    <>
      <div>
        <h3>Product 1</h3>
        <Link to="/products/1">Go to product 1</Link>
      </div>
      <div>
        <h3>Product 101</h3>
        <Link to="/products/101">Go to product 101</Link>
      </div>
    </>
  );
}
