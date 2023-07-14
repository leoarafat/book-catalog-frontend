/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";

interface IProps {
  children: ReactNode;
}

export default function PrivateRoute({ children }: IProps) {
  const { user, isLoading } = useAppSelector(
    (state: { user: any }) => state.user
  );
  const { pathname } = useLocation();
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!user.email && !isLoading) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
