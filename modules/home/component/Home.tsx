import Img from '@/common/libs/image/image';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="w-full">
      <div className="w-full min-h-screen relative">
        <div className="w-full h-full absolute top-0 left-0 z-0">
          <Image src={Img.BgHome} alt="bg" layout="fill" objectFit="cover" priority />
        </div>
        <div className="w-full h-full flex items-center justify-center absolute top-0 left-0 z-10">
          <p className="text-red-500 text-3xl font-bold">hello</p>
        </div>
      </div>

      <div className="relative z-20 p-4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod unde natus recusandae placeat
          dolore obcaecati, molestiae illum iure tempora et accusamus accusantium harum distinctio,
          officiis alias veritatis repellendus? Deserunt, vitae!
        </p>
      </div>
    </div>
  );
}
