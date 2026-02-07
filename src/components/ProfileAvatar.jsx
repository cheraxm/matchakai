import React, { useState, useRef, useEffect } from "react";
import { HiPencil } from "react-icons/hi2";
import { useLocation } from "react-router-dom";

function ProfileAvatar({ initialImage, onImageChange }) {
  const [image, setImage] = useState(
    initialImage || "https://via.placeholder.com/150"
  );
  const inputFileRef = useRef(null);
  const locate = useLocation();
  console.log(locate);

  // useEffect จะทำงานเมื่อ initialImage ที่ส่งมาจาก parent เปลี่ยนไป
  // เพื่อให้แน่ใจว่ารูปภาพจะอัปเดตถ้าข้อมูลจาก parent มาทีหลัง
  useEffect(() => {
    if (initialImage) {
      setImage(initialImage);
    }
  }, [initialImage]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // 1. แสดงรูปภาพตัวอย่างทันที
      setImage(URL.createObjectURL(file));

      // 2. ส่งไฟล์ที่เลือกกลับไปให้ Parent Component (Profile.js)
      if (onImageChange) {
        onImageChange(file);
      }
    }
  };

  const handleEditClick = () => {
    // เมื่อคลิกปุ่มแก้ไข ให้ trigger การคลิกที่ input file
    inputFileRef.current.click();
  };

  return (
    <div className="relative group w-40 h-40">
      <img
        src={image}
        alt="Profile Avatar"
        className="w-full h-full rounded-full object-cover"
      />
      {/* Input สำหรับเลือกไฟล์ (ซ่อนไว้) */}
      {locate.pathname === "/editprofile" && (
        <input
          type="file"
          ref={inputFileRef}
          onChange={handleImageChange}
          className="hidden"
          accept="image/png, image/jpeg, image/gif"
        />
      )}
      {/* ปุ่มแก้ไขรูปโปรไฟล์ */}
      <button
        onClick={handleEditClick}
        aria-label="Edit profile picture"
        className="absolute bottom-2 right-2 bg-white rounded-full p-2 text-gray-700 hover:bg-gray-200 transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-md"
      >
        <HiPencil className="text-xl" />
      </button>
    </div>
  );
}

export default ProfileAvatar;
