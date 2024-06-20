export default function Home() {
  return (
    <div className="w-full h-[180px] mt-24 sm:mt-28 mx-auto rounded-xl shadow-lg overflow-hidden md:min-h-screen md:mt-0 md:rounded-none flex items-center justify-center relative bg-center bg-cover custom-image mb-[1000px]">
      <div className="absolute inset-0 bg-black/60 z-[2]" />
      <div className="z-10 w-full h-full md:w-fit md:h-fit px-5 py-4 sm:px-6 sm:py-6 flex flex-col justify-evenly md:gap-6">
        <div>
          <p className="text-white text-xl sm:text-2xl md:text-5xl md:text-center font-[800]">
            Selamat Datang
          </p>
          <p className="text-white text-xl sm:text-2xl md:text-5xl md:text-center font-[800]">
            Di Kampung Berumbung Baru
          </p>
        </div>
        <p className="text-white text-sm sm:text-sm md:text-lg md:text-center md:w-3/4 md:mx-auto font-medium md:font-semibold">
          Sumber informasi terbaru tentang UMKM (Usaha Mikro Kecil dan Menengah) di Kampung Berumbung
          Baru
        </p>
      </div>
    </div>
  );
}
