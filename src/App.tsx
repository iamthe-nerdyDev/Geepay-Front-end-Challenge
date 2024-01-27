import React from "react";
import { Analytics, Graph, Navbar, Orders, Sidebar, TopPlatforms } from "./components";

import "./assets/css/main.css";

const App: React.FC<{}> = () => {
  return (
    <React.Fragment>
      <main>
        <Sidebar />

        <div className="">
          <Navbar />

          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-12">
                  <div className="row flex-row-reverse">
                    <div className="col-12 col-lg-7">
                      <Analytics />
                    </div>

                    <div className="col-12 col-lg-5">
                      <Graph />
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="row">
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
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default App;
