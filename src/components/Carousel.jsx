import Carousel, { gotoSlide } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Matcha1 from "../assets/farmmatcha.jpg";
import Matcha2 from "../assets/Matcha_Header.jpg";
import Matcha3 from "../assets/chasen.jpg";
import Matcha4 from "../assets/MATCHA3.webp";
import Matcha5 from "../assets/matcha1.webp";
import { RiArrowDropRightLine } from "react-icons/ri";
import { RiArrowDropLeftLine } from "react-icons/ri";

const pic = [
  {
    img_url: Matcha1,
    title: "เลือกเกรดมัทฉะยังไง: Ceremonial vs Culinary",
    description:
      "อธิบายความต่างของใบเก็บต้นฤดู, กลิ่นหอม, สี, และการใช้งานที่เหมาะกับแต่ละเกรด",
  },
  {
    img_url: Matcha3,
    title: "อุณหภูมิน้ำที่ใช่ ทำให้รสชาติเนียนขึ้น",
    description: "ทำไมน้ำ 70–80°C ถึงเหมาะกว่าร้อนเดือดจัด และผลต่อความขมฝาด",
  },
  {
    img_url: Matcha2,
    title: "สัดส่วนผงต่อปริมาณน้ำ: เริ่มต้นที่ไหนดี",
    description: "สูตรพื้นฐานสำหรับ Usucha และการปรับให้เข้ากับรสนิยมส่วนตัว",
  },
  {
    img_url: Matcha4,
    title: "เทคนิคตีฟองแบบ M/Z ให้โฟมนุ่มฟู",
    description: "ความเร็ว จังหวะ และระยะเวลาในการตี เพื่อได้โฟมละเอียดสวย",
  },
  {
    img_url: Matcha5,
    title: "ร่อนผงก่อนละลาย ช่วยลดก้อนจับตัว",
    description: "เหตุผลที่ควรร่อน และเครื่องมือที่ใช้แทนตะแกรงได้ในบ้าน",
  },
];

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const CustomButtonGroup = ({ goToSlide, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest;
  return (
    <div className="flex justify-between">
      <button
        onClick={() => goToSlide(currentSlide - 1)}
        className="z-10 absolute left-1"
      >
        <RiArrowDropLeftLine className="w-10 h-10" />
      </button>
      <button
        onClick={() => goToSlide(currentSlide + 1)}
        className="z-10 absolute right-1"
      >
        <RiArrowDropRightLine className="w-10 h-10" />
      </button>
    </div>
  );
};

export const CarouselBox = () => {
  return (
    <div className="relative w-full">
      {" "}
      <Carousel responsive={responsive} infinite
        autoPlay
        showDots
        renderDotsOutside
        containerClass="w-full"
        customLeftArrow={<></>}
        customRightArrow={<></>}
        dotListClass="!mt-8 flex gap-2 justify-center"
        customButtonGroup={<CustomButtonGroup />}
        itemClass="px-0"
      >
        {pic.map((item, index) => (
          <div
            key={index}
            className="mx-10 self-center bg-white border-2 z-1
                       grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 px-6 md:px-8 py-6"
          >
            <img
              className="w-full h-[320px] md:h-[420px] object-cover"
              src={item.img_url}
              alt={item.title}
            />
            <div className="flex items-start">
              <div className="font-line">
                <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-3">
                  {item.title}
                </h3>
                <p className="text-base md:text-lg text-black/80">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
