import { CarouselBox } from "../components/Carousel";
import FeaturedRecipes from "../components/FeaturedRecipes";

function Home() {
  return (
    <div>
      <section className='bg-cover bg-center bg-[url("assets/matchabg.png")] px-8 pt-32 pb-36'>
        <div className="flex flex-col justify-center items-center text-center gap-6 mt-16 md:mt-24">
          <h1 className="text-7xl lg:text-8xl font-instrument text-[#FBF3E9] [text-shadow:0_2px_5px_rgba(0,0,0,0.8)]">
            MatchaKai
          </h1>
          <div className="bg-[#A9896C]/70 backdrop-blur-sm rounded-2xl w-full max-w-2xl p-6">
            <p className="text-lg lg:text-xl font-line text-white whitespace-pre-line">
              {
                '"บ้านของคนรักมัทฉะ" ไม่ใช่แค่สถานที่ แต่คือความรู้สึก\nที่นี่คือที่ที่เรามารวมตัวกันด้วยความชอบเดียวกัน ทุกแก้วที่ชง\nทุกสูตรที่สร้างสรรค์ และทุกคำถามที่ต้องการคำตอบ ล้วนมีความหมาย\nบ้านของคนรักมัทฉะ จึงเป็นทั้งแหล่งความรู้ เป็นทั้งห้องครัว\nและเป็นทั้งห้องนั่งเล่นที่เราได้พักผ่อนและแบ่งปันเรื่องราวดีๆ ร่วมกัน'
              }
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#FFF4E7] py-24 px-4 flex flex-col items-center gap-10 justify-center">
        <h1 className="text-5xl font-instrument text-black text-center">
          Our Journal Spotlight: This Week
        </h1>
        <div className="w-full max-w-4xl">
          <CarouselBox />
        </div>
      </section>

      <section className="bg-[#B5C196] w-full py-24 flex flex-col justify-center items-center gap-10">
        <h1 className="text-5xl font-instrument text-black text-center">
          Must-Try Matcha Recipes
        </h1>
        <FeaturedRecipes />
      </section>

      <section className='w-full bg-cover bg-center bg-[url("assets/Frame46.png")] py-36 px-4 sm:px-8'>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="text-white">
            <h1 className="text-5xl font-instrument text-left pb-6">
              Join the Conversation
            </h1>
            <p className="text-2xl font-line text-left">
              มาร่วมวงสนทนาได้เลย!
              <br />
              เราได้รวบรวมคำถามที่น่าสนใจประจำสัปดาห์นี้
            </p>
          </div>

          <div className="flex flex-col gap-8 mt-30">
            {[
              {
                id: 1,
                text: "ทำไมชงมัทฉะเองที่บ้านแล้วถึงขม ไม่หอมเหมือนที่คาเฟ่เลยคะ?",
              },
              { id: 2, text: "นมโอ๊ตยี่ห้อไหนเข้ากับมัทฉะที่สุดในตอนนี้?" },
              {
                id: 3,
                text: "ขอพิกัด Chasen (แปรงชงชา) คุณภาพดีสำหรับผู้เริ่มต้น",
              },
            ].map((question) => (
              <a
                key={question.id}
                href="#"
                className="relative text-white/80 font-line text-xl hover:text-white after:content-[''] after:absolute after:left-0 after:bottom-0 transition-colors after:h-px after:bg-black/70 after:w-11/12"
              >
                {question.text}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
