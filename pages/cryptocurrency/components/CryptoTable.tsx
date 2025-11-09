import React from "react";
import { CryptoTableRow } from "./CryptoTableRow";

export interface CryptoData {
  id: string;
  logo: string;
  name: string;
  symbol: string;
  status: "Active" | "Inactive";
  buyRate: string;
  sellRate: string;
  change: string;
  lastUpdated: string;
}

interface CryptoTableProps {
  data: CryptoData[];
  onEdit: (id: string) => void;
}

export const CryptoTable: React.FC<CryptoTableProps> = ({ data, onEdit }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-[#E5E5E5]">
            <th className="py-4 px-4 text-left text-black font-roboto text-sm font-bold">
              Cryptocurrency
            </th>
            <th className="py-4 px-4 text-left text-black font-roboto text-sm font-bold">
              Status
            </th>
            <th className="py-4 px-4 text-left text-black font-roboto text-sm font-bold">
              Buy Rate (₹)
            </th>
            <th className="py-4 px-4 text-left text-black font-roboto text-sm font-bold">
              Sell Rate (₹)
            </th>
            <th className="py-4 px-4 text-left text-black font-roboto text-sm font-bold">
              24h Change
            </th>
            <th className="py-4 px-4 text-left text-black font-roboto text-sm font-bold">
              Last Updated
            </th>
            <th className="py-4 px-4 text-center text-black font-roboto text-sm font-bold">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((crypto) => (
            <CryptoTableRow
              key={crypto.id}
              logo={crypto.logo}
              name={crypto.name}
              symbol={crypto.symbol}
              status={crypto.status}
              buyRate={crypto.buyRate}
              sellRate={crypto.sellRate}
              change={crypto.change}
              lastUpdated={crypto.lastUpdated}
              onEdit={() => onEdit(crypto.id)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
