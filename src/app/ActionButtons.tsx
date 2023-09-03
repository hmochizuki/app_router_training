"use client";

import { Button } from "@/components/atoms/Button";
import { useState } from "react";

function ThrowError(): JSX.Element {
  throw new Error("manual throw Error");
}

const ActionButtons: React.FC = () => {
  const [isError, setIsError] = useState(false)
  const onClickErrorButton = () => setIsError(true);
  return (
    <>
      <Button onClick={onClickErrorButton}>エラーを発生させる</Button>
      {isError ? <ThrowError /> : null}
    </>
  );
};

export default ActionButtons;
