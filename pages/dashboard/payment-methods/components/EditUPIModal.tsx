import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";

interface EditUPIModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: { upiId: string; qrCode: File | null }) => void;
  initialUpiId?: string;
}

export default function EditUPIModal({
  isOpen,
  onClose,
  onSave,
  initialUpiId = "",
}: EditUPIModalProps) {
  const [upiId, setUpiId] = useState(initialUpiId);
  const [qrCode, setQrCode] = useState<File | null>(null);
  const [qrPreview, setQrPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert("File size should not exceed 2MB");
        return;
      }
      setQrCode(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setQrPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    onSave({ upiId, qrCode });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[450px] p-5 md:p-6">
        <DialogHeader>
          <DialogTitle className="text-base md:text-lg font-medium text-black mb-6">
            Edit UPI Payment Method
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* UPI ID Field */}
          <div className="space-y-2">
            <label className="text-sm md:text-base font-medium text-black">
              UPI ID
            </label>
            <Input
              type="text"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
              placeholder="yneware7@oksbi"
              className="w-full h-12 md:h-14 bg-[#F0F0F0] border-[#CACACA] rounded-md text-[#8E8E8E]"
            />
          </div>

          {/* Upload QR Code */}
          <div className="space-y-2">
            <label className="text-sm md:text-base font-medium text-black">
              Upload QR Code
            </label>
            <div className="relative">
              <input
                type="file"
                accept="image/png, image/jpeg"
                onChange={handleFileChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                id="qr-upload"
              />
              <div className="w-full h-36 md:h-40 border-2 border-dashed border-[#BABABA] rounded-md flex flex-col items-center justify-center bg-white hover:bg-gray-50 transition-colors">
                {qrPreview ? (
                  <img
                    src={qrPreview}
                    alt="QR Code Preview"
                    className="max-h-32 object-contain"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-3">
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                    >
                      <path
                        d="M8.20257 14.0616V4.51142L5.1559 7.55808L3.51539 5.85898L9.37437 0L15.2333 5.85898L13.5928 7.55808L10.5462 4.51142V14.0616H8.20257ZM0 18.7487V12.8898H2.34359V16.4051H16.4051V12.8898H18.7487V18.7487H0Z"
                        fill="black"
                      />
                    </svg>
                    <p className="text-center text-sm md:text-base font-light text-black px-4">
                      Click to upload QR Code
                      <br />
                      PNG, JPG up to 2MB
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button
              onClick={handleSave}
              className="bg-black hover:bg-black/90 text-white px-8 md:px-16 h-9 md:h-10 rounded-md border border-[#C3C3C3] text-xs md:text-sm"
            >
              Save Changes
            </Button>
            <Button
              onClick={onClose}
              variant="outline"
              className="bg-white hover:bg-gray-50 text-black px-8 md:px-16 h-9 md:h-10 rounded-md border border-[#C3C3C3] text-xs md:text-sm"
            >
              Cancel
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
