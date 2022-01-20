import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
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
  const [count, setCount] = useState([0, 0, 0]);
  const [isTransition, setTransition] = useState(true);

  const [{ title, subtitle, subtitle2, isActive, button1, button2 }, setDataInfoPage] = useState({
    title: 'Model 3',
    subtitle: 'Order Online for Touchles Delivery',
    subtitle2: '',
    isActive: 1,
    button1: 'Custom Order',
    button2: 'Existing Inventory'
  });

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

        setDataInfoPage({
          title: item.title,
          subtitle: item.subtitle != null ? item.subtitle : '',
          subtitle2: item.subtitle2 != null ? item.subtitle2 : '',
          isActive: item.id,
          button1: item.button1,
          button2: item.button2 != null ? item.button2 : ''
        });
      }
    });
  };

  useEffect(() => {
    setTimeout(() => setTransition(false), 3000);
  }, []);

  return (
    <Layout title="Electric Cars, Solar & Clean Energy | Tesla">
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
          {subtitle !== '' && <SubtitleHome text={subtitle} isTransition={isTransition} />}
          {subtitle2 !== '' && <SubtitleHome text={subtitle2} isTransition={isTransition} />}
        </div>
        <div
          className={`flex space-y-4 md:space-y-0 space-x-0 md:space-x-6 flex-col w-full px-4 sm:px-8 md:px-0 md:w-max md:flex-row items-center fixed ${
            button2 !== '' ? 'bottom-8' : 'bottom-32'
          } md:bottom-16 mx-auto left-1/2 -translate-x-1/2 -translate-y-1/2`}>
          <ButtonHome className="bg-gray-900 text-white" isTransition={isTransition}>
            {button1}
          </ButtonHome>
          {button2 !== '' && <ButtonHome isTransition={isTransition}>{button2}</ButtonHome>}
        </div>
        {isActive === 1 && (
          <div className="w-max fixed bottom-0 mx-auto left-1/2 -translate-x-1/2 -translate-y-1/2">
            <ArrowDownHome isTransition={isTransition} />
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
