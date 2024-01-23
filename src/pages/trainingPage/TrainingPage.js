import React, { useEffect, useState } from "react";
import AdminHeader from "../../components/adminHeader/AdminHeader";
import Training from "../training/Training";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loading from "../../components/loading/Loading";

export default function TrainingPage() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [exercises, setExercises] = useState([]);

  const authToken = localStorage.getItem("auth_token");

  useEffect(() => {
    if (!authToken) {
      navigate("/");
    } else {
      setLoading(true);
      fetch("https://training.pythonanywhere.com/api/categories/", {
        headers: {
          Authorization: `Token ${authToken}`,
          Accept: "application/json",
        },
      })
        .then((data) => data.json())
        .then((data) => {
          console.log(data);
          setCategories(data);

          fetch(`https://training.pythonanywhere.com/api/exercises/`, {
            headers: {
              Authorization: `Token ${authToken}`,
              Accept: "application/json",
            },
          })
            .then((data) => data.json())
            .then((data) => {
              setExercises(data);
              setLoading(false);
            });
        });
    }
  }, [authToken]);

  console.log(categories);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <AdminHeader />
          <Training admin={true} data={categories} exercises={exercises} />
        </>
      )}
    </>
  );
}
