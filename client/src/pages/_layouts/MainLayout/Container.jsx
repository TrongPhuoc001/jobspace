import React from 'react';

function MainLayout({ children }) {
  return (
    <div>
      <p>header</p>
      {children}
    </div>
  );
}

export default MainLayout;
