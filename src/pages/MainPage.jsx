import Container from "../layouts/Container"
import  Feed  from "../layouts/Feed"
import Sidebar from "../layouts/Sidebar"
import  Trend  from "../layouts/Trend"



export default function MainPage() {
  return (
        <Container>
        <Sidebar/>
        <Feed/>
        <Trend></Trend>
        </Container>
  )
}

