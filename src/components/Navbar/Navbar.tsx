import React from "react";
import { ArrowDown, Bell, Calendar, Logo, Search } from "../../svgs";
import { useStore } from "../../utils/StoreProvider";

const Navbar: React.FC<{}> = () => {
  const { setDisaplaySidebar } = useStore();

  return (
    <nav className="navbar">
      <a onClick={() => setDisaplaySidebar(true)} className="nav-brand d-flex align-items-center">
        <Logo className="d-lg-none" />
        <h2 className="d-none d-lg-block">Dashboard</h2>
      </a>

      <div className="d-flex align-items-center nav-right">
        <div className="d-none d-md-block nav-search">
          <Search />
          <input type="text" placeholder="Search..." />
        </div>

        <div className="d-none d-xl-flex nav-date px-3">
          <Calendar />
          <p>November 19, 2023</p>
        </div>

        <div className="nav-notifications d-flex align-items-center justify-content-center">
          <Bell />
        </div>

        <div className="nav-user d-flex align-items-center">
          <div>
            <img src="/images/justin.jpeg" alt="Justin Bergson" />
          </div>
          <div className="nav-user__info d-flex flex-column align-items-center justify-content-center">
            <h4>Justin Bergson</h4>
            <p>Justin@gmail.com</p>
          </div>
          <div className="ps-1 pe-2">
            <ArrowDown />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
