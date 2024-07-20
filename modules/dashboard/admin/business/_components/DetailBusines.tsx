// import { figtree } from '@/common/assets/font/font';
import Routerback from '@/components/ui/Routerback';
// import ListUserPerson from '@/modules/dashboard/profile/_components/ListUserPerson';
import { Business } from '@prisma/client';
import clsx from 'clsx';
import Image from 'next/image';
// import { IoIosArrowForward } from 'react-icons/io';

export default function DetailBusines({ busines }: { busines: Business | null }) {
  console.log(busines);

  return (
    <>
      <Routerback />
      <div className="pb-2">
        <div className="relative z-30 mx-auto h-24 w-24 rounded-full bg-white/30 p-1 flex justify-center items-center">
          <div className="relative w-full h-full flex justify-center items-center rounded-full overflow-hidden cursor-pointer">
            <Image
              src={busines?.profileBisnis as string}
              width={160}
              height={160}
              alt="profile"
              priority
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="mt-2 text-center">
          <h3 className="text-2xl font-semibold text-black dark:text-white">{busines?.nameBisnis}</h3>
          <p className="text-sm text-black dark:text-white">{busines?.username}</p>
        </div>

        {/* <div className="w-full mx-auto mt-4 border border-black/10 shadow-sm rounded-lg overflow-hidden">
          <ListUserPerson label="Profile Picture" value="Lorem ipsum dolor sit amet." height="h-20">
            <div className="w-14 h-14 rounded-full overflow-hidden cursor-pointer relative">
              <Image
                src={busines?.profileBisnis as string}
                width={100}
                height={100}
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>
          </ListUserPerson>
          <ListUserPerson label="ID" value={busines?.id as string} height="h-[70px]" />
          <ListUserPerson label="Name Busines" value={busines?.nameBisnis as string} height="h-[70px]" />
          <ListUserPerson label="Username" value={busines?.username as string} height="h-[70px]" />
          <ListUserPerson label="Alamat" height="h-[70px]" value={busines?.alamat as string} />
          <ListUserPerson label="Google Maps" height="h-[70px]" value={busines?.googleMaps as string} />
          <ListUserPerson label="Phone" height="h-[70px]" value={busines?.phone as string} />
          <ListUserPerson label="Whatsapp" height="h-[70px]" value={busines?.whatsapp as string} />
          <ListUserPerson label="Facebook" height="h-[70px]" value={busines?.facebook as string} />
          <ListUserPerson
            label="Url Facebook"
            height="h-[70px]"
            value={busines?.urlFacebook as string}
          />
          <ListUserPerson label="Instagram" height="h-[70px]" value={busines?.instagram as string} />
          <ListUserPerson
            label="Url Instagram"
            height="h-[70px]"
            value={busines?.urlInstagram as string}
          />
          <ListUserPerson label="Tiktok" height="h-[70px]" value={busines?.tiktok as string} />
          <ListUserPerson label="Url Tiktok" height="h-[70px]" value={busines?.urlTiktok as string} />
          <ListUserPerson label="Lazada" height="h-[70px]" value={busines?.lazada as string} />
          <ListUserPerson label="Url Lazada" height="h-[70px]" value={busines?.urlLazada as string} />
          <ListUserPerson label="Shopee" height="h-[70px]" value={busines?.shopee as string} />
          <ListUserPerson label="Url Shopee" height="h-[70px]" value={busines?.urlShopee as string} />
          <div
            className={`flex px-4 cursor-pointer hover:bg-slate-100 border-b border-b-black/10 h-fit`}
          >
            <div className="w-[80%] flex flex-col gap-1 py-4 items-start justify-center">
              <div className="w-full flex items-center justify-start">
                <p className="text-xs font-semibold text-slate-600">Descriptions</p>
              </div>
              <div className="w-full flex justify-start items-center">
                <pre
                  className={clsx(`text-slate-600 text-[15px] text-left ${figtree.className}`, {
                    'italic text-[13px] text-slate-400': !busines?.description,
                  })}
                >
                  {busines?.description ? busines.description : 'click here for add user data'}
                </pre>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}
