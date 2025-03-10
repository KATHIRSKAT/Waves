import React from "react";
import Card from "../../Components/Card/Card";
import Logo1 from "../../Logo/OB/pcb.png";
import Logo2 from "../../Logo/OB/iot.png";
import Logo3 from "../../Logo/OB/matlab.png";
import "./Workshops.css";
import Layout from "../../Components/Layout/Layout";

const Workshops = () => {
  return (
    <Layout>
      <div className="container">
      <Card
        imageUrl={Logo1}
        formLink="https://forms.gle/wubnrsRjrvgK9s9C6"
        title="Symposium Registration"
      />
      <Card
        imageUrl={Logo2}
        formLink="https://forms.gle/xXuH1R8z2wsHUp8N9"
        title="Symposium Registration"
      />
      <Card
        imageUrl={Logo3}
        formLink="https://forms.gle/pEN41HqnfHJoKe548"
        title="Symposium Registration"
      />
      
      
    </div>
    </Layout>
    
  );
};

export default Workshops;
