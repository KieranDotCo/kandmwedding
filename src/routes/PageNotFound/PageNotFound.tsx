import React from "react";
import bgTop from "../../assets/images/small-bg-top.png";
import bgBottom from "../../assets/images/small-bg-bottom.png";

const PageNotFound: React.FC = () => {
  return (
    <div className="bg-grey caligraphy-text ta-center" style={{  padding: '5rem 0' }}>
      <img src={bgTop} alt="bg top" className="bg-top" />
      <p className="ta-center" style={{ margin: "0 auto", fontSize: "100px"}}>
        Page Not Found
      </p>
      <img src={bgBottom} alt="bg bottom" className="bg-bottom" />
    </div>
  );
};

export default PageNotFound;
