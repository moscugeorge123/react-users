import { useEffect } from "react";
import { useSearchParams } from "react-router";

export function Register() {
  const [params, setParams] = useSearchParams();
  useEffect(() => {
    setParams({ ...params, key: "New value" });
  }, []);
  return <h1>Register {params.get("key")}</h1>;
}
