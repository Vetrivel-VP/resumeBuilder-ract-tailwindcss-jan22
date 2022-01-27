import React, { useEffect, useState } from "react";
import { BiChevronRight } from "react-icons/bi";

const PersonalInfo = ({ setPersonalInfo }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [skypeId, setSkypeId] = useState("");

  useEffect(() => {
    setPersonalInfo({
      firstName: firstName,
      lastName: lastName,
      email: email,
      mobile: mobile,
      skypeId: skypeId,
    });
  }, [firstName, lastName]);

  return (
    <div className="flex flex-col justify-center items-center  w-11/12 h-full p-2">
      {/* name section */}
      <div className="flex justify-between items-center w-full my-4">
        <input
          type="text"
          placeholder="First Name"
          className="bg-white outline-none border-b  border-gray-300 focus:border-emerald-300 p-2 "
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Last Name"
          className="bg-white outline-none border-b  border-gray-300 focus:border-emerald-300 p-2 "
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <input
        type="email"
        placeholder="Email"
        className="bg-white outline-none border-b  border-gray-300 focus:border-emerald-300 p-2 w-full my-4"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <div className="flex justify-between items-center w-full my-4">
        <input
          type="text"
          placeholder="Contact No"
          className="bg-white outline-none border-b  border-gray-300 focus:border-emerald-300 p-2 "
          value={mobile}
          onChange={(e) => mobile(e.target.value)}
        />

        <input
          type="text"
          placeholder="Skype Id"
          className="bg-white outline-none border-b  border-gray-300 focus:border-emerald-300 p-2 "
          value={skypeId}
          onChange={(e) => skypeId(e.target.value)}
        />
      </div>

      <button
        type="button"
        className="p-2 mt-14 border border-gray-300 hover:shadow-md hover:border-emerald-400 transition-all duration-100 ease-in-out w-40 rounded-lg flex justify-center items-center text-gray-500 text-xl"
      >
        Next <BiChevronRight fontSize={25} />
      </button>
    </div>
  );
};

export default PersonalInfo;
