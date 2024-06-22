import ContentWrapper from '@/components/ui/ContentWrapper';
import { LuSearch } from 'react-icons/lu';

export default function SearchHome() {
  return (
    <div className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 mt-10 md:mt-0 flex flex-col justify-center items-center md:px-8">
      <div className="z-10 w-full h-full md:w-fit md:h-fit px-5 py-4 sm:px-6 sm:py-6 md:p-0 flex flex-col justify-evenly md:gap-6 space-y-3 md:space-y-0 mx-auto mb-8">
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
      <label className="input input-bordered flex items-center gap-2 max-w-4xl w-full">
        <LuSearch className="text-slate-500" />
        <input
          type="search"
          className="grow placeholder:text-sm"
          placeholder="Warung Makan - Bengkel - Tukang Pijat"
        />
      </label>
    </div>
  );
}
