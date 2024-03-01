import Vector from "@/components/logos/Vector";
import { useRouter } from "next/router";

export default function Loading() {
  const router = useRouter();
  return (
    <div className="h-[1000px] flex flex-col justify-center items-center">
      <div className="flex items-center justify-center gap-4">
        <Vector />
        <p className="text-3xl">Geld</p>
      </div>
      <div className="flex flex-col items-center justify-center mt-[48px]">
        <span className="loading loading-spinner loading-lg"></span>
        <p className="mt-[20px]">Түр хүлээнэ үү.</p>
        <button
          className="bg-blue-700 w-[384px] h-[48px] rounded-xl text-white mt-[32px]"
          onClick={() => {
            router.push("/Step1");
          }}
        >
          Confirm
        </button>
      </div>
    </div>
  );
}
