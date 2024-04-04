import React, { useState } from "react";
import axios from "axios";

export const baseURL = "http://192.168.131.174:8000";

const Main = () => {
  const [ping, setPing] = useState<{ name: string }>();
  const [openScriptBox, setOpenScriptBox] = useState<boolean>(false);
  async function hitBroswer() {
    await axios({
      url: `${baseURL}/mac/browser`,
      method: "GET",
    });
  }

  async function hitMachine() {
    const res = await axios({
      url: `${baseURL}/mac/user`,
      method: "GET",
    });

    setPing(res?.data);
  }

  return (
    <main className="p-7">
      <section>
        <h1 className="text-2xl font-bold text-red-500">
          MACHINE AND TECH SERVER
        </h1>
        <button
          onClick={hitMachine}
          className="bg-green-500 border px-2 cursor-pointer"
        >
          Ping Machine
        </button>

        <button
          onClick={hitBroswer}
          className="bg-green-500 border px-2 cursor-pointer"
        >
          Open Browser
        </button>
      </section>

      {/* Add Script */}
      {}
      <section className="w-full h-full relative">
        <button
          onClick={() => setOpenScriptBox(true)}
          className="bg-yellow-500 border px-2 cursor-pointer"
        >
          Add script
        </button>

        {openScriptBox && (
          <div className="absolute p-4 text-center transform -translate-x-1/2 translate-y-1/4 border top-1/4 left-1/2  bg-zinc-200 shadow-xl w-[70vw] h-[60vh]">
            <textarea
              className="p-2 border border-zinc-400"
              cols={20}
              rows={6}
              placeholder="Enter Script"
            />
            <button
              onClick={() => setOpenScriptBox(false)}
              className="bg-red-500 border px-2 cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={hitBroswer}
              className="bg-green-500 border px-2 cursor-pointer"
            >
              Submit
            </button>
          </div>
        )}
      </section>

      <section>
        {ping ? (
          <div>
            <h2 className="text-lg font-bold">Ping Response:</h2>
            <p>{ping.name}</p>
          </div>
        ) : (
          <p>No ping response yet.</p>
        )}
      </section>
    </main>
  );
};

export default Main;
