import React, { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import "./style/OpeningModal.css";

export const OpeningModal = ({ ChangeModal, ModalState, ModalData }) => {
  const [modalRendered, isModalRendered] = useState(true);

  useEffect(() => {
    if (ModalState === false) {
      setTimeout(() => {
        isModalRendered(false);
      }, 1000);
    }

    // console.log(ModalData.hash);
    // fetch(ModalData.hash).then((res) => {
    //   console.log(res.url);
    // });
  }, [ModalState]);

  return (
    <>
      <div
        id="OModal"
        onClick={(e) => {
          if (e.target.id === "OModal") {
            ChangeModal(false);
          }
        }}
        className={`ModalBackground hidden sm:flex justify-center items-center ${
          ModalState ? "OModal-open" : "OModal-close"
        }`}
      >
        <div
          className={`ModalContainer w-[900px] h-[500px] aspect-auto relative bg-white rounded-xl overflow-hidden ${
            ModalState ? "OModal-Container-open" : "OModal-Container-close"
          }`}
        >
          <div className=" flex flex-col justify-start items-start">
            <div className="flex justify-center items-center w-full ">
              <div className="w-[80%] h-[80px] bg-pink-500 rounded-lg mt-7 flex justify-center items-center">
                <div className="text-[30px] font-bold">
                  {ModalData.registrationNumber}
                </div>
              </div>
            </div>

            <div className="ml-[90px] mt-[50px]">
              <div>{ModalData.verify ? "Verified" : "Not Verified"}</div>
            </div>

            <div className="ml-[90px] mt-[50px]">
              <div>{ModalData.hash? <a href={ModalData.hash}>`Hash :${ModalData.hash}`</a>:""}</div>
            </div>

            <div className="ml-[90px] mt-[50px]">
              <div>{Date(ModalData.timestamp*1000).toISOString()}</div>
              </div>
          </div>

          <button
            className="mr-3 mt-2 text-2xl font-bold absolute right-3 top-3 "
            onClick={() => {
              ChangeModal(false);
            }}
          >
            <MdClose size={35} className="text-black" />
          </button>
        </div>
      </div>
      {/* Modal for Mobile */}
      <div
        id="OModal"
        onClick={(e) => {
          if (e.target.id === "OModal") {
            ChangeModal(false);
          }
        }}
        className={`ModalBackground sm:hidden flex justify-center items-center ${
          ModalState ? "OModal-open" : "OModal-close"
        }`}
      >
        <div
          className={`ModalContainer w-[80vw] aspect-auto relative bg-white rounded-xl overflow-hidden ${
            ModalState ? "OModal-Container-open" : "OModal-Container-close"
          }`}
        >
          <img
            className="h-full w-full object-contain"
            src="/images/ModalMobile.jpg"
            alt=""
          />
          <button
            className="mr-3 mt-2 text-2xl font-bold absolute right-2 top-2 cursor-pointer "
            onClick={() => {
              ChangeModal(false);
            }}
          >
            <MdClose size={35} className="text-white cursor-pointer" />
          </button>
        </div>
      </div>
    </>
  );
};
