import React from "react";
import Cards from "../../Components/Cards/Cards";
import Logo1 from "../../Logo/OB/Mela.png";
import Logo2 from "../../Logo/OB/Manasala.png";
import Logo3 from "../../Logo/OB/Hi.png";
import Logo4 from "../../Logo/OB/Bye.png";
import Logo5 from "../../Logo/OB/Whatsapp.jpeg";
import Logo6 from "../../Logo/OB/Among.png";
import "./NonTechEvents.css";
import Layout from "../../Components/Layout/Layout";

const NonTechEvents = () => {
  return (
    <Layout>
      <div className="container">
      <Cards
        imageUrl={Logo1}
        formLink="https://forms.gle/yourGoogleFormLink"
        title="Symposium Registration"
        name="ATHUKUM MELA"
      />
      <Cards
        imageUrl={Logo2}
        formLink="https://forms.gle/yourGoogleFormLink"
        title="Symposium Registration"
        name="MANASILAYO"
      />
      <Cards 
        imageUrl={Logo3}
        formLink="https://forms.gle/yourGoogleFormLink"
        title="Symposium Registration"
        name="CRACK THE CODE"
      />
      <Cards
        imageUrl={Logo4}
        formLink="https://forms.gle/yourGoogleFormLink"
        title="Symposium Registration"
        name="BEAT THE CLOCK"
      />
       <Cards
        imageUrl={Logo5}
        formLink="https://forms.gle/yourGoogleFormLink"
        title="Symposium Registration"
        name ="MELODY MANIA"
      />
       <Cards
        imageUrl={Logo6}
        formLink="https://forms.gle/yourGoogleFormLink"
        title="Symposium Registration"
        name="AMONG US"
      />
    </div>
    </Layout>
    
  );
};

export default NonTechEvents;
