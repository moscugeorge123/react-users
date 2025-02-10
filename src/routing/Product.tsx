import { useParams } from "react-router";

export function Product() {
  const params = useParams();
  return (
    <div>
      <p>This is product {params.id} </p>
    </div>
  );
}
