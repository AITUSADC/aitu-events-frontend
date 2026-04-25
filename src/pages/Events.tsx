import { useState, useRef, useEffect, useCallback } from "react";
import { ClockIcon, PinIcon, SearchIcon } from "../components/icons";


const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const events = [
  {
    id: 1,
    title: "Event",
    date: "24 марта в 16:00",
    location: "AITU Hall",
    description: "День открытых дверей Astana IT University",
    registered: true,
  },
  {
    id: 2,
    title: "Event",
    date: "24 марта в 16:00",
    location: "AITU Hall",
    description: "День открытых дверей Astana IT University",
    registered: false,
  },
  {
    id: 3,
    title: "Event",
    date: "24 марта в 16:00",
    location: "AITU Hall",
    description: "День открытых дверей Astana IT University",
    registered: false,
  },
];

const COPIES = 5;
const VISIBLE = 7; // how many months shown at once

const MonthSelector = ({
  activeMonth,
  setActiveMonth,
}: {
  activeMonth: string;
  setActiveMonth: (m: string) => void;
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isScrolling = useRef(false);
  const [itemWidth, setItemWidth] = useState(0);

  const repeated = Array.from({ length: COPIES }, () => months).flat();
  const totalItems = repeated.length;
  const middleCopyOffset = Math.floor(COPIES / 2) * months.length;

  // Measure parent width and derive itemWidth so exactly VISIBLE items fit
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const calculate = () => setItemWidth(el.clientWidth / VISIBLE);
    calculate();
    const ro = new ResizeObserver(calculate);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const scrollToIndex = useCallback(
    (index: number, smooth = true) => {
      const el = scrollRef.current;
      if (!el || itemWidth === 0) return;
      const targetLeft = index * itemWidth - el.clientWidth / 2 + itemWidth / 2;
      el.scrollTo({ left: targetLeft, behavior: smooth ? "smooth" : "auto" });
    },
    [itemWidth]
  );

  // Jump to center once itemWidth is first calculated
  useEffect(() => {
    if (itemWidth === 0) return;
    const idx = middleCopyOffset + months.indexOf(activeMonth);
    scrollToIndex(idx, false);
  }, [itemWidth]); // eslint-disable-line react-hooks/exhaustive-deps

  // Re-center when activeMonth changes externally
  useEffect(() => {
    if (isScrolling.current || itemWidth === 0) return;
    const el = scrollRef.current;
    if (!el) return;
    const currentCenter = el.scrollLeft + el.clientWidth / 2;
    const currentApproxIndex = Math.round(currentCenter / itemWidth);
    let best = middleCopyOffset + months.indexOf(activeMonth);
    let bestDist = Math.abs(best - currentApproxIndex);
    for (let c = 0; c < COPIES; c++) {
      const idx = c * months.length + months.indexOf(activeMonth);
      const dist = Math.abs(idx - currentApproxIndex);
      if (dist < bestDist) { best = idx; bestDist = dist; }
    }
    scrollToIndex(best, true);
  }, [activeMonth, scrollToIndex, middleCopyOffset, itemWidth]);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el || itemWidth === 0) return;
    const center = el.scrollLeft + el.clientWidth / 2;
    const idx = Math.round((center - itemWidth / 2) / itemWidth);
    const month = repeated[Math.max(0, Math.min(idx, totalItems - 1))];
    if (month && month !== activeMonth) {
      isScrolling.current = true;
      setActiveMonth(month);
      setTimeout(() => { isScrolling.current = false; }, 300);
    }
    const minScroll = months.length * itemWidth;
    const maxScroll = (COPIES - 1) * months.length * itemWidth;
    if (el.scrollLeft < minScroll) {
      el.scrollLeft += (COPIES - 2) * months.length * itemWidth;
    } else if (el.scrollLeft > maxScroll) {
      el.scrollLeft -= (COPIES - 2) * months.length * itemWidth;
    }
  };

  const handleClick = (month: string, idx: number) => {
    setActiveMonth(month);
    scrollToIndex(idx, true);
  };

  return (
    <div ref={wrapperRef} className="w-full mb-5">
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex items-center overflow-x-auto scrollbar-hide w-full"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {itemWidth > 0 &&
          repeated.map((month, i) => (
            <button
              key={i}
              onClick={() => handleClick(month, i)}
              style={{ minWidth: itemWidth, scrollSnapAlign: "center" }}
              className={`shrink-0 h-10 transition-all duration-150 text-center text-base ${
                month === activeMonth
                  ? "text-gray-900 font-bold transform scale-120"
                  : "text-gray-400 font-medium hover:text-gray-600"
              }`}
            >
              {month}
            </button>
          ))}
      </div>
    </div>
  );
};

const EventCard = ({ event }: { event: typeof events[0] }) => (
  <div className="bg-white rounded-2xl p-4 shadow-sm">
    <h3 className="text-lg font-bold text-gray-900 mb-2">{event.title}</h3>
    <div className="flex items-center gap-1.5 text-gray-500 text-sm mb-1">
      <ClockIcon />
      <span>{event.date}</span>
    </div>
    <div className="flex items-center gap-1.5 text-gray-500 text-sm mb-3 border-b border-gray-200 pb-3">
      <PinIcon />
      <span>{event.location}</span>
    </div>
    <p className="text-gray-500 text-sm mb-4">{event.description}</p>
    <button
      className={`w-full py-3.5 rounded-2xl text-sm font-semibold transition-all duration-200 ${
        event.registered
          ? "bg-primary hover:bg-blue-600 text-white shadow-md shadow-blue-200"
          : "bg-gray-100 hover:bg-gray-200 text-gray-500"
      }`}
    >
      Зарегистрироваться
    </button>
  </div>
);

const EventsPage = () => {
  const [activeMonth, setActiveMonth] = useState("Jan");
  const [search, setSearch] = useState("");

  return (
    <div className="flex-1 overflow-y-auto pb-24 px-4">
      <h1 className="text-2xl font-semibold text-gray-900 mt-8 mb-5">
        Предстоящие события
      </h1>

      <MonthSelector activeMonth={activeMonth} setActiveMonth={setActiveMonth} />

      <div className="relative mb-5">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-white border border-gray-100 rounded-2xl py-3.5 pl-4 pr-10 text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 transition-all"
        />
        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
          <SearchIcon />
        </span>
      </div>

      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
      
    </div>
  );
};

export default EventsPage;