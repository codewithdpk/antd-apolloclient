import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMissionsRequest } from "../../../redux/actions/MissionsActions";

export const MissionsPage = () => {
  const dispatch = useDispatch();

  const { loading, missions, errorMessage } = useSelector(
    (state) => state.missions
  );

  useEffect(() => {
    dispatch(setMissionsRequest());
  }, []);
  return (
    <div>
      {loading && <div>Loading...</div>}
      Hiiiiii
    </div>
  );
};
