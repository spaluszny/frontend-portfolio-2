import Navbar from "./Components/navbar";

export default function Home() {
  return (

    <div className="max-w-screen-xl mx-auto">
      <Navbar/>
      <div className="h-screen flex flex-col justify-center">
        <p className="font-sans text-8xl font-bold">SARAH PALUSZNY</p>
        <p className="font-sans text-5xl font-light">Front-End Engineer</p>
      </div>
      <div className="h-screen mx-auto w-fit">
        <p className="font-sans text-7xl font-bold pr-30 pl-30">PORTFOLIO</p>
        <hr className="my-10 h-1 w-full bg-black"></hr>
      </div>
    </div>

  );
}
