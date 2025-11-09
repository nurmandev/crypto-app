export default function MoreServices() {
  const services = [
    { name: "Recharge", subtitle: "Mobile & DTH", icon: "📱" },
    { name: "Bill Pay", subtitle: "Utility Bills", icon: "📄" },
    { name: "Bank Transfer", subtitle: "Direct Transfer", icon: "🏦" },
    { name: "Savings", subtitle: "Investment Plans", icon: "💰" },
    { name: "Online Transfer", subtitle: "P2P Payments", icon: "🔄" },
  ];

  return (
    <div className="bg-white rounded-xl p-4 md:p-6 shadow-md">
      <h2 className="text-sm md:text-xl font-semibold text-gray-800 mb-4">
        More Services Coming Soon
      </h2>

      {/* One row, no scroll */}
      <div className="flex justify-between items-center gap-2 md:gap-6">
        {services.map((service, idx) => (
          <div key={idx} className="flex flex-col items-center text-center">
            {/* Icon (small on mobile, original on desktop) */}
            <div className="
              w-10 h-10 
              md:w-20 md:h-20 
              rounded-full border-[3px] md:border-[5px] border-[#3CC27B]
              bg-white flex items-center justify-center shadow-sm
            ">
              <span className="text-lg md:text-3xl">{service.icon}</span>
            </div>

            <p className="text-[9px] md:text-sm text-gray-800 font-medium mt-1 leading-tight">
              {service.name}
            </p>

            <p className="text-[8px] md:text-xs text-gray-400 leading-tight -mt-0.5 md:mt-0.5">
              {service.subtitle}
            </p>

            <span className="
              mt-1 px-1.5 py-[1px] 
              bg-[#FFF3E1] border border-[#F1D3A3] 
              text-[7px] md:text-[10px] text-gray-600 rounded-full
            ">
              Coming soon
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
