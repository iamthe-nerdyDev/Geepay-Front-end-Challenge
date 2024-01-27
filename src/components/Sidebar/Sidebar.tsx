import React from "react";
import {
  ArrowRight,
  Box,
  Category,
  Close,
  Discount,
  InfoCircle,
  Logo,
  Logout,
  Moon,
  Settings,
  Sun,
  TrendUp,
  Users,
  Vector,
} from "../../svgs";
import { useStore } from "../../utils/StoreProvider";

const Sidebar: React.FC<{}> = () => {
  const { theme, changeTheme, displaySidebar, setDisaplaySidebar } = useStore();

  function handleOverlayClick(e: any) {
    if (e.target.classList.contains("sidebar")) setDisaplaySidebar(false);
  }

  return (
    <React.Fragment>
      {/** <= 991px sidebar */}
      <div
        className={`sidebar ${displaySidebar ? "d-flex" : "d-none"} d-lg-none`}
        onClick={handleOverlayClick}
      >
        <div className="close" onClick={() => setDisaplaySidebar(false)}>
          <Close />
        </div>

        <div className="sidebar-box">
          <div className="brand d-flex align-items-center justify-content- py-5 ps-4">
            <Logo />
            <h2>Dashboard</h2>
          </div>

          <div className="links mb-2">
            <ul>
              <li className="active">
                <a href="#">
                  <Category />
                  <span>Dashboard</span>
                </a>

                <div className="vector">
                  <Vector />
                </div>
              </li>

              <li>
                <a href="#">
                  <TrendUp />
                  <span>Analytics</span>
                </a>

                <div className="vector">
                  <Vector />
                </div>
              </li>

              <li>
                <a href="#">
                  <Users />
                  <span>Users</span>
                </a>

                <div className="vector">
                  <Vector />
                </div>
              </li>

              <li>
                <a href="#">
                  <Box />
                  <span>Products</span>
                </a>

                <div className="vector">
                  <Vector />
                </div>
              </li>

              <li>
                <a href="#">
                  <Discount />
                  <span>Voucher</span>
                </a>

                <div className="vector">
                  <Vector />
                </div>
              </li>

              <li>
                <a href="#">
                  <InfoCircle />
                  <span>Support</span>
                </a>

                <div className="vector">
                  <Vector />
                </div>
              </li>

              <li>
                <a href="#">
                  <Settings />
                  <span>Settings</span>
                </a>

                <div className="vector">
                  <Vector />
                </div>
              </li>

              <li>
                <a href="#">
                  <Logout />
                  <span>Logout</span>
                </a>

                <div className="vector">
                  <Vector />
                </div>
              </li>
            </ul>
          </div>

          <div className="theme-switcher d-flex align-items-center">
            <div onClick={() => changeTheme("light")} className={theme === "light" ? "active" : ""}>
              <Sun width={20} height={20} />
              <span>Light</span>
            </div>

            <div onClick={() => changeTheme("dark")} className={theme === "dark" ? "active" : ""}>
              <Moon width={20} height={20} />
              <span>Dark</span>
            </div>
          </div>
        </div>
      </div>

      {/** >991px sidebar */}
      <div className="sidebar-lg d-none d-lg-flex flex-column justify-content-between align-items-center">
        <div className="sidebar-top">
          <div className="brand mb-4">
            <a href="/" className="d-flex align-items-center justify-content-center">
              <Logo />
            </a>
          </div>

          <div className="links mb-4">
            <ul>
              <li className="active">
                <a href="#">
                  <Category />
                </a>

                <div className="vector">
                  <Vector />
                </div>
              </li>

              <li>
                <a href="#">
                  <TrendUp />
                </a>

                <div className="vector">
                  <Vector />
                </div>
              </li>

              <li>
                <a href="#">
                  <Users />
                </a>

                <div className="vector">
                  <Vector />
                </div>
              </li>

              <li>
                <a href="#">
                  <Box />
                </a>

                <div className="vector">
                  <Vector />
                </div>
              </li>

              <li>
                <a href="#">
                  <Discount />
                </a>

                <div className="vector">
                  <Vector />
                </div>
              </li>

              <li>
                <a href="#">
                  <InfoCircle />
                </a>

                <div className="vector">
                  <Vector />
                </div>
              </li>
            </ul>
          </div>

          <div className="theme-switcher d-flex flex-column align-items-center justify-content-center">
            <div onClick={() => changeTheme("light")} className={theme === "light" ? "active" : ""}>
              <Sun width={theme === "light" ? 18 : 25} height={theme === "light" ? 18 : 25} />
            </div>

            <div onClick={() => changeTheme("dark")} className={theme === "dark" ? "active" : ""}>
              <Moon width={theme === "dark" ? 18 : 25} height={theme === "dark" ? 18 : 25} />
            </div>
          </div>
        </div>

        <div className="sidebar-bottom pb-4">
          <ul>
            <li>
              <a href="#">
                <ArrowRight />
              </a>
            </li>

            <li>
              <a href="#">
                <Settings />
              </a>
            </li>

            <li>
              <a href="#">
                <Logout />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
