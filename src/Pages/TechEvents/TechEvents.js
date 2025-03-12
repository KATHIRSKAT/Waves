import React from "react";
import Cards from "../../Components/Cards/Cards";
import Logo1 from "../../Logo/OB/Paper.png";
import Logo2 from "../../Logo/OB/Poster.png";
import Logo3 from "../../Logo/OB/College.png";
import Logo4 from "../../Logo/OB/Spark.png";
import Logo5 from "../../Logo/OB/Watt.png";
import Logo6 from "../../Logo/OB/Wire.png";
import "./TechEvents.css";
import Layout from "../../Components/Layout/Layout";

const TechEvents = () => {
  return (
    <Layout>
      <div className="container">
      <Cards
        imageUrl={Logo1}
        formLink="https://forms.gle/yourGoogleFormLink"
        title="Symposium Registration"
        name="PAPER PRESENTATION"
      />
      <Cards
        imageUrl={Logo2}
        formLink="https://forms.gle/yourGoogleFormLink"
        title="Symposium Registration"
        name="CIRC-I-TUDE"
      />
      <Cards
        imageUrl={Logo3}
        formLink="https://forms.gle/yourGoogleFormLink"
        title="Symposium Registration"
        name="CHARGE AND CLIMB"
      />
      <Cards
        imageUrl={Logo4}
        formLink="https://forms.gle/yourGoogleFormLink"
        title="Symposium Registration"
        name="THE SPARK OF GENIUS"
      />
        <Cards
        imageUrl={Logo5}
        formLink="https://forms.gle/yourGoogleFormLink"
        title="Symposium Registration"
        name="WATT-A-CONNECTION"
      />
      <Cards
        imageUrl={Logo6}
        formLink="https://forms.gle/yourGoogleFormLink"
        title="Symposium Registration"
        name="WIRED-UP"
      />
    </div>
    </Layout>
    
  );
};

export default TechEvents;
