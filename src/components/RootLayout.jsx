import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function RootLayout(){
    return <div>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
}
