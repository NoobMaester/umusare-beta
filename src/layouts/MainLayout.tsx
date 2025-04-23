

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ReactNode } from 'react';

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />

      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
