import React, { useEffect, useState } from "react";
import { BiChevronRight, BiCloudUpload, BiPlus } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

import {
  DatePicker,
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { alpha } from "@material-ui/core/styles";

const Builder = ({
  tab,
  setTab,
  setPersonalInfo,
  educationInfo,
  setEducationInfo,
  workInfo,
  setWorkInfo,
}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [skypeId, setSkypeId] = useState("");
  const [images, setImages] = useState([]);
  const [imageUrl, setImageUrl] = useState(null);

  //   Educational Info
  const [count, setCount] = useState(0);
  const [workCount, setWorkCount] = useState(0);

  const uploadImage = (e) => {
    console.log(e.target.files[0]);
    setImages(e.target.files[0]);
  };

  const addInfo = (info) => {
    if (info === "edu") {
      // prettier-ignore
      setEducationInfo([...educationInfo,{university: "",startDate: new Date(),endDate: new Date(),}]);
      setCount(count + 1);
    } else {
      // prettier-ignore
      setWorkInfo([...workInfo,{company: "", startDate: new Date(), endDate: new Date(),}]);
      setWorkCount(count + 1);
    }
  };

  const removeInfo = (index, info) => {
    if (info === "edu") {
      educationInfo.pop(index);
      setCount(count - 1);
      setEducationInfo(educationInfo);
    } else {
      workInfo.pop(index);
      setWorkCount(count - 1);
      setWorkInfo(workInfo);
    }
  };

  const updateInfo = (i, e, info) => {
    if (info === "edu") {
      const values = [...educationInfo];
      values[i][e.target.name] = e.target.value;
      setEducationInfo(values);
    } else {
      const values = [...workInfo];
      values[i][e.target.name] = e.target.value;
      setWorkInfo(values);
    }
  };

  const onEndDateChange = (date, i, info) => {
    if (info === "edu") {
      const values = [...educationInfo];
      values[i].endDate = date;
      setEducationInfo(values);
    } else {
      const values = [...workInfo];
      values[i].endDate = date;
      setWorkInfo(values);
    }
  };

  const onStartDateChange = (date, i, info) => {
    if (info === "edu") {
      const values = [...educationInfo];
      values[i].startDate = date;
      setEducationInfo(values);
    } else {
      const values = [...workInfo];
      values[i].startDate = date;
      setWorkInfo(values);
    }
  };

  useEffect(() => {}, [count, workCount]);

  //   To display images
  useEffect(() => {
    if (images.length < 1) return;
    let filereader = new FileReader();
    filereader.onload = () => {
      let fileUrl = filereader.result;
      setImageUrl(fileUrl);
    };
    filereader.readAsDataURL(images);
  }, [images]);

  useEffect(() => {
    setPersonalInfo({
      firstName: firstName,
      lastName: lastName,
      email: email,
      mobile: mobile,
      skypeId: skypeId,
      imageUrl: imageUrl,
    });
  }, [firstName, lastName, email, mobile, skypeId, images, imageUrl]);

  if (tab === "personal")
    return (
      <div className="flex flex-col justify-center items-end w-11/12 h-full p-2">
        {/* name section */}
        <div className="flex justify-between items-center w-full my-4">
          <div className="flex justify-center items-center flex-col border-2 border-dotted border-gray-300 w-60 min-w-210 h-60 rounded-lg">
            {!imageUrl ? (
              <label>
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="flex flex-col justify-center items-center cursor-pointer">
                    <p className="font-bold text-2xl">
                      <BiCloudUpload />
                    </p>
                    <p className="text-lg"> click to upload</p>
                  </div>
                </div>
                <input
                  type="file"
                  name="upload-image"
                  multiple
                  accept="image/*"
                  onChange={uploadImage}
                  className="w-0 h-0"
                />
              </label>
            ) : (
              <div className="relative h-full rounded-lg overflow-hidden">
                <img src={imageUrl} alt="" className="h-full w-full" />
                <button
                  type="button"
                  className="absolute bottom-3 right-3 p-3 rounded-full bg-white text-xl 
                  cursor-pointer outline-none hover:shadow-md duration-500 transition-all ease-in-out"
                  onClick={() => setImageUrl(null)}
                >
                  <MdDelete />
                </button>
              </div>
            )}
          </div>
          <div className="flex flex-col justify-between items-center w-full p-4">
            <input
              type="text"
              placeholder="First Name"
              className="bg-white w-full my-4 outline-none border-b  border-gray-300 focus:border-emerald-300 p-2 "
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />

            <input
              type="text"
              placeholder="Last Name"
              className="bg-white w-full my-4 outline-none border-b  border-gray-300 focus:border-emerald-300 p-2 "
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-white w-full my-4 outline-none border-b  border-gray-300 focus:border-emerald-300 p-2  "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="flex justify-between items-center w-full my-4">
          <input
            type="text"
            placeholder="Contact No"
            className="bg-white w-full mx-2 outline-none border-b  border-gray-300 focus:border-emerald-300 p-2 "
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />

          <input
            type="text"
            placeholder="Skype Id"
            className="bg-white w-full mx-2 outline-none border-b  border-gray-300 focus:border-emerald-300 p-2 "
            value={skypeId}
            onChange={(e) => setSkypeId(e.target.value)}
          />
        </div>

        <button
          type="button"
          className="p-2 mt-14 border bg-indigo-600 hover:shadow-lg  transition-all duration-100 ease-in-out w-40 rounded-lg flex justify-center items-center text-white text-xl"
          onClick={() => setTab("education")}
        >
          Next <BiChevronRight fontSize={25} />
        </button>
      </div>
    );

  if (tab === "education")
    return (
      <div className="flex flex-col justify-center items-end w-11/12 h-full p-2 cursor-pointer">
        <div className="w-full flex justify-between items-center p-4">
          <p>Educational Informations</p>
          <i
            onClick={() => addInfo("edu")}
            className="w-10 h-10 flex justify-center items-center bg-gray-400 rounded-lg text-white hover:bg-gray-800 hover:shadow-lg"
          >
            <BiPlus fontSize={25} />
          </i>
        </div>
        {educationInfo.map((data, i) => (
          <div
            key={i}
            className="relative w-full flex flex-col justify-center items-start p-4 border border-gray-300 rounded-lg hover:border-gray-500 hover:shadow-lg duration-100 transition-all ease-in-out my-2"
          >
            <input
              type="text"
              placeholder="University Name"
              name="university"
              className="bg-white w-full my-4 outline-none border-b  border-gray-300 focus:border-emerald-300 p-2 "
              value={data?.university}
              onChange={(e) => {
                updateInfo(i, e, "edu");
              }}
            />
            <div className="w-full grid md:grid-cols-2 gap-1 grid-cols-1">
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  autoOk
                  variant="inline"
                  inputVariant="outlined"
                  label="From"
                  format="MM/dd/yyyy"
                  value={data?.startDate}
                  InputAdornmentProps={{ position: "start" }}
                  onChange={(date) => {
                    onStartDateChange(date, i, "edu");
                  }}
                />
              </MuiPickersUtilsProvider>

              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  autoOk
                  variant="inline"
                  inputVariant="outlined"
                  label="To"
                  format="MM/dd/yyyy"
                  value={data?.toDate}
                  InputAdornmentProps={{ position: "start" }}
                  onChange={(date) => {
                    onEndDateChange(date, i, "edu");
                  }}
                />
              </MuiPickersUtilsProvider>
            </div>

            <MdDelete
              className="absolute top-2 right-2 cursor-pointer "
              onClick={() => removeInfo(i, "edu")}
              fontSize={20}
            />
          </div>
        ))}
      </div>
    );
  if (tab === "work")
    return (
      <div className="flex flex-col justify-center items-end w-11/12 h-full p-2 cursor-pointer">
        <div className="w-full flex justify-between items-center p-4">
          <p>Work Experience</p>
          <i
            onClick={() => addInfo("work")}
            className="w-10 h-10 flex justify-center items-center bg-gray-400 rounded-lg text-white hover:bg-gray-800 hover:shadow-lg"
          >
            <BiPlus fontSize={25} />
          </i>
        </div>
        {workInfo.map((data, i) => (
          <div
            key={i}
            className="relative w-full flex flex-col justify-center items-start p-4 border border-gray-300 rounded-lg hover:border-gray-500 hover:shadow-lg duration-100 transition-all ease-in-out my-2"
          >
            <input
              type="text"
              placeholder="University Name"
              name="company"
              className="bg-white w-full my-4 outline-none border-b  border-gray-300 focus:border-emerald-300 p-2 "
              value={data?.company}
              onChange={(e) => {
                updateInfo(i, e, "work");
              }}
            />
            <div className="w-full grid md:grid-cols-2 gap-1 grid-cols-1">
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  autoOk
                  variant="inline"
                  inputVariant="outlined"
                  label="From"
                  format="MM/dd/yyyy"
                  value={data?.startDate}
                  InputAdornmentProps={{ position: "start" }}
                  onChange={(date) => {
                    onStartDateChange(date, i, "work");
                  }}
                />
              </MuiPickersUtilsProvider>

              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  autoOk
                  variant="inline"
                  inputVariant="outlined"
                  label="To"
                  format="MM/dd/yyyy"
                  value={data?.toDate}
                  InputAdornmentProps={{ position: "start" }}
                  onChange={(date) => {
                    onEndDateChange(date, i, "work");
                  }}
                />
              </MuiPickersUtilsProvider>
            </div>

            <MdDelete
              className="absolute top-2 right-2 cursor-pointer "
              onClick={() => removeInfo(i, "work")}
              fontSize={20}
            />
          </div>
        ))}
      </div>
    );
};

export default Builder;
