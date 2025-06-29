import { useEffect } from 'react';
import { useCategoryStore } from '../../store/use-fetch-categories-store';
import { useProductsStore } from '../../store/use-fetch-products';
import { Skeleton, Tabs, message } from 'antd';
import style from './categories-style.module.css';

export const Categories = () => {
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

  const renderSkeletonTabs = () => (
    <div className={style.skeletonTabs}>
      {Array.from({ length: 10 }).map((_, index) => (
        <Skeleton.Button
          key={index}
          active
          size="default"
          className={style.skeletonTabItem}
        />
      ))}
    </div>
  );

  return (
    <div className={style.categoriesWrapper}>
      {contextHolder}
      {loading ? (
        renderSkeletonTabs()
      ) : (
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
      )}
    </div>
  );
};