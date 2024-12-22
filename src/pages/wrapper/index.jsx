import { Outlet } from "react-router-dom";
import Header from "./components/header";

export default function Wrapper() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}
