import Container from "../layouts/Container";
import Sidebar from "../layouts/Sidebar";
import Trend from "../layouts/Trend";
import { Outlet } from "react-router-dom";

export default function MainPage() {
  return (
    <Container>
      <div className="relative">
        <Sidebar/>
      </div>
      <div className="w-[650px] min-w-[650px]">
        <Outlet />
      </div>
      <Trend />
    </Container>
  );
}
