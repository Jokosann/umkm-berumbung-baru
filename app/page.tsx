export default function Home() {
  return (
    <div className="w-full">
      <div className="w-full min-h-screen flex items-center justify-center relative bg-center bg-cover custom-image">
        <div className="absolute inset-0 bg-black/65 z-[2]" />
        <div className="z-10">
          <p className="text-white text-3xl font-bold">hello</p>
        </div>
      </div>
      <div className="p-4 mb-60">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod unde natus recusandae placeat
          dolore obcaecati, molestiae illum iure tempora et accusamus accusantium harum distinctio,
          officiis alias veritatis repellendus? Deserunt, vitae!
        </p>
      </div>
    </div>
  );
}
