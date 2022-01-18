import { useEffect } from 'react';

function Title(title) {
  useEffect(() => {
    document.title = title;
  }, []);
}

export default Title;
