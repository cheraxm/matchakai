import { useEffect, useRef, useState } from "react";
import { HiBars3 } from "react-icons/hi2";

export default function TopRightMenu({ onEdit, onLogout }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    // 1. ทำให้ container นี้เป็น `relative` เพื่อเป็นขอบเขตให้เมนู
    <div ref={ref} className="relative">
      <button
        aria-label="Menu"
        onClick={() => setOpen((v) => !v)}
        className="rounded p-2 text-black/90 hover:bg-black/5"
      >
        <HiBars3 className="text-3xl" />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 top-full mt-2 w-44 rounded-xl border border-black/10 bg-white/95 shadow-lg backdrop-blur p-1 z-10"
        >
          <button
            role="button"
            onClick={() => { setOpen(false); onEdit?.(); }}
            className="w-full rounded-lg px-3 py-2 text-left hover:bg-black/[0.06]"
          >
            Edit Profile
          </button>
          <button
            role="button"
            onClick={() => { setOpen(false); onLogout?.(); }}
            className="w-full rounded-lg px-3 py-2 text-left text-red-600 hover:bg-red-50"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}