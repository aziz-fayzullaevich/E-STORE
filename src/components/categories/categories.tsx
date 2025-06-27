import { useEffect } from 'react';
import { useCategoryStore } from '../../store/use-fetch-categories-store';
import { Skeleton, Tabs, message } from 'antd';

const Categories = () => {
    const { categories, loading, error, fetchCategories } = useCategoryStore();
    const [messageApi, contextHolder] = message.useMessage();

    useEffect(() => {
        if (categories.length === 0) {
            fetchCategories();
        }
    }, []);

    useEffect(() => {
        if (error) {
            messageApi.error(error);
        }
    }, [error]);

    if (loading) return <Skeleton />;

    return (
        <div>
            {contextHolder}
            <Tabs
                tabPosition="top"
                type="line"
                items={categories.map(category => ({
                    key: category.slug,
                    label: category.name,
                    children: null,
                }))}
            />
        </div>
    );
};

export default Categories;
