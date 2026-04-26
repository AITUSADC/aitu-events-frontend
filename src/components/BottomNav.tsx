import type { JSX } from "react";
import { ProfileIcon, CalendarIcon, TicketIcon } from "./icons";

export type Tab = "profile" | "events" | "tickets";

interface BottomNavProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

const navItems: { tab: Tab; label: string; Icon: () => JSX.Element }[] = [
  { tab: "profile", label: "Профиль",    Icon: ProfileIcon },
  { tab: "events",  label: "Ивенты",     Icon: CalendarIcon },
  { tab: "tickets", label: "Мои билеты", Icon: TicketIcon },
];

const BottomNav = ({ activeTab, setActiveTab }: BottomNavProps) => (
  <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-sm bg-white border-t border-gray-100 flex items-center justify-around px-6 py-3 z-50">
    {navItems.map(({ tab, label, Icon }) => (
      <button
        key={tab}
        onClick={() => setActiveTab(tab)}
        className={`flex flex-col items-center gap-1 transition-colors duration-150 ${
          activeTab === tab ? "text-primary" : "text-gray-400 hover:text-gray-600"
        }`}
      >
        <Icon />
        <span className="text-xs font-medium">{label}</span>
      </button>
    ))}
  </div>
);

export default BottomNav;
