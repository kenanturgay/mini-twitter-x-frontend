import Searchbar from "../components/Searchbar";
import TrendsList from "../components/TrendsList";
//sticky margin-top'i kaydiriyordu bu yüzden fazladan div oluşturdum

export default function Trend() {
  return (
    <aside className="sticky top-0 w-80 border-l h-screen">
        <div className="h-3"></div> 
        <Searchbar/>
        <TrendsList/>
    </aside>
  )
}