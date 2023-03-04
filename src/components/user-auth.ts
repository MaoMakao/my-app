import { useSelector } from "react-redux";

export function useAuth() {
  const { token, err, id } = useSelector((store: { user: any }) => store.user);
  return {
    isAuth: !!token,
    id,
    token,
    err,
  };
}
