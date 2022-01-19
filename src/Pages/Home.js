import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ArrowDownHome from '../components/ArrowDownHome';
import ButtonHome from '../components/ButtonHome';
import ImageHome from '../components/ImageHome';
import Layout from '../components/Layout';
import SubtitleHome from '../components/SubtitleHome';
import TitleHome from '../components/TitleHome';
import { dataPage, footerMenu } from '../lists/home';
import images from '../lists/image';

function Home() {
  const [title, setTitle] = useState('Model 3');
  const [subtitle, setSubtitle] = useState('Order Online for Touchles Delivery');
  const [subtitle2, setSubtitle2] = useState('');
  const [isActive, setIsActive] = useState('1');
  const [button1, setButton1] = useState('Custom Order');
  const [button2, setButton2] = useState('Existing Inventory');
  const [count, setCount] = useState([0, 0, 0]);

  const c = useMotionValue(0);
  const output = [0, 1, 0];
  const opacity = useTransform(c, count, output);

  const handleScroll = (e) => {
    c.set(e.target.scrollTop);

    dataPage.map((item, i) => {
      const clientH = e.target.clientHeight / 2;
      const currentH = e.target.clientHeight * i + 1;
      const min = currentH - clientH;
      const max = currentH + clientH;
      if (e.target.scrollTop > min && e.target.scrollTop < max) {
        setCount([min, currentH, max]);
        setTitle(item.title);
        setSubtitle(item.subtitle != null ? item.subtitle : '');
        setSubtitle2(item.subtitle2 != null ? item.subtitle2 : '');
        setIsActive(item.id);
        setButton1(item.button1);
        setButton2(item.button2 != null ? item.button2 : '');
      }
    });
  };
  return (
    <Layout title="Tesla | Home">
      <div
        className="relative h-screen snap-y snap-mandatory overflow-y-auto"
        onScroll={handleScroll}>
        {images.map((item) => (
          <div key={item.id} className="snap-start snap-always relative overflow-hidden h-screen">
            <ImageHome image={item.path} className="hidden sm:block" />
            <ImageHome image={item.pathSm} className="block sm:hidden" />
          </div>
        ))}
      </div>
      <motion.div style={{ opacity }}>
        <div className="flex flex-col items-center fixed top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2">
          <TitleHome text={title} />
          {subtitle !== '' && <SubtitleHome text={subtitle} />}
          {subtitle2 !== '' && <SubtitleHome text={subtitle2} />}
        </div>
        <div
          className={`flex space-y-4 md:space-y-0 space-x-0 md:space-x-6 flex-col w-full px-4 sm:px-8 md:px-0 md:w-max md:flex-row items-center fixed ${
            button2 !== '' ? 'bottom-8' : 'bottom-32'
          } md:bottom-16 mx-auto left-1/2 -translate-x-1/2 -translate-y-1/2`}>
          <ButtonHome className="bg-gray-900 text-white">{button1}</ButtonHome>
          {button2 !== '' && <ButtonHome>{button2}</ButtonHome>}
        </div>
        {isActive === '1' && (
          <div className="w-max fixed bottom-0 mx-auto left-1/2 -translate-x-1/2 -translate-y-1/2">
            <ArrowDownHome />
          </div>
        )}
        {isActive === 7 && (
          <div className="w-max fixed -bottom-5 md:bottom-1 mx-auto left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col md:flex-row items-center space-y-1 md:space-y-0 space-x-0 md:space-x-4">
            {footerMenu.map((item) => (
              <Link
                to={item.url}
                key={item.id}
                className="block text-sm text-gray-600 tracking-wide">
                {item.title}
              </Link>
            ))}
          </div>
        )}
      </motion.div>
    </Layout>
  );
}

export default Home;
