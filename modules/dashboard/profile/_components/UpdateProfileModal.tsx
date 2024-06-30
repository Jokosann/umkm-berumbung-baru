export default function UpdateProfileModal() {
  return (
    <div className="w-full h-full absolute inset-0 flex justify-center items-center bg-black/50">
      <div className="max-w-2xl">
        <input type="file" name="profile" id="profile" />
      </div>
    </div>
  );
}
