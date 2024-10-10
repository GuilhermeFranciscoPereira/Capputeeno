import Nav from "@/components/Nav";
import ShowAllProducts from "@/hooks/app/pages/Home/ShowAllProducts";
import TogglePagination from "@/components/TogglePagination";
import "../styles/GlobalStyles.css";

export default function Home(): JSX.Element {
    return (
        <>
        <Nav/>
        <TogglePagination></TogglePagination>
        <main className='mainCards'>
          <ShowAllProducts></ShowAllProducts>
        </main>
        <div className='lastPartFromHome'>
          <TogglePagination></TogglePagination>
        </div>
        </>
    )
}