import TogglePagination from "@/components/TogglePagination";
import ShowAllProducts from "@/hooks/app/pages/Home/ShowAllProducts";
import Nav from "@/components/Nav";

export default function Home(): JSX.Element {
    return (
        <>
        <Nav/>
        <TogglePagination></TogglePagination>
        <main>
          <ShowAllProducts></ShowAllProducts>
        </main>
        <div style={{marginBottom: "100px"}}>
          <TogglePagination></TogglePagination>
        </div>
        </>
    )
}