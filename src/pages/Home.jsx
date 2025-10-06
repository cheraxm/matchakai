import Navbar from "../components/Navbar";
// import { Carousel, Typography, Button } from "@material-tailwind/react";
// import React from "react";

function Home() {
  return (
    <div>
      <section className='h-screen bg-cover bg-[url("assets/matchabg.png")] pt-14 pr-34 pl-34'>
        <div className="flex flex-col gap-35">
          <Navbar />
          <div className="flex flex-col justify-center gap-5 items-center">
            <h1 className='text-[96px] font-["Instrument_Serif"] text-[#fff]'>
              MatchaKai
            </h1>
            <div className="bg-[#7F746C] opacity-80 rounded-2xl w-[602px] h-[238px] flex justify-center items-center pt-7 pb-7 pr-3 pl-3">
              <p className='text-[20px] font-["Prompt"] text-[#fff] whitespace-pre-line text-center'>
                {
                  '"บ้านของคนรักมัทฉะ" ไม่ใช่แค่สถานที่ แต่คือความรู้สึก\nที่นี่คือที่ที่เรามารวมตัวกันด้วยความชอบเดียวกัน ทุกแก้วที่ชง\nทุกสูตรที่สร้างสรรค์ และทุกคำถามที่ต้องการคำตอบ ล้วนมีความหมาย\nบ้านของคนรักมัทฉะ จึงเป็นทั้งแหล่งความรู้ เป็นทั้งห้องครัว\nและเป็นทั้งห้องนั่งเล่นที่เราได้พักผ่อนและแบ่งปันเรื่องราวดีๆ ร่วมกัน'
                }
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#FFF4E7] h-[675px] pt-[100px] pb-[100px]">
        <h1 className='text-4xl font-["Instrument_Serif"] text-black'>
          Our Journal Spotlight: This Week
        </h1>
        <div>
          {/* <Carousel className="rounded-xl">
            <div className="relative h-full w-full">
              <img
                src="./assets/chasen.png"
                alt="image 1"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                <div className="w-3/4 text-center md:w-2/4">
                  <Typography
                    variant="h1"
                    color="white"
                    className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                  >
                    แปรงชงมัทฉะ (Chasen) สำคัญแค่ไหน? ทำไมถึงทำให้มัทฉะอร่อยขึ้น
                  </Typography>
                  <Typography
                    variant="lead"
                    color="white"
                    className="mb-12 opacity-80"
                  >
                    คุณเคยจิบมัทฉะสักถ้วยแล้วรู้สึกถึงความเนียนนุ่ม พร้อมชั้นฟองครีมละเอียดที่ลอยอยู่ด้านบนหรือไม่?
                  </Typography>
                  <div className="flex justify-center gap-2">
                    <Button size="lg" color="white">
                      อ่านเพิ่ม
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-full w-full">
              <img
                src="./assets/matchalatta.jpg"
                alt="image 2"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
                <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
                  <Typography
                    variant="h1"
                    color="white"
                    className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                  >
                    มัทฉะโทนถั่ว คืออะไร? ต่างจากโทนหวาน โทนหญ้าอย่างไร?
                  </Typography>
                  <Typography
                    variant="lead"
                    color="white"
                    className="mb-12 opacity-80"
                  >
                   ถ้าคุณชอบมัทฉะแต่ยังสับสนเรื่อง “โทนรส” บทความนี้จะช่วยให้ทุกอย่างชัดขึ้นในแก้วเดียว เราจะพาไปรู้จัก
                  </Typography>
                  <div className="flex gap-2">
                    <Button size="lg" color="white">
                      Explore
                    </Button>
                    <Button size="lg" color="white" variant="text">
                      Gallery
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-full w-full">
              <img
                src="./assets/ichibancha.jpg"
                alt="image 3"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
                <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
                  <Typography
                    variant="h1"
                    color="white"
                    className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                  >
                    Ichibancha คืออะไร? “First Flush” ที่คนรักมัทฉะต้องรู้!
                  </Typography>
                  <Typography
                    variant="lead"
                    color="white"
                    className="mb-12 opacity-80"
                  >
                   เคยสงสัยไหม? ชาเขียวญี่ปุ่นที่เต็มไปด้วยความหลากหลายและชื่อเรียกมากมาย และอาจจะสงสัยว่า “Ichibancha คือ?”
                  </Typography>
                  <div className="flex gap-2">
                    <Button size="lg" color="white">
                      Explore
                    </Button>
                    <Button size="lg" color="white" variant="text">
                      Gallery
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Carousel> */}
        </div>
      </section>
    </div>
  );
}

export default Home;
