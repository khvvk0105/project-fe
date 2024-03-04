import Loading from "@/components/Loading";
import Step1 from "@/components/Step1";
import Vector from "@/components/logos/Vector";
import { useRouter } from "next/router";
import { useState } from "react";
import Step2 from "@/components/Step2";
import Step3 from "@/components/Step3";
import SignUp from "@/components/SignUp";

export default function signup() {
  const [showLoader, setShowLoader] = useState("signup");
  const [step, setStep] = useState(1);
  const router = useRouter();
  return (
    <div>
      <div
        className={`flex flex-row h-screen w-full ${
          showLoader == "signup" ? "block" : "hidden"
        }`}
      >
        <SignUp showLoader={showLoader} setShowLoader={setShowLoader} />
      </div>
      <div className={`${showLoader == "loading" ? "block" : "hidden"}`}>
        <Loading showLoader={showLoader} setShowLoader={setShowLoader} />
      </div>
      <div className={`${showLoader == "step1" ? "pt-10 block" : "hidden"}`}>
        <Step1
          setStep={setStep}
          step={step}
          showLoader={showLoader}
          setShowLoader={setShowLoader}
        />
      </div>
      <div className={`${showLoader == "step2" ? "pt-10 block" : "hidden"}`}>
        <Step2
          setStep={setStep}
          step={step}
          showLoader={showLoader}
          setShowLoader={setShowLoader}
        />
      </div>
      <div className={`${showLoader == "step3" ? "pt-10 block" : "hidden"}`}>
        <Step3
          setStep={setStep}
          step={step}
          showLoader={showLoader}
          setShowLoader={setShowLoader}
        />
      </div>
    </div>
  );
}
