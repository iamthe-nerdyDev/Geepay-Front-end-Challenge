import React from "react";
import {
  Box3DRotate,
  BoxTick,
  Coin,
  ShoppingCart,
  TrendingDown,
  TrendingDownChart,
  TrendingUp,
  TrendingUpChart,
} from "../../svgs";
import { useStore } from "../../utils/StoreProvider";

const Analytics: React.FC<{}> = () => {
  const { theme } = useStore();

  return (
    <div className={`row g-3 ana ${theme}`}>
      <div className="col-12 col-md-6">
        <div className="card analytics">
          <div className="top d-flex align-items-center justify-content-between">
            <div className="icon">
              <BoxTick />
            </div>
            <TrendingUpChart className="chart" />
          </div>
          <h2>Total Order</h2>
          <h3>350</h3>
          <div className="footer d-flex align-items-center justify-content-between">
            <div className="green d-flex align-items-center">
              <TrendingUp />
              <span>23,5%</span>
            </div>

            <span>vs. previous month</span>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-6">
        <div className="card analytics">
          <div className="top d-flex align-items-center justify-content-between">
            <div className="icon">
              <Box3DRotate />
            </div>
            <TrendingDownChart className="chart" />
          </div>
          <h2>Total Refund</h2>
          <h3>270</h3>
          <div className="footer d-flex align-items-center justify-content-between">
            <div className="red d-flex align-items-center">
              <TrendingDown />
              <span>23,5%</span>
            </div>

            <span>vs. previous month</span>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-6">
        <div className="card analytics">
          <div className="top d-flex align-items-center justify-content-between">
            <div className="icon">
              <ShoppingCart />
            </div>
            <TrendingDownChart className="chart" />
          </div>
          <h2>Average Sales</h2>
          <h3>1567</h3>
          <div className="footer d-flex align-items-center justify-content-between">
            <div className="green d-flex align-items-center">
              <TrendingUp />
              <span>23,5%</span>
            </div>

            <span>vs. previous month</span>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-6">
        <div className="card analytics">
          <div className="top d-flex align-items-center justify-content-between">
            <div className="icon">
              <Coin />
            </div>
            <TrendingUpChart className="chart" />
          </div>
          <h2>Total Income</h2>
          <h3>$350.000</h3>
          <div className="footer d-flex align-items-center justify-content-between">
            <div className="green d-flex align-items-center">
              <TrendingUp />
              <span>23,5%</span>
            </div>

            <span>vs. previous month</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
