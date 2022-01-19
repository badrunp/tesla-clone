import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useState } from 'react';
import Layout from '../components/Layout';
import images from '../lists/image';

const data = [
  {
    title: 'Model 3',
    subtitle: 'Order Online for Touchles Delivery'
  },
  {
    title: 'Model Y',
    subtitle: 'Order Online for Touchles Delivery'
  },
  {
    title: 'Model S',
    subtitle: 'Order Online for Touchles Delivery'
  },
  {
    title: 'Model X',
    subtitle: 'Order Online for Touchles Delivery'
  },
  {
    title: 'Solar Panels',
    subtitle: 'Order Online for Touchles Delivery'
  },
  {
    title: 'Solar Roof',
    subtitle: 'Order Online for Touchles Delivery'
  },
  {
    title: 'Accessories',
    subtitle: 'Order Online for Touchles Delivery'
  }
];

function Home() {
  const [title, setTitle] = useState('Model 3');
  const [count, setCount] = useState([0, 0, 0]);

  const c = useMotionValue(0);
  const output = [0, 1, 0];
  const opacity = useTransform(c, count, output);

  const handleScroll = (e) => {
    c.set(e.target.scrollTop);

    data.map((item, i) => {
      const clientH = e.target.clientHeight / 2;
      const currentH = e.target.clientHeight * i + 1;
      const min = currentH - clientH;
      const max = currentH + clientH;
      if (e.target.scrollTop > min && e.target.scrollTop < max) {
        setCount([min, currentH, max]);
        setTitle(item.title);
      }
    });
  };
  return (
    <Layout title="Tesla | Home">
      <div
        onScroll={handleScroll}
        className="relative h-screen snap-y snap-mandatory overflow-y-auto">
        {images.map((item) => (
          <motion.div
            key={item.id}
            className="snap-start snap-always relative overflow-hidden h-screen">
            <img
              className="w-full h-screen object-cover hidden sm:block"
              src={item.path}
              alt={item.path}
            />
            <img
              className="w-full h-screen object-cover block sm:hidden"
              src={item.pathSm}
              alt={item.pathSm}
            />
          </motion.div>
        ))}
      </div>
      <motion.div style={{ opacity }}>
        <div className="flex flex-col items-center fixed top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h2 className="block text-4xl font-semibold tracking-normal text-gray-700">{title}</h2>
          <p className="block text-gray-600 tracking-tight">Init adalah title</p>
        </div>
        <div className="flex space-y-2 md:space-y-0 space-x-0 md:space-x-4 flex-col w-full px-4 sm:px-8 md:px-0 md:w-max md:flex-row items-center fixed bottom-10 mx-auto left-1/2 -translate-x-1/2 -translate-y-1/2">
          <button
            type="button"
            className="py-2 bg-white rounded-full uppercase text-xs w-full md:w-[237px] block font-semibold tracking-wide">
            Custom Order
          </button>
          <button
            type="button"
            className="py-2 bg-gray-700 text-white rounded-full uppercase text-xs w-full md:w-[237px] block font-semibold tracking-wide">
            Existing Inventory
          </button>
        </div>
      </motion.div>
    </Layout>
  );
}

export default Home;
