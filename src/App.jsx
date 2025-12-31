import headerImg from "./assets/Header.png";
import President from "./assets/President.jpg";
import logo1 from "./assets/lift logo.jpg";
import logo2 from "./assets/JCI logo.PNG";
import Welcome2026 from "./components/Welcome2026";
function App() {
  return (
    // <div>
    // {/* Header img */}
    // <div
    //   className="bg-cover bg-center"
    //   style={{ backgroundImage: `url(${headerImg})` }}
    // >
    //   <i>
    //     <h2 className="text-white text-center text-4xl sm:text-5xl md:text-7xl italics font-bold py-10 transition-all duration-500">
    //       Welcome to 2026
    //     </h2>
    //   </i>
    // </div>
    //   {/* content */}
    //   <div className="p-4 rounded-2xl text-justify sm:flex">
    //     <div className="bg-red-500">
    //       {" "}
    //       <div>
    //         <img src={President} className="rounded-2xl mb-6" alt="" />
    //       </div>
    //       <h2 className="font-bold text-xl mb-4">
    //         Dear Esteemed Members of JCI Lagos Coral,
    //       </h2>
    //       <p className="text-justify">
    //         As we step into this new year, I want to sincerely appreciate every
    //         member of this great organization. Your dedication, resilience, and
    //         commitment to service continue to define the true spirit of JCI
    //         Lagos Coral.
    //       </p>
    //       <p className="mb-4 text-blue-600">
    //         The year ahead calls us to move as One Pulse - united in purpose,
    //         aligned in vision, and connected by our shared values. Building on
    //         this unity, we are reminded of the need to continually Elevate
    //         ourselves: in leadership, in service, and in the standards, we
    //         uphold as JCI members.
    //       </p>
    //     </div>
    //     <div className="bg-green-700">
    //       {" "}
    //       <p className="mb-4">
    //         {" "}
    //         As we look forward, this new season presents us with an opportunity
    //         to Leverage our strengths, Integrate our diverse talents, and Focus
    //         our energy on what truly matters, so that together, we can Transform
    //         ideas into impact. This year calls us to deepen collaboration,
    //         strengthen unity, and remain Purpose-Driven in all that we do. When
    //         we are intentional and Purpose-Driven, our collective efforts do not
    //         just create change - they Amplify it.
    //       </p>
    //       <p className="mb-4">
    //         {" "}
    //         This year calls us to strengthen accountability, and show up for one
    //         another with clarity and commitment. Every member matters. Every
    //         contribution counts. When we work together with clarity and shared
    //         intent, we position ourselves to transform ideas into action and
    //         impact into lasting legacy.
    //       </p>
    //       <p className="mb-4">
    //         I look forward to a year of growth, service, and shared progress
    //         with each of you.
    //       </p>
    //       <p className="mb-4">
    //         {" "}
    //         As One Pulse, we LIFT: Leveraging strength, Integrating Purpose,
    //         Focusing action and Transforming lives. Here's to a year of Unity,
    //         Purpose, and Amplified Impact.
    //       </p>
    //       <p className="mb-4">
    //         Happy New Year once again - and cheers to all that we will achieve
    //         together.
    //       </p>
    //       <span className="mb-4"> With warm regards</span>
    //       <br />{" "}
    //       <span className="font-bold">
    //         JCIN Amb. Racheal C. John Emeyazia Local Organization President
    //       </span>
    //     </div>
    //   </div>
    //   {/* Lower section */}
    //   <div className="p-6 flex flex-col items-center justify-between sm:flex-row">
    //     {/* Website */}
    //     <div className="mb-4 sm:mb-0">
    //       <p>WWW.JCILAGOSCORAL.NIG</p>
    //     </div>
    //     {/* Logos */}
    //     <div className="flex items-center justify-between gap-4">
    //       <div className="w-20 h-20">
    //         <img src={logo1} className=" w-full h-full object-cover" alt="" />
    //       </div>
    //       <div className="w-20 h-20">
    //         <img
    //           src={logo2}
    //           className="rounded-2xl w-full h-full object-cover"
    //           alt=""
    //         />
    //       </div>
    //     </div>
    // //   </div>
    // </div>
    <Welcome2026 />
  );
}

export default App;
