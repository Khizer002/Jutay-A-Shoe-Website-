// Source - https://stackoverflow.com/a
// Posted by fjplaurr, modified by community. See post 'Timeline' for change history
// Retrieved 2025-12-30, License - CC BY-SA 4.0

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
