import { Disclosure } from "@headlessui/react";

import { NavLink, useLocation } from "react-router-dom";
import mainLogo from "../../../assets/main-logo.png";
import { cn } from "../../../utils";
import {
  Bars3Icon,
  FolderOpenIcon,
  HomeIcon,
  PhoneIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export const navigation = [
  { name: "Home", href: "/", icon: HomeIcon },
  {
    name: "About",
    href: "about",
    icon: UserIcon,
  },
  {
    name: "Projects",
    href: "projects",
    icon: FolderOpenIcon,
  },

  {
    name: "Contact",
    href: "contact",
    icon: PhoneIcon,
  },
];
export default function AppNav() {
  const location = useLocation();
  const activeTab = location.pathname.split("/")[1];
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="w-full px-12 lg:px-24">
            <div className="relative flex h-16 justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-700">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-between sm:items-stretch ">
                <NavLink to={"/"} className="flex flex-shrink-0 items-center">
                  <img
                    className="h-12 w-auto"
                    src={mainLogo}
                    alt="Your Company"
                  />
                </NavLink>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {navigation.map((navigation) => (
                    <NavLink
                      key={navigation.name + "-topbar"}
                      to={navigation.href}
                      className={cn(
                        "inline-flex tracking-wider items-center hover:border-green-700 hover:text-green-700 px-1 pt-1 text-sm font-medium text-gray-900",
                        activeTab === navigation.href ||
                          (location.pathname === "/" && navigation.href === "/")
                          ? " border-b-2 border-green-700 text-green-700"
                          : "text-gray-700"
                      )}
                    >
                      {navigation.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden ">
            <div className="space-y-1 pb-4 pt-2">
              {navigation.map((navigation) => (
                <NavLink key={navigation.name + "-topbar"} to={navigation.href}>
                  <Disclosure.Button
                    className={cn(
                      "block w-full text-left hover:bg-gray-200 tracking-wider hover:text-green-700 py-2 pl-3 pr-4 text-base font-medium text-gray-700",
                      activeTab === navigation.href ||
                        (location.pathname === "/" && navigation.href === "/")
                        ? "border-l-4 border-green-700 bg-gray-200 text-green-700"
                        : "text-gray-700"
                    )}
                  >
                    {navigation.name}
                  </Disclosure.Button>
                </NavLink>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
