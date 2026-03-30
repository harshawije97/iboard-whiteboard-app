import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { LoaderCircleIcon } from "lucide-react";
import React from "react";

interface SuccessAnimationProps {
  states: boolean;
}

function SuccessAnimation({ states }: SuccessAnimationProps) {
  return (
    <>
      {states && (
        <LoaderCircleIcon className="mr-1 size-4.25 animate-spin text-slate-700" />
      )}
      <span>
        <DotLottieReact
          src="https://lottie.host/66efdb46-ac4d-4cf7-a578-2aa313e95840/DbhgLVU6lu.lottie"
          autoplay
        />
        Board Created
      </span>
    </>
  );
}

export default SuccessAnimation;
