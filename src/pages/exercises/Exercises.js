import React, { useEffect, useState } from "react";
import AdminHeader from "../../components/adminHeader/AdminHeader";
import { useParams, Link } from "react-router-dom";
import parse from 'html-react-parser';
import Loading from "../../components/loading/Loading";

const defaultImage =
  "data:image/webp;base64,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";

export default function Exercises() {
  const { categoryId, exercisesId } = useParams();
  const [exercises, setExercises] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [oneExercises, setOneExercises] = useState(null);
  const [exercise, setExercise] = useState(null);
  const authToken = sessionStorage.getItem("auth_token");
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setExercises(JSON.parse(sessionStorage.getItem("exercises")));

    // if (exercisesId === "1") {
    fetch(`https://training.pythonanywhere.com/api/exercises/${exercisesId}`, {
      headers: {
        Authorization: `Token ${authToken}`,
        Accept: "application/json",
      },
    })
      .then((data) => data.json())
      .then((data) => {
        setExercise(data);
        setLoading(false)
      });
    // }
  }, []);

  return (
    <>
      <AdminHeader />
      {isLoading && <Loading/>}

      <div className="container">
        <Link to="/training" className="text-2xl underline font-bold">
          Назад
        </Link>
        <div className=" flex  gap-[120px] mt-8">
          <div className="flex flex-col gap-2">
            {exercise?.exercise_sets?.map((el, index) => (
              <div
                className="w-[370px] bg-[#ED563B] px-4 py-3 flex justify-center cursor-pointer"
                onClick={() => {
                  setShowModal(true);
                  setOneExercises(el);
                }}
                key={index}
              >
                <h1 className="text-3xl font-bold text-white">
                  {el.quantity} {el.name}
                </h1>
              </div>
            ))}
          </div>
          <div className="w-[577px] py-[50px] px-[30px] bg-[#FFEAEA]">
            <h2 className="text-[28px] font-bold pb-3">
              {exercise?.nutritions?.name}
            </h2>
            <img
              src={exercise?.nutritions?.photo || defaultImage}
              alt=""
              className="w-full pb-4"
            />
            <p>{parse(`${exercise?.nutritions?.description}`)}</p>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed w-full min-h-screen top-0 left-0 bg-[#0000004D] flex justify-center items-center">
          <div className="max-w-[860px] w-full py-10 bg-white">
            <center className="flex flex-col items-center ">
              <img
                src={oneExercises?.photo || defaultImage}
                alt=""
                className="max-w-[600px] w-full"
              />
              <h1 className="text-[60px] ">{oneExercises?.quantity}</h1>
              <h2 className="text-[33px] "> {oneExercises?.name}</h2>
              <input type="checkbox" className="my-7 w-10 h-10" />
              <button
                className="py-3 px-5 rounded-md bg-gray-500 text-white font-bold"
                onClick={() => setShowModal(false)}
              >
                Закрыть
              </button>
            </center>
          </div>
        </div>
      )}
    </>
  );
}
