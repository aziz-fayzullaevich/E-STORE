import {Header} from "../components/header/header-app";
import { Outlet } from "react-router-dom";
import {Footer} from "../components/footer/footer-app";
import style from './main-layout-style.module.css';

const MainLayout = () => {
    return (
        <div className={style.mainLayoutBlock} >
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default MainLayout;