import { useState, useEffect } from 'react';

const useScreenWidth = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Функция обработчика изменения размера окна
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    // Подписываемся на событие изменения размера окна
    window.addEventListener('resize', handleResize);

    // Инициализируем текущую ширину экрана
    handleResize();

    // Отписываемся от события при размонтировании компонента
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowWidth;
};

export default useScreenWidth;
