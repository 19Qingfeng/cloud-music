import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// V6下的重定向 https://reactrouter.com/docs/en/v6/upgrading/reach#what-about-clicking-links-that-arent-updated
const Redirect: React.FC<{ path: string }> = ({ path }) => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(path);
  });

  return null;
};

export default Redirect;
