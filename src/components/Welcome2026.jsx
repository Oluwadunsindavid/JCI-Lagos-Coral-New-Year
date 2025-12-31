import React from "react";
import headerImg from "../assets/Header.png";
import President from "../assets/President.jpg";
import logo1 from "../assets/lift logo.jpg";
import logo2 from "../assets/JCI logo.PNG";

const Welcome2026 = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* TOP HEADER */}
      {/* Header img */}
      <div
        className="bg-cover bg-center"
        style={{ backgroundImage: `url(${headerImg})` }}
      >
        <i>
          <h2 className="text-white text-center text-4xl sm:text-5xl md:text-7xl italics font-bold py-10 transition-all duration-500">
            Welcome to 2026
          </h2>
        </i>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* LEFT SECTION */}
        <div>
          {/* President Image */}
          <img
            src={President}
            alt="President Portrait"
            className="w-full max-w-md rounded-md shadow-lg mb-8"
          />

          <h2 className="text-2xl font-bold mb-4">
            Dear Esteemed Members <br />
            of JCI Lagos Coral,
          </h2>

          <p className="text-gray-700 mb-4 leading-relaxed">
            As we step into this new year, I want to sincerely appreciate every
            member of this great organization. Your dedication, resilience, and
            commitment to service continue to define the true spirit of JCI
            Lagos Coral.
          </p>

          <p className="text-gray-700 leading-relaxed">
            The year ahead calls us to move as One Pulse – united in purpose,
            aligned in vision, and connected by our shared values. Building on
            this unity, we are reminded of the need to continually Elevate
            ourselves: in leadership, in service, and in the standards we uphold
            as JCI members.
          </p>
        </div>

        {/* RIGHT SECTION */}
        <div className="text-gray-800 leading-relaxed space-y-6">
          <p>
            As we look forward, this new season presents us with an opportunity
            to Leverage our strengths, Integrate our diverse talents, and Focus
            our energy on what truly matters, so that together, we can Transform
            ideas into impact. This year calls us to deepen collaboration,
            strengthen unity, and remain Purpose-Driven in all that we do. When
            we are intentional and Purpose-Driven, our collective efforts do not
            just create change – they Amplify it.
          </p>

          <p>
            This year calls us to strengthen accountability, and show up for one
            another with clarity and commitment. Every member matters. Every
            contribution counts. When we work together with clarity and shared
            intent, we position ourselves to transform ideas into action and
            impact into lasting legacy.
          </p>

          <p>
            I look forward to a year of growth, service, and shared progress
            with each of you.
          </p>

          <p >
            As One Pulse, we LIFT: Leveraging strength, Integrating Purpose,
            Focusing action and Transforming lives. Here’s to a year of Unity,
            Purpose, and Amplified Impact.
          </p>

          <p>
            Happy New Year once again – and cheers to all that we will achieve
            together.
          </p>

          <div className="pt-6">
            <p className="font-semibold">With warm regards,</p>
            <p className="font-bold mt-2">JCIN Amb. Racheal C. John Emeyazia</p>
            <p className="text-sm font-bold">Local Organization President</p>

          
          </div>
        </div>
      </div>
      {/* lower part */}
      <div className=" max-w-7xl mx-auto px-6  gap-10 flex flex-col items-center justify-between sm:flex-row mb-4">
        {/* Website */}
        <div className="mb-4 sm:mb-0">
          <p>WWW.JCILAGOSCORAL.NIG</p>
        </div>
        {/* Logos */}
        <div className="flex items-center justify-between gap-4">
          <div className="w-20 h-20">
            <img src={logo1} className=" w-full h-full object-cover" alt="" />
          </div>
          <div className="w-20 h-20">
            <img
              src={logo2}
              className="rounded-2xl w-full h-full object-cover"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome2026;
