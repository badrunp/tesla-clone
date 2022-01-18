import Layout from '../components/Layout';
import images from '../lists/image';

function Home() {
  return (
    <Layout title="Tesla | Home">
      <div className="relative h-screen snap-y snap-mandatory overflow-y-auto">
        {images.map((item) => (
          <div key={item.id} className="snap-start snap-always relative overflow-hidden h-screen">
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
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default Home;
