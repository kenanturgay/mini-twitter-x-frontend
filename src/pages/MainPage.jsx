import Container from "../layouts/Container";
import Sidebar from "../layouts/Sidebar";
import Feed from "../layouts/Feed";
import Trend from "../layouts/Trend";
import { Outlet } from "react-router-dom";

export default function MainPage() {
  return (
    <Container>
      <div className="fixed top-0 left-[370px]">
        <Sidebar/>
      </div>
      <div className="ml-[280px] w-[744px]">
        <Outlet />
      </div>
      <Trend />
    </Container>
  );
}
