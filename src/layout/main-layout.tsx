import style from './main-layout-style.module.css';
import { Outlet } from "react-router-dom"
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"

const MainLayout = () => {
    return (
        <div className={style.mainLayoutBlock} >
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default MainLayout