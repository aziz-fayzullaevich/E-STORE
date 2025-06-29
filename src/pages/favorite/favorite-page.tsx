import { Empty } from 'antd';
// import style from './favorite-style.module.css';

const Favorite = () => {
  return (
    <div className='contianer'>
      <Empty
        description='Добавьте ваш любимый продукт!'
        className='not-found-block'
      />
    </div>
  )
}

export default Favorite;