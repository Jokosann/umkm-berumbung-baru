import CategoryBox from '@/components/ui/CategoryBox';
import { LuSearch } from 'react-icons/lu';

import { Food, Drink, Hanger, Printer } from '@/common/assets/svg';
import { MdArrowForward } from 'react-icons/md';

export default function SearchHome() {
  return (
    <div className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 mt-[85px] xs:mt-[90px] sm:mt-[80px] md:mt-0 flex flex-col justify-center items-center md:px-8">
      <div className="z-10 w-full h-full md:w-fit md:h-fit px-5 py-4 sm:px-6 sm:py-6 md:p-0 flex flex-col justify-evenly md:gap-6 space-y-3 md:space-y-0 mx-auto mb-8 xs:mb-10 sm:mb-8">
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
      <label className="input input-bordered flex items-center gap-2 max-w-4xl w-full mb-6 shadow-sm">
        <LuSearch className="text-slate-500" />
        <input
          type="search"
          className="grow placeholder:text-sm"
          placeholder="Warung Makan - Bengkel - Tukang Pijat"
        />
      </label>
      <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
        <CategoryBox
          size={35}
          content={Food}
          alt="food"
          title="food"
          classnameContent="md:bg-white"
          classnameText="text-primary-color md:text-white"
        />
        <CategoryBox
          size={35}
          content={Drink}
          alt="drink"
          title="drink"
          classnameContent="md:bg-white"
          classnameText="text-primary-color md:text-white"
        />
        <CategoryBox
          size={35}
          content={Hanger}
          alt="food"
          title="clothes"
          classnameContent="md:bg-white"
          classnameText="text-primary-color md:text-white"
        />
        <CategoryBox
          size={35}
          content={Printer}
          alt="counter"
          title="counter"
          classnameContent="md:bg-white"
          classnameText="text-primary-color md:text-white"
        />
        <div className="flex flex-col justify-center items-center cursor-pointer">
          <div className="p-[6px] rounded-lg border border-slate-500/30 shadow-lg md:bg-white">
            <MdArrowForward className="text-3xl md:text-black" />
          </div>
          <span className="font-semibold text-center text-xs mt-1 text-primary-color md:text-white">
            other
          </span>
        </div>
      </div>
    </div>
  );
}
