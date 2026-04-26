import { useLocation, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import type { AuthRouteState } from "../types";
import LanguageImg from "../assets/profile_confirmation/Language.png";
import ProfileImg from "../assets/profile_confirmation/Profile.png";
import InfoImg from "../assets/profile_confirmation/Info.png";

const ProfileConfirm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { setUser } = useUser();
  const state = (location.state ?? {}) as AuthRouteState;
  const { name = "", barcode = "", tg = "" } = state;

  const handleConfirm = () => {
    setUser({ name, barcode, tg });
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="w-full max-w-97.5 flex items-center justify-between px-4 py-3 mt-2.5 mb-5">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
          <button
            className="bg-transparent border-none text-[22px] text-[#323232] cursor-pointer p-0 leading-none flex items-center justify-center"
            onClick={() => navigate("/auth", { state: { name, barcode, tg } })}
          >
            ‹
          </button>
        </div>
        <span className="text-xs font-semibold text-[#080808]">
          Astana <span className="text-primary">IT</span> University
        </span>
        <img src={LanguageImg} alt="language" className="w-9 h-9 rounded-full object-cover" />
      </div>

      {/* Card */}
      <div className="bg-white rounded-3xl px-6 py-7 max-w-90 w-[90%] shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
        <h2 className="text-[32px] font-bold text-[#080808] mb-2.5 text-center">
          Почти готово!
        </h2>
        <p className="w-full text-base text-[#474747] text-center leading-relaxed mb-6">
          Ваш профиль уже заполнен — проверьте информацию ниже. Мы автоматически
          синхронизировали ваше имя, BarCode, Telegram
        </p>

        <div className="flex flex-col gap-3 mb-5">
          {/* Row 1: Name | BarCode */}
          <div className="flex flex-row gap-3">
            <div className="flex-[6] bg-[#f0f6ff] rounded-2xl p-[14px_16px] relative overflow-hidden min-h-[90px] flex flex-col justify-end">
              <span className="text-[13px] text-[#323232] font-medium">Name</span>
              <span className="text-base font-bold text-[#080808]">{name}</span>
              <img src={ProfileImg} alt="" className="absolute right-0 -bottom-2.5 w-20 h-25" />
            </div>
            <div className="flex-[4] bg-[#79c0ff] rounded-2xl p-[14px_16px] relative overflow-hidden min-h-[90px] flex flex-col justify-end">
              <span className="text-[13px] text-[#dfe0e4] font-medium">BarCode</span>
              <span className="text-base font-bold text-[#f5f5f5]">{barcode}</span>
            </div>
          </div>

          {/* Row 2: Tg user | Language */}
          <div className="flex flex-row gap-3">
            <div className="flex-[4] bg-[#79c0ff] rounded-2xl p-[14px_16px] relative overflow-hidden min-h-[90px] flex flex-col justify-end">
              <span className="text-[13px] text-[#dfe0e4] font-medium">Tg user</span>
              <span className="text-base font-bold text-[#f5f5f5]">{tg || "—"}</span>
            </div>
            <div className="flex-[6] bg-[#f0f6ff] rounded-2xl p-[14px_16px] relative overflow-hidden min-h-[90px] flex flex-col justify-center items-start">
              <span className="text-base font-bold text-[#080808]">Язык</span>
              <img src={InfoImg} alt="" className="absolute right-0 bottom-0 w-[75px] h-[75px]" />
            </div>
          </div>
        </div>

        <button
          onClick={handleConfirm}
          className="w-full h-12 bg-primary text-white border-none rounded-full text-base font-light cursor-pointer mb-3"
        >
          Все верно, продолжить
        </button>
        <button
          onClick={() => navigate("/edit-info", { state: { name, barcode, tg } })}
          className="w-full h-12 bg-[#ecedf0] text-[#374151] border-none rounded-full text-[15px] font-light cursor-pointer"
        >
          Редактировать данные
        </button>
      </div>
    </div>
  );
};

export default ProfileConfirm;
