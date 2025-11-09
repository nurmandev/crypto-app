import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function ForgotPassword() {
  const [step, setStep] = useState<"email" | "code" | "reset">("email");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setStep("code");
    }
  };

  const handleCodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.trim()) {
      setStep("reset");
    }
  };

  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword === confirmPassword && newPassword.trim()) {
      // In a real app, call API to reset password
      console.log("Password reset for:", email);
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen bg-white flex">
      {/* Left Side - Image Section */}
      <div className="hidden lg:flex lg:w-[55%] bg-[#F6F6F6] relative">
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2Fde402d04e4fc422aa77ac9baf104abf8%2Fad1110e0fde2477dbd70400398231507?format=webp&width=800"
          alt="Bitcoin coins"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Logo at bottom */}
        <div className="absolute bottom-6 left-6">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-12 w-auto object-contain"
            />
          </Link>
        </div>
      </div>

      {/* Right Side - Form Section */}
      <div className="flex-1 flex items-center justify-center px-6 py-10 sm:px-10">
        <div className="w-full max-w-[450px]">
          {/* Form Container */}
          <div className="bg-white">
            {/* Back Button */}
            <Link
              to="/login"
              className="inline-flex items-center gap-2 text-[#3CC27B] hover:text-[#2a9961] transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-[14px] font-medium">Back to Login</span>
            </Link>

            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-['Russo_One'] mb-2 text-black">
                Reset Password
              </h1>
              <p className="text-[#838383] text-[15px]">
                {step === "email" && "Enter your email to reset your password"}
                {step === "code" && "We sent a code to your email"}
                {step === "reset" && "Create a new password"}
              </p>
            </div>

            {/* Email Step */}
            {step === "email" && (
              <form onSubmit={handleEmailSubmit}>
                <div className="mb-6">
                  <label className="block text-[15px] text-gray-900 font-medium mb-3">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-5 py-3 bg-[#F0F0F0] rounded-md text-[14px] text-gray-900 placeholder:text-[#8E8E8E] focus:outline-none focus:ring-2 focus:ring-[#3CC27B]"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-black hover:bg-black/90 text-white py-3 px-16 rounded-md border border-[#C3C3C3] transition-colors"
                >
                  <span className="text-[15px] font-medium">Continue</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}

            {/* Code Verification Step */}
            {step === "code" && (
              <form onSubmit={handleCodeSubmit}>
                <div className="mb-6">
                  <label className="block text-[15px] text-gray-900 font-medium mb-3">
                    Verification Code
                  </label>
                  <input
                    type="text"
                    placeholder="Enter the code sent to your email"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="w-full px-5 py-3 bg-[#F0F0F0] rounded-md text-[14px] text-gray-900 placeholder:text-[#8E8E8E] focus:outline-none focus:ring-2 focus:ring-[#3CC27B]"
                    required
                  />
                </div>

                <p className="text-[13px] text-[#838383] mb-6">
                  Didn't receive the code?{" "}
                  <button
                    type="button"
                    onClick={() => setStep("email")}
                    className="text-[#3CC27B] hover:underline"
                  >
                    Try another email
                  </button>
                </p>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-black hover:bg-black/90 text-white py-3 px-16 rounded-md border border-[#C3C3C3] transition-colors"
                >
                  <span className="text-[15px] font-medium">Verify Code</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}

            {/* Reset Password Step */}
            {step === "reset" && (
              <form onSubmit={handleResetPassword}>
                <div className="mb-6">
                  <label className="block text-[15px] text-gray-900 font-medium mb-3">
                    New Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter new password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full px-5 py-3 bg-[#F0F0F0] rounded-md text-[14px] text-gray-900 placeholder:text-[#8E8E8E] focus:outline-none focus:ring-2 focus:ring-[#3CC27B]"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-[15px] text-gray-900 font-medium mb-3">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    placeholder="Confirm new password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full px-5 py-3 bg-[#F0F0F0] rounded-md text-[14px] text-gray-900 placeholder:text-[#8E8E8E] focus:outline-none focus:ring-2 focus:ring-[#3CC27B]"
                    required
                  />
                </div>

                {newPassword &&
                  confirmPassword &&
                  newPassword !== confirmPassword && (
                    <p className="text-[13px] text-[#FA1818] mb-4">
                      Passwords do not match
                    </p>
                  )}

                <button
                  type="submit"
                  disabled={newPassword !== confirmPassword || !newPassword}
                  className="w-full flex items-center justify-center gap-2 bg-black hover:bg-black/90 disabled:bg-gray-300 text-white py-3 px-16 rounded-md border border-[#C3C3C3] transition-colors"
                >
                  <span className="text-[15px] font-medium">
                    Reset Password
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          {/* Mobile Logo */}
          <div className="lg:hidden mt-10 flex justify-center">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="Logo"
                className="h-12 w-auto object-contain"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
