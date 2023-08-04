import { useEffect, useState } from "react";

function App() {
  const [dati, setDati] = useState([]);
  useEffect(() => {
    (async function () {
      let risp = await fetch("/data.json");
      let obj = await risp.json();
      setDati(obj);
    })();
  }, []);
  console.log(dati);

  return (
    <>
      <div className="w-full bg-white md:rounded-2xl md:shadow-2xl md:w-[740px] md:flex md:flex-row md:flex-nowrap m-auto md:mt-[100px]">
        <div
          className="text-white bg-gradient-to-b from-[#6743FF] to-[#312CEA] 
        rounded-br-xl rounded-bl-xl px-[75px] pt-7 pb-10 flex flex-col items-center justify-center md:w-1/2"
        >
          <p className="text-center font-medium mb-6 text-lg md:mb-6">
            Your Result
          </p>
          <div
            className="rounded-[50%] bg-gradient-to-b from-[#4D22C9] p-5 w-[140px] h-[140px]
          flex flex-col justify-center items-center mb-5  md:mb-5 md:w-[185px] md:h-[185px]"
          >
            <h3 className="text-center text-6xl font-bold mb-2">76</h3>
            <span className="text-center text-slate-400 font-medium">
              of 100
            </span>
          </div>
          <p className="text-center font-bold text-3xl mb-3  md:mb-6">Great</p>
          <p className="text-center text-slate-300 max-w-[220px]">
            Your scored higher then 65% of the people who have taken these
            tests.
          </p>
        </div>
        <div className="p-[30px] flex flex-col items-start justify-center md:w-1/2">
          <h3 className="text-slate-800 font-medium text-lg mb-5">Summary</h3>
          {dati.map((obj, index) => {
            console.log(obj.category);
            let colore = {};
            if (obj.category === "Reaction") {
              colore = {
                color: "#CB4548",
                background: "#FFF6F5",
              };
            } else if (obj.category === "Memory") {
              colore = {
                color: "#EBB33C",
                background: "#FFF8F8",
              };
            } else if (obj.category === "Verbal") {
              colore = {
                color: "#22846B",
                background: "#F2FBFA",
              };
            } else if (obj.category === "Visual") {
              colore = {
                color: "#222F8F",
                background: "#F3F3FD",
              };
            } else {
              colore = {
                color: "#000",
              };
            }
            return (
              <div
                key={index}
                style={colore}
                className="bg-[#FFF6F5] w-full rounded-lg p-[15px] flex justify-between mb-[15px] last-of-type:mb-[0px]"
              >
                <div className="flex">
                  <img className="mr-3" src={obj.icon} alt="" />
                  <p style={colore} className="font-medium">
                    {obj.category}
                  </p>
                </div>
                <p className="text-slate-400">
                  <span className="font-medium text-slate-800">
                    {obj.score}
                  </span>{" "}
                  / <span className="text-slate-400">100</span>
                </p>
              </div>
            );
          })}

          <button className="bg-[#303B59] text-white p-[17px] w-full rounded-3xl font-semibold text-xl mt-7">
            Continue
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
