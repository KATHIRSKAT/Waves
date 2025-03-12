import React from "react";
import Card from "../../Components/Card/Card";
import Logo from "../../Logo/SEEE.png";
import "./NonTechEvents.css";
import Layout from "../../Components/Layout/Layout";

const NonTechEvents = () => {
  return (
    <Layout>
      <div className="container">
      <Card
        imageUrl={Logo}
        formLink="https://forms.gle/yourGoogleFormLink"
        title="Symposium Registration"
      />
      <Card
        imageUrl={Logo}
        formLink="https://forms.gle/yourGoogleFormLink"
        title="Symposium Registration"
      />
      <Card 
        imageUrl={Logo}
        formLink="https://forms.gle/yourGoogleFormLink"
        title="Symposium Registration"
      />
      <Card
        imageUrl={Logo}
        formLink="https://forms.gle/yourGoogleFormLink"
        title="Symposium Registration"
      />
    </div>
    </Layout>
    
  );
};

export default NonTechEvents;
