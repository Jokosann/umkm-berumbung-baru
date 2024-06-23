import BgHome from './BgHome';
import SearchHome from './SearchHome';

export default async function Home() {
  return (
    <div className="mb-[1000px]">
      <div className="relative">
        <BgHome />
        <SearchHome />
      </div>
    </div>
  );
}
