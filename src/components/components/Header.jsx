import { IoPlanet } from "react-icons/io5";
export function Header() {
  return (
    <header className="flex p-4">
      <div className="flex flex-col gap-4 lg:flex justify-between items-center p-8 w-full">
        <p className="title font-bold text-xl text-white bg-blur backdrop-filter backdrop-blur-lg">
          Fotografías por Sofía{" "}
          <IoPlanet style={{ display: "inline", color: "#ff0000" }} />
        </p>
      </div>
    </header>
  );
}
