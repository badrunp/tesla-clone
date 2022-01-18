import { sidebarMenu } from '../lists/sidebar';
import Close from './Close';

function Sidebar({ active, close }) {
  return (
    active && (
      <div className="fixed right-0 top-0 bottom-0 h-screen w-[316px] bg-white shadow-xl z-20 overflow-y-auto">
        <div className="h-[80px] flex items-center justify-end px-8">
          <button
            type="button"
            className="block p-2 hover:bg-gray-100 rounded-full"
            onClick={close}>
            <Close />
          </button>
        </div>
        <div className="overflow-y-auto px-8">
          <ul className="flex flex-col items-start justify-start">
            {sidebarMenu.map((item) => (
              <li key={item.id} className="w-full my-1">
                <a
                  href={item.url}
                  className="px-2 py-1 w-full font-semibold text-gray-600 rounded-full hover:bg-gray-100 flex items-start justify-start space-x-1">
                  {item.icon && <item.icon />}
                  <div className="flex flex-col">
                    <span>{item.title}</span>
                    {item.subtitle && (
                      <span className="block text-sm text-gray-400">{item.subtitle}</span>
                    )}
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  );
}

export default Sidebar;
