export function Card({ nameImg, image, isLoggedIn }) {
  return (
    <>
      <div className="cards overflow-hidden w-[250px] transition-transform duration-300 ease-in-out transform hover:scale-150 cursor-pointer bg-blur backdrop-filter backdrop-blur-lg p-4 border-2 rounded-lg border-blue-950">
        <h2 className="font-bold text-center text-white mb-6">{nameImg}</h2>
        <div className="">
          <img
            src={image}
            alt="Imagen astronomía"
            className="w-full h-[260px] object-contain "
          />
        </div>
      </div>
    </>
  );
}
