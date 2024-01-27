import React from "react";
import { TopPlatformsData } from "../../utils/data";

const TopPlatforms: React.FC<{}> = () => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="platform-tittle d-flex align-items-center justify-content-between mb-4 pb-2 pt-1">
            <h2>Top Platform</h2>
            <a href="#">See all</a>
          </div>

          <div className="platforms">
            {TopPlatformsData.map((platform, index) => (
              <div className="single-platform mb-2" key={`platform-${index}`}>
                <h4>{platform.name}</h4>
                <div className="progress-bar">
                  <div
                    className="progress"
                    style={{
                      backgroundColor: platform.fill,
                      width: `${40 + platform.percentage * 2}%`,
                    }}
                  ></div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <span>${platform.amount.toLocaleString()}</span>
                  <span>+{platform.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPlatforms;
