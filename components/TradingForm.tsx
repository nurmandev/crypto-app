import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

interface TradingFormProps {
  type: "buy" | "sell";
}

export const TradingForm: React.FC<TradingFormProps> = ({ type }) => {
  const [formState, setFormState] = useState({
    currency: "usdt",
    network: "bnb",
    amount: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <h3 className="text-xl font-bold text-gray-900 mb-4">
        {type === "buy" ? "Buy Crypto" : "Sell Crypto"}
      </h3>
      <div className="space-y-3">
        <div className="text-sm text-gray-600">Real-time conversion rates</div>
        <div className="space-y-2">
          <label className="text-xs text-gray-600">Select Cryptocurrency</label>
          <Select
            value={formState.currency}
            onValueChange={(value) => handleChange("currency", value)}
          >
            <SelectTrigger className="bg-gray-100 border-gray-200">
              <SelectValue placeholder="Select Cryptocurrency" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="usdt">USDT</SelectItem>
                <SelectItem value="btc">BTC</SelectItem>
                <SelectItem value="eth">ETH</SelectItem>
                <SelectItem value="bnb">BNB</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <label className="text-xs text-gray-600">Select Network</label>
          <Select
            value={formState.network}
            onValueChange={(value) => handleChange("network", value)}
          >
            <SelectTrigger className="bg-gray-100 border-gray-200">
              <SelectValue placeholder="Select Network" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="bnb">BNB Smart Chain</SelectItem>
                <SelectItem value="ethereum">Ethereum</SelectItem>
                <SelectItem value="polygon">Polygon</SelectItem>
                <SelectItem value="tron">Tron</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <label className="text-xs text-gray-600">
            Enter Amount ({formState.currency.toUpperCase()})
          </label>
          <input
            type="text"
            value={formState.amount}
            onChange={(e) => handleChange("amount", e.target.value)}
            placeholder="150"
            className="w-full px-3 py-2 bg-gray-100 rounded text-sm border-2 border-[#3CC27B]"
          />
        </div>
        <button className="w-full mt-4 text-[#3CC27B] font-medium text-sm">
          {type === "buy" ? "Continue to Buy" : "Continue to Sell"} →
        </button>
      </div>
    </div>
  );
};
