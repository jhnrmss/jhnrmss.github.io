import { Outlet } from "react-router";
import React from "react";
import AppNav from "./AppNav";
import AppFooter from "./AppFooter";
const AppLayout: React.FC = () => {
  return (
    <div className="bg-gray-50 h-full w-full">
      <AppNav />
      <main className="py-5 pt-9 px-12 lg:px-24">
        <div className="py-5 px-4 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>
      <AppFooter />
    </div>
  );
};
export default AppLayout;
