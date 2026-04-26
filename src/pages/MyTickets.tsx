import { TicketIcon } from "../components/icons";

const MyTickets = () => (
  <div className="flex-1 overflow-y-auto pb-24 px-4">
    <h1 className="text-2xl font-semibold text-gray-900 mt-8 mb-6">Мои билеты</h1>

    <div className="flex flex-col items-center justify-center mt-20 gap-4 text-center">
      <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
        <TicketIcon />
      </div>
      <p className="text-gray-500 text-sm">
        У вас пока нет билетов. <br />
        Зарегистрируйтесь на событие, чтобы получить билет.
      </p>
    </div>
  </div>
);

export default MyTickets;
