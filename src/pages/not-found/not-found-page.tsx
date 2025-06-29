import { Button, Result } from "antd"
import { Link } from "react-router-dom";
import { ROUTES } from "../../const/routes";

const NotFounPage = () => {
    return (
        <Result
            status="404"
            title="404"
            subTitle="Извините, страница, которую вы посетили, не существует!"
            extra={<Link to={ROUTES.HOME} type="primary">
                <Button>На главную страницу</Button>
            </Link>}
        />
    )
}

export default NotFounPage;