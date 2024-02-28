import Vector from "@/components/logos/Vector";

export default function Loading() {
  return (
    <div className="h-[1000px] flex flex-col justify-center items-center">
      <div className="flex items-center justify-center gap-4">
        <Vector />
        <p className="text-3xl">Geld</p>
      </div>
      <div className="flex flex-col items-center justify-center mt-[48px]">
        <span className="loading loading-spinner loading-lg"></span>
        <p className="mt-[20px]">Түр хүлээнэ үү.</p>
      </div>
    </div>
  );
}
