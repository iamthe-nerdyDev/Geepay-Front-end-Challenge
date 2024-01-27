import React, { useEffect, useState } from "react";
import { ArrowDown, Bell, Calendar, Logo, Logout, Menu, Search, Settings } from "../../svgs";
import { useStore } from "../../utils/StoreProvider";

const Navbar: React.FC<{}> = () => {
  const { setDisaplaySidebar, theme } = useStore();

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => setCurrentTime(new Date()), 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedDateTime = currentTime.toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  return (
    <nav className={`navbar ${theme}`}>
      <div className="container-fluid">
        <div className="d-flex align-items-center justify-content-between">
          <a href="/" className="nav-brand d-flex align-items-center">
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
              <p>{formattedDateTime.replace("at", " : ")}</p>
            </div>

            <div className="nav-notifications d-none d-sm-flex align-items-center justify-content-center">
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
              <div className="pe-2">
                <ArrowDown />
              </div>

              <div className="floating-user-dropdown">
                <h4>Justin Bergson</h4>
                <a href="#">
                  <Settings />
                  <span>Settings</span>
                </a>
                <hr />
                <a href="#">
                  <Logout />
                  <span>Logout</span>
                </a>
              </div>
            </div>

            <div className="menu d-lg-none ps-1" onClick={() => setDisaplaySidebar(true)}>
              <Menu />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
