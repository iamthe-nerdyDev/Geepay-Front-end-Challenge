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

          <div className="body">
            <div className="col-12">
              <div className="d-flex flex-column flex-lg-row flex-lg-row-reverse">
                <div className="col-12 col-lg-5">
                  <Analytics />
                </div>

                <div className="col-12 col-lg-7">
                  <Graph />
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="d-flex flex-column flex-lg-row">
                <div className="col-12 col-lg-7">
                  <Orders />
                </div>

                <div className="col-12 col-lg-5">
                  <TopPlatforms />
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
