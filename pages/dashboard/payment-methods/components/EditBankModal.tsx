import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface BankFormData {
  country: string;
  bank: string;
  accountType: string;
  accountNumber: string;
  holderName: string;
  ifscCode: string;
}

interface EditBankModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: BankFormData) => void;
  initialData?: BankFormData;
}

export default function EditBankModal({
  isOpen,
  onClose,
  onSave,
  initialData,
}: EditBankModalProps) {
  const [formData, setFormData] = useState<BankFormData>(
    initialData || {
      country: "India",
      bank: "State Bank of India",
      accountType: "Savings",
      accountNumber: "123456789",
      holderName: "Yogesh Neware",
      ifscCode: "123456",
    },
  );

  const handleInputChange = (field: keyof BankFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[850px] p-5 md:p-6 lg:p-8">
        <DialogHeader>
          <DialogTitle className="text-base md:text-lg font-medium text-black mb-6">
            Edit Bank Details
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 md:space-y-8">
          {/* Row 1: Country and Bank */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="space-y-2">
              <label className="text-sm md:text-base font-medium text-black">
                Select Country
              </label>
              <Select
                value={formData.country}
                onValueChange={(value) => handleInputChange("country", value)}
              >
                <SelectTrigger className="w-full h-12 md:h-14 bg-[#F0F0F0] rounded-md border-none">
                  <SelectValue placeholder="Select Country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="India">India</SelectItem>
                  <SelectItem value="USA">USA</SelectItem>
                  <SelectItem value="UK">UK</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm md:text-base font-medium text-black">
                Select Bank
              </label>
              <Select
                value={formData.bank}
                onValueChange={(value) => handleInputChange("bank", value)}
              >
                <SelectTrigger className="w-full h-12 md:h-14 bg-[#F0F0F0] rounded-md border-none">
                  <SelectValue placeholder="State Bank of India" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="State Bank of India">
                    State Bank of India
                  </SelectItem>
                  <SelectItem value="HDFC Bank">HDFC Bank</SelectItem>
                  <SelectItem value="ICICI Bank">ICICI Bank</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Row 2: Account Number and Type */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="space-y-2">
              <label className="text-sm md:text-base font-medium text-black">
                Account Number
              </label>
              <Input
                type="text"
                value={formData.accountNumber}
                onChange={(e) =>
                  handleInputChange("accountNumber", e.target.value)
                }
                placeholder="123456789"
                className="w-full h-12 md:h-14 bg-[#F0F0F0] border-[#CACACA] rounded-md"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm md:text-base font-medium text-black">
                Account Type
              </label>
              <Select
                value={formData.accountType}
                onValueChange={(value) =>
                  handleInputChange("accountType", value)
                }
              >
                <SelectTrigger className="w-full h-12 md:h-14 bg-[#F0F0F0] rounded-md border-none">
                  <SelectValue placeholder="Savings" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Savings">Savings</SelectItem>
                  <SelectItem value="Current">Current</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Row 3: Holder Name and IFSC */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="space-y-2">
              <label className="text-sm md:text-base font-medium text-black">
                Account Holder Name
              </label>
              <Input
                type="text"
                value={formData.holderName}
                onChange={(e) =>
                  handleInputChange("holderName", e.target.value)
                }
                placeholder="Yogesh Neware"
                className="w-full h-12 md:h-14 bg-[#F0F0F0] border-[#CACACA] rounded-md"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm md:text-base font-medium text-black">
                IFSC Code
              </label>
              <Input
                type="text"
                value={formData.ifscCode}
                onChange={(e) => handleInputChange("ifscCode", e.target.value)}
                placeholder="123456"
                className="w-full h-12 md:h-14 bg-[#F0F0F0] border-[#CACACA] rounded-md"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button
              onClick={handleSave}
              className="bg-black hover:bg-black/90 text-white px-8 md:px-16 h-10 md:h-11 rounded-md border border-[#C3C3C3] text-xs md:text-sm"
            >
              Save Changes
            </Button>
            <Button
              onClick={onClose}
              variant="outline"
              className="bg-white hover:bg-gray-50 text-black px-8 md:px-16 h-10 md:h-11 rounded-md border border-[#C3C3C3] text-xs md:text-sm"
            >
              Cancel
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
