import Container from "../layouts/Container";
import Sidebar from "../layouts/Sidebar";
import Feed from "../layouts/Feed";
import Trend from "../layouts/Trend";
import { Outlet } from "react-router-dom";

export default function MainPage() {
  return (
    <Container>
      <Sidebar />
      <div className="flex-1 border-l border-r">
        <Outlet />
      </div>
      <Trend />
    </Container>
  );
}
