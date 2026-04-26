import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { ProfileIcon } from "../components/icons";

const Profile = () => {
  const { user, setUser } = useUser();
  const navigate = useNavigate();

  if (!user) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center gap-4 px-6 pb-24">
        <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
          <ProfileIcon />
        </div>
        <p className="text-gray-500 text-sm text-center">
          Вы не авторизованы
        </p>
        <button
          onClick={() => navigate("/auth")}
          className="mt-2 px-8 py-3 rounded-2xl bg-primary text-white text-sm font-semibold shadow-md shadow-blue-200 hover:bg-blue-600 transition-colors"
        >
          Войти в систему
        </button>
      </div>
    );
  }

  const handleLogout = () => {
    setUser(null);
    navigate("/auth");
  };

  const fields = [
    { label: "Имя", value: user.name },
    { label: "BarCode", value: user.barcode },
    { label: "Telegram", value: user.tg || "—" },
  ];

  return (
    <div className="flex-1 overflow-y-auto pb-24 px-4">
      <h1 className="text-2xl font-semibold text-gray-900 mt-8 mb-6">Профиль</h1>

      {/* Avatar */}
      <div className="flex flex-col items-center mb-6">
        <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center text-primary mb-3">
          <ProfileIcon />
        </div>
        <p className="text-lg font-bold text-gray-900">{user.name}</p>
      </div>

      {/* Info card */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-4">
        {fields.map(({ label, value }, i) => (
          <div
            key={label}
            className={`flex items-center justify-between px-4 py-4 ${i < fields.length - 1 ? "border-b border-gray-100" : ""}`}
          >
            <span className="text-sm text-gray-500">{label}</span>
            <span className="text-sm font-semibold text-gray-900">{value}</span>
          </div>
        ))}
      </div>

      {/* Edit button */}
      <button
        onClick={() => navigate("/edit-info", { state: { name: user.name, barcode: user.barcode, tg: user.tg } })}
        className="w-full py-3.5 rounded-2xl bg-gray-100 text-gray-700 text-sm font-semibold hover:bg-gray-200 transition-colors mb-3"
      >
        Редактировать данные
      </button>

      {/* Logout */}
      <button
        onClick={handleLogout}
        className="w-full py-3.5 rounded-2xl bg-red-50 text-red-500 text-sm font-semibold hover:bg-red-100 transition-colors"
      >
        Выйти из аккаунта
      </button>
    </div>
  );
};

export default Profile;
