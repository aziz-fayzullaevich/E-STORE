import { useEffect } from 'react';
import { useCategoryStore } from '../../store/use-fetch-categories-store';
import { useProductsStore } from '../../store/use-fetch-products';
import { Skeleton, Tabs, message } from 'antd';

const Categories = () => {
  const { categories, loading, error, fetchCategories } = useCategoryStore();
  const { fetchProductsByCategory } = useProductsStore();
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    const loadAndPickRandom = async () => {
      await fetchCategories();
    };

    if (categories.length === 0) {
      loadAndPickRandom();
    }
  }, []);

  useEffect(() => {
    if (categories.length > 0) {
      const randomIndex = Math.floor(Math.random() * categories.length);
      const randomCategory = categories[randomIndex].slug;
      fetchProductsByCategory(randomCategory);
    }
  }, [categories]);

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
        onChange={(key) => fetchProductsByCategory(key)}
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