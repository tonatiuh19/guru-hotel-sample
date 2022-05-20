import React from "react";
import { Button } from "react-bootstrap";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { saveId } from "../../store/actions/index";

const BackButton = ({ id = "" }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const dispatchAndBack = () => {
    dispatch(saveId(id));
    router.back();
  };

  return (
    <div className="mb-2">
      <Button onClick={() => dispatchAndBack()}>Back</Button>
    </div>
  );
};

export default BackButton;
