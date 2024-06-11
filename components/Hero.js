import Image from "next/image";
import ButtonLead from "./ButtonLead";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20">
      <div className="flex flex-col gap-10 items-center justify-center text-center">


        <h1 className="lg:text-7xl sm:text-4xl font-extrabold">
          meet people, have fun
        </h1>
        <p className="opacity-80">
          a new way to meet queer people in your neighborhood. meet online, have fun offline.
        </p>
        <ButtonLead/>

      </div>
      {/* <div className="lg:w-full">
        <Image
          src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80"
          alt="Product Demo"
          className="w-full"
          priority={true}
          width={500}
          height={200}
        />
      </div> */}
    </section>
  );
};

export default Hero;
