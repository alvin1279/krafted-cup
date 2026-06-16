interface serviceProp {
  imgurl: string;
}

export default function ServiceCards({ imgurl = "none" }: serviceProp) {
  return (
    <div className="w-full flex justify-center sm:h-[10dvh] md:h-[15dvh] lg:h-[20dvh]">
      <img src={imgurl} alt="service" className="h-full w-auto object-contain"/>
    </div>
  );
}
