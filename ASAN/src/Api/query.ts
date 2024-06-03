import { asanLogin } from "./api";
import { useQuery } from "@tanstack/react-query";

export function useAsanLogin() {
  return useQuery({
    queryKey: [""],
    queryFn: asanLogin,
  });
}