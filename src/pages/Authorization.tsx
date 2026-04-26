import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import type { AuthRouteState } from "../types";

const Authorization = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = (location.state ?? {}) as AuthRouteState;

  const [name, setName] = useState(state.name ?? "");
  const [barcode, setBarcode] = useState(state.barcode ?? "");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!name.trim() || !barcode.trim()) {
      setError("Пожалуйста, заполните все поля");
      return;
    }
    navigate("/profile-confirm", { state: { name, barcode } });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="px-4 max-w-md w-full">
        <h1 className="text-2xl font-semibold text-center text-gray-900 leading-snug mb-9">
          Будьте всегда в центре событий{" "}
          <span className="text-primary">AITU</span>
        </h1>

        <div className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Введите имя и фамилию"
            className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-white text-gray-900 text-sm placeholder-gray-400 outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all duration-200"
            value={name}
            onChange={(e) => { setName(e.target.value); setError(""); }}
          />
          <input
            type="text"
            placeholder="BarCode"
            className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-white text-gray-900 text-sm placeholder-gray-400 outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all duration-200"
            value={barcode}
            onChange={(e) => { setBarcode(e.target.value); setError(""); }}
          />
          {error && <p className="text-red-500 text-center text-sm">{error}</p>}

          <button
            type="button"
            className="mt-2 w-full py-4 rounded-2xl bg-primary hover:bg-blue-600 active:scale-95 text-white text-base font-semibold shadow-lg shadow-blue-200 hover:shadow-blue-300 transition-all duration-200"
            onClick={handleSubmit}
          >
            Войти в систему
          </button>
        </div>

        <p className="mt-5 text-xs text-gray-400 text-center leading-relaxed">
          Возникли трудности с авторизацией? Обратитесь в поддержку{" "}
          <a href="https://t.me/support" className="text-blue-500 font-medium hover:underline">
            @support_handle
          </a>
        </p>
      </div>
    </div>
  );
};

export default Authorization;
