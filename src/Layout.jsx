import { Outlet, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";

const Layout = () => {
  const isLoggedIn = !!localStorage.getItem("user");

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return (
    // 1. กำหนดให้ div หลักเป็นกรอบอ้างอิง (relative)
    <div className="relative flex flex-col min-h-screen">
      
      {/* 2. สร้าง Wrapper ให้ Navbar ลอยอยู่ด้านบนสุด */}
      <div className="absolute top-0 left-0 w-full z-50 pt-5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <Navbar />
        </div>
      </div>

      {/* 3. "ดัน" เนื้อหาหลักทั้งหมดลงมา */}
      <main className="flex-grow"> {/* pt-28 คือการสร้างพื้นที่ว่างสำหรับ Navbar */}
        <Outlet /> {/* เนื้อหาของแต่ละหน้าจะถูกแสดงที่นี่ */}
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;