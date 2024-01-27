import React from "react";
import { Analytics, Graph, Navbar, Orders, Sidebar, TopPlatforms } from "./components";

import "./assets/css/main.css";

const App: React.FC<{}> = () => {
  return (
    <React.Fragment>
      <main>
        <Sidebar />

        <div className="main-body">
          <Navbar />

          <div className="body py-3">
            <div className="container-fluid">
              <div className="row g-4">
                <div className="col-12">
                  <div className="row">
                    <div className="col-12 mb-4">
                      <div className="row g-4 flex-xl-row-reverse">
                        <div className="col-12 col-sm-9 col-md-11 col-lg-12 mx-auto col-xl-6">
                          <Analytics />
                        </div>

                        <div className="col-12 col-sm-9 col-md-11 mx-auto col-lg-12 col-xl-6">
                          <Graph />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="row g-4">
                    <div className="col-12 col-sm-9 col-md-11 mx-auto col-lg-7">
                      <Orders />
                    </div>

                    <div className="col-12 col-sm-9 col-md-11 mx-auto col-lg-5">
                      <TopPlatforms />
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="py-4 footer-f">Copyright &copy; {new Date().getFullYear()}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default App;
