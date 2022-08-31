import { useEffect } from 'react';

const useScript = (data) => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = data;
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [data]);
};

export default useScript;
