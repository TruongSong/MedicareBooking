import React from "react";
import { formatDate } from "../../utils/formatDate";
const DoctorAbout = () => {
  return (
    <div>
      <div>
        <h3
          className="text-[20px] leading-[30px] text-headingColor
            font-semibold flex items-center gap-2"
        >
          About of
          <span
            className="text-irisBlueColor font-bold text-[24px]
                leading-9"
          >
            Monkey d Kelvin
          </span>
        </h3>
        <p className="text__para">
          Hi Muhib I would like to express my sincere gratitude for the valuable
          learning experience you have provided. I am eagerly looking forward to
          the next part. Please take good care of yourself.yay! thanks for the
          awesome content! please keep the remaining parts coming as fast as
          possible! I got to know and subscribe to your channel through the
          first part of this video and I'm hoping for more content like this!
        </p>
      </div>

      <div className="mt-12">
        <h3
          className="text-[20px] leading-[30px] text-headingColor
        font-semibold"
        >
          Education
        </h3>
        <ul className="pt-4 md:p-5">
          <li
            className="flex flex-col sm:flex-row sm:justify-between
            sm:items-end md:gap-5 mb-[30px]"
          >
            <div>
              <span
                className="text-irisBlueColor text-[15px] 
                    leading-6 font-semibold"
              >
                {formatDate("4-18-2018")}- {formatDate("3-25-2024")}
              </span>
              <p
                className="text-[16px] leading-6 font-medium
                    text-textColor"
              >
                PHD in Kelvin
              </p>
            </div>
            <p
              className="text-[14px] leading-5 font-medium
                text-textColor"
            >
              New Apollo Hospital, New York.
            </p>
          </li>
          <li
            className="flex flex-col sm:flex-row sm:justify-between
            sm:items-end md:gap-5 mb-[30px]"
          >
            <div>
              <span
                className="text-irisBlueColor text-[15px] 
                    leading-6 font-semibold"
              >
                {formatDate("12-25-2021")}-{formatDate("11-4-2024")}
              </span>
              <p
                className="text-[16px] leading-6 font-medium
                    text-textColor"
              >
                PHD in Kelvin
              </p>
            </div>
            <p
              className="text-[14px] leading-5 font-medium
                text-textColor"
            >
              New Apollo Hospital, New York.
            </p>
          </li>
        </ul>
      </div>

      <div className="mt-12">
        <h3
          className="text-[20px] leading-[30px] text-headingColor
        font-semibold"
        >
          Experience
        </h3>
        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
            <li className="p-4 rounded bg-[#fff9ea]">
                <span className="text-yellowColor text-[15px]
                leading-6 font-semibold">
                    {formatDate('07-04-2015')}-{formatDate('02-05-2022')}
                </span>
                <p className="text-[16px] leading-6 font-medium 
                text-textColor">
                    Mr. Kelvin
                </p>

                <p className="text-[14px] leading-5 font-medium 
                text-textColor">
                    New Apollo Hospital, New York.
                </p>
            </li>
            <li className="p-4 rounded bg-[#fff9ea]">
                <span className="text-yellowColor text-[15px]
                leading-6 font-semibold">
                    {formatDate('07-04-2015')}-{formatDate('02-05-2022')}
                </span>
                <p className="text-[16px] leading-6 font-medium 
                text-textColor">
                    Mr. Kelvin
                </p>

                <p className="text-[14px] leading-5 font-medium 
                text-textColor">
                    New Apollo Hospital, New York.
                </p>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default DoctorAbout;
