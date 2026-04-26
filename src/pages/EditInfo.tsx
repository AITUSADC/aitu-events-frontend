import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const EditInfo = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { name: initialName, barcode: initialBarcode, tg: initialTg } = location.state;

  const [name, setName] = useState<string>(initialName ?? "");
  const [tg, setTg] = useState<string>(initialTg ?? "");
  const [barcode, setBarcode] = useState<string>(initialBarcode ?? "");

  const handleSubmit = () => {
    navigate("/profile-confirm", { state: { name, barcode, tg } });
  };

  return (
    <div className="flex flex-col items-center bg-gray-50 min-h-screen font-['Lato',sans-serif]">
      {/* Header */}
      <div className="w-full max-w-97.5 flex items-center justify-between px-4 py-3 mt-2.5 mb-5">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
          <button
            className="bg-transparent border-none text-[22px] text-[#323232] cursor-pointer p-0 leading-none flex items-center justify-center"
            onClick={() =>
              navigate("/profile-confirm", { state: { name: initialName, barcode: initialBarcode, tg: initialTg } })
            }
          >
            ‹
          </button>
        </div>
        <span className="text-xs font-semibold text-[#080808]">
          Astana <span className="text-primary">IT</span> University
        </span>
        <img
          src="./src/assets/profile_confirmation/Language.png"
          alt="language"
          className="w-9 h-9 rounded-full object-cover"
        />
      </div>

      {/* Card */}
      <div className="bg-white rounded-3xl px-6 py-8 max-w-90 w-[90%] shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
        <h2 className="text-[32px] font-bold text-[#080808] mb-2 text-center">
          Личные данные
        </h2>
        <p className="text-sm text-[#474747] text-center leading-relaxed mb-7">
          Проверьте корректность информации
        </p>

        <div className="flex flex-col gap-3 mb-6">
          <input
            type="text"
            placeholder="Введите имя и фамилию"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full h-12 bg-[#f4f5f7] rounded-2xl px-4 text-sm text-[#323232] placeholder-[#9ca3af] border-none outline-none"
          />
          <input
            type="text"
            placeholder="tg @username"
            value={tg}
            onChange={(e) => setTg(e.target.value)}
            className="w-full h-12 bg-[#f4f5f7] rounded-2xl px-4 text-sm text-[#323232] placeholder-[#9ca3af] border-none outline-none"
          />
          <input
            type="text"
            placeholder="BarCode"
            value={barcode}
            onChange={(e) => setBarcode(e.target.value)}
            className="w-full h-12 bg-[#f4f5f7] rounded-2xl px-4 text-sm text-[#323232] placeholder-[#9ca3af] border-none outline-none"
          />
        </div>

        <button
          onClick={handleSubmit}
          className="w-full h-12 bg-[#0088ff] text-white border-none rounded-full text-base font-light cursor-pointer"
        >
          Применить изменения
        </button>
      </div>
    </div>
  );
};

export default EditInfo;
