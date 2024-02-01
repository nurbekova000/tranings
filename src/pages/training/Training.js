import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/button/Button";
import topImg from "../../assets/images/line-dec.png";
import tabsIcon from "../../assets/images/tabs-first-icon.png";
import "./style/training.css";

const Training = ({ admin = false, data, exercises }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTraning, setTraning] = useState(false);
  const navigate = useNavigate();
  const date = new Date();

  function navigateToExercises(categoryId, exercisesId, el) {
    const authToken = localStorage.getItem("auth_token");

    localStorage.setItem("exercises", JSON.stringify(el));

    localStorage.setItem("isEnrolment", JSON.stringify(!!exercises.length));

    const newObj = new FormData();

    newObj.append("exercise", exercisesId);

    fetch("https://training.pythonanywhere.com/api/enrollment/", {
      method: "POST",
      body: newObj,
      headers: {
        Authorization: `Token ${authToken}`,
        Accept: "application/json",
      },
    })
      .then((data) => data.json())
      .then((data) => {
        navigate(`/training/category/${categoryId}/exercises/${exercisesId}`);
      });
  }

  function navigateToExercises2(categoryId, exercisesId, el) {
    localStorage.setItem("exercises", JSON.stringify(el));

    navigate(`/training/category/${categoryId}/exercises/${exercisesId}`);
  }

  const yourExercises = exercises?.filter(
    (el) => el.category === data[currentIndex].id
  );

  return (
    <div>
      <div id="traning">
        <div className="container">
          <div
            className="training"
            style={{ padding: !admin ? "125px 0" : "0" }}
          >
            {!admin && (
              <div className="training-top">
                <h1>Тренировка</h1>
                <img src={topImg} alt="" />
                <p>Здесь выберите для себя!</p>
              </div>
            )}
            <div className="training-bottom flex  gap-[60px]">
              <div className="training-left flex flex-col gap-[20px]">
                {data?.map((el, index) => (
                  <div
                    onClick={() => {
                      setCurrentIndex(index);
                      setTraning(false);
                    }}
                    className="w-[350px] traning-item flex items-center cursor-pointer gap-3 p-[30px]"
                    key={index}
                  >
                    <img src={tabsIcon} alt="" />
                    <h4
                      className="capitalize text-[#232D39] text-[19px] font-semibold"
                      style={{
                        color: index === currentIndex ? "#ED563B" : "#232D39",
                      }}
                    >
                      {el.name}
                    </h4>
                  </div>
                ))}
                {!admin && (
                  <button className="py-[20px] bg-[#ED563B] text-[19px] text-white font-semibold rounded-md">
                    запись к нам!
                  </button>
                )}
              </div>
              {!isTraning && (
                <div className="flex flex-col gap-[20px] items-start">
                  <img
                    className="w-full"
                    src={data?.[currentIndex]?.photo}
                    alt=""
                  />
                  <h2 className="text-[#232D39] text-[23px] font-bold capitalize">
                    {data?.[currentIndex]?.name}
                  </h2>
                  <p
                    className="text-[#7A7A7A] text-[14px]"
                    style={{ lineHeight: "25px" }}
                  >
                    {data?.[currentIndex]?.description}
                  </p>
                  <Button onClick={() => setTraning(true)}>Начать</Button>
                </div>
              )}

              {isTraning && (
                <div className="flex items-start gap-3 ">
                  {yourExercises.length ? (
                    yourExercises.map((el, index) => {
                      const day = el.started_at.slice(el.started_at.length - 2);

                      const month = el.started_at.slice(
                        el.started_at.length - 5,
                        el.started_at.length - 3
                      );

                      return (
                        <div
                          className="w-[100px] py-5 px-5 bg-[#ED563B] text-white font-bold cursor-pointer"
                          style={{
                            background:
                              index === 0 ||
                              +month < date.getMonth() + 1 ||
                              +day <= date.getDate()
                                ? "#ED563B"
                                : "gray",
                            cursor:
                              index === 0 ||
                              +month < date.getMonth() + 1 ||
                              +day <= date.getDate()
                                ? "pointer"
                                : "no-drop",
                          }}
                          key={el.id}
                          onClick={() =>
                            index === 0 ||
                            +month < date.getMonth() + 1 ||
                            +day <= date.getDate()
                              ? navigateToExercises2(
                                  data?.[currentIndex]?.id,
                                  el?.id,
                                  el
                                )
                              : null
                          }
                        >
                          {el.day}
                        </div>
                      );
                    })
                  ) : !!data?.[currentIndex]?.exercises.length ? (
                    data?.[currentIndex]?.exercises?.map((el, index) => {
                      const isActive = exercises.some(
                        (exercise) => exercise.id === el.id
                      );

                      return (
                        <div
                          className="w-[100px] py-5 px-5 bg-[#ED563B] text-white font-bold cursor-pointer"
                          style={{
                            background: index === 0 ? "#ED563B" : "gray",
                            cursor: index === 0 ? "pointer" : "no-drop",
                          }}
                          key={el.id}
                          onClick={() =>
                            (isActive || index === 0) &&
                            navigateToExercises(
                              data?.[currentIndex]?.id,
                              el?.id,
                              el
                            )
                          }
                        >
                          {el.day}
                        </div>
                      );
                    })
                  ) : (
                    <h1 className="text-[30px]">Нет упражнений</h1>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;
