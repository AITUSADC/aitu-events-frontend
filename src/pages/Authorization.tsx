const Authorization = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="px-4">

        {/* Title */}
        <h1 className="text-2xl font-semibold text-center text-gray-900 leading-snug mb-9">
          Будьте всегда в центре событий{" "}
          <span className="text-primary">AITU</span>
        </h1>

        {/* Fields */}
        <div className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Введите имя и фамилию"
            className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-white text-gray-800 text-sm placeholder-gray-400 outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all duration-200"
          />

          <input
            type="text"
            placeholder="BarCode"
            className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-white text-gray-800 text-sm placeholder-gray-400 outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all duration-200"
          />

          <button
            type="button"
            className="mt-2 w-full py-4 rounded-2xl bg-primary hover:bg-blue-600 active:scale-95 text-white text-base font-semibold shadow-lg shadow-blue-200 hover:shadow-blue-300 transition-all duration-200"
          >
            Войти в систему
          </button>
        </div>

        {/* Help text */}
        <p className="mt-5 text-xs text-gray-400 text-center leading-relaxed">
          Возникли трудности с авторизацией? Обратитесь в поддержку для быстрого решения вопроса{" "}
          <a href="#" className="text-blue-500 font-medium hover:underline">
            @support_handle
          </a>
        </p>
      </div>
    </div>
  );
};

export default Authorization;