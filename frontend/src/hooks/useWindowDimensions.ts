import { useState, useEffect } from 'react';
// Get window dimensions
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height};
}
// Window dimensions hook
export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}