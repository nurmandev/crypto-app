import React from "react";

interface ColorsTypographyProps {
  primaryColor: string;
  setPrimaryColor: (value: string) => void;
  primaryColorText: string;
  setPrimaryColorText: (value: string) => void;
  secondaryColor: string;
  setSecondaryColor: (value: string) => void;
  secondaryColorText: string;
  setSecondaryColorText: (value: string) => void;
  accentColor: string;
  setAccentColor: (value: string) => void;
  accentColorText: string;
  setAccentColorText: (value: string) => void;
  backgroundColor: string;
  setBackgroundColor: (value: string) => void;
  backgroundColorText: string;
  setBackgroundColorText: (value: string) => void;
  textColor: string;
  setTextColor: (value: string) => void;
  textColorText: string;
  setTextColorText: (value: string) => void;
  fontFamily: string;
  setFontFamily: (value: string) => void;
  handleColorChange: (
    value: string,
    setter: (val: string) => void,
    textSetter: (val: string) => void,
  ) => void;
  handleColorTextChange: (
    value: string,
    setter: (val: string) => void,
    textSetter: (val: string) => void,
  ) => void;
}

export const ColorsTypography = ({
  primaryColor,
  setPrimaryColor,
  primaryColorText,
  setPrimaryColorText,
  secondaryColor,
  setSecondaryColor,
  secondaryColorText,
  setSecondaryColorText,
  accentColor,
  setAccentColor,
  accentColorText,
  setAccentColorText,
  backgroundColor,
  setBackgroundColor,
  backgroundColorText,
  setBackgroundColorText,
  textColor,
  setTextColor,
  textColorText,
  setTextColorText,
  fontFamily,
  setFontFamily,
  handleColorChange,
  handleColorTextChange,
}: ColorsTypographyProps) => {
  return (
    <section className="mb-8 xs:mb-10 sm:mb-12 pb-8 xs:pb-10 sm:pb-12 border-b border-[#E0E0E0]">
      <h2 className="text-base xs:text-lg sm:text-xl font-semibold text-black mb-4 xs:mb-5 sm:mb-6">
        Colors & Typography
      </h2>

      {/* Color Pickers */}
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 xs:gap-3 sm:gap-4 lg:gap-6 mb-4 xs:mb-6">
        {/* Primary Color */}
        <div>
          <label className="block text-xs xs:text-sm sm:text-base font-medium text-black mb-1.5 xs:mb-2">
            Primary Color
          </label>
          <div className="flex flex-col xs:flex-row items-start xs:items-center gap-2">
            <input
              type="color"
              value={primaryColor}
              onChange={(e) =>
                handleColorChange(
                  e.target.value,
                  setPrimaryColor,
                  setPrimaryColorText,
                )
              }
              className="w-10 h-10 xs:w-[51px] xs:h-[51px] rounded-lg border-2 border-[#BFBFBF] cursor-pointer"
            />
            <input
              type="text"
              value={primaryColorText}
              onChange={(e) =>
                handleColorTextChange(
                  e.target.value,
                  setPrimaryColor,
                  setPrimaryColorText,
                )
              }
              className="w-full xs:flex-1 h-10 xs:h-[51px] px-2 xs:px-3 rounded-lg border border-[#E0E0E0] bg-white text-xs xs:text-sm text-black outline-none focus:border-[#3CC27B] focus:ring-2 focus:ring-[#3CC27B]/20 transition-all uppercase"
            />
          </div>
        </div>

        {/* Secondary Color */}
        <div>
          <label className="block text-xs xs:text-sm sm:text-base font-medium text-black mb-1.5 xs:mb-2">
            Secondary Color
          </label>
          <div className="flex flex-col xs:flex-row items-start xs:items-center gap-2">
            <input
              type="color"
              value={secondaryColor}
              onChange={(e) =>
                handleColorChange(
                  e.target.value,
                  setSecondaryColor,
                  setSecondaryColorText,
                )
              }
              className="w-10 h-10 xs:w-[51px] xs:h-[51px] rounded-lg border-2 border-[#BFBFBF] cursor-pointer"
            />
            <input
              type="text"
              value={secondaryColorText}
              onChange={(e) =>
                handleColorTextChange(
                  e.target.value,
                  setSecondaryColor,
                  setSecondaryColorText,
                )
              }
              className="w-full xs:flex-1 h-10 xs:h-[51px] px-2 xs:px-3 rounded-lg border border-[#E0E0E0] bg-white text-xs xs:text-sm text-black outline-none focus:border-[#3CC27B] focus:ring-2 focus:ring-[#3CC27B]/20 transition-all uppercase"
            />
          </div>
        </div>

        {/* Accent Color */}
        <div>
          <label className="block text-xs xs:text-sm sm:text-base font-medium text-black mb-1.5 xs:mb-2">
            Accent Color
          </label>
          <div className="flex flex-col xs:flex-row items-start xs:items-center gap-2">
            <input
              type="color"
              value={accentColor}
              onChange={(e) =>
                handleColorChange(
                  e.target.value,
                  setAccentColor,
                  setAccentColorText,
                )
              }
              className="w-10 h-10 xs:w-[51px] xs:h-[51px] rounded-lg border-2 border-[#BFBFBF] cursor-pointer"
            />
            <input
              type="text"
              value={accentColorText}
              onChange={(e) =>
                handleColorTextChange(
                  e.target.value,
                  setAccentColor,
                  setAccentColorText,
                )
              }
              className="w-full xs:flex-1 h-10 xs:h-[51px] px-2 xs:px-3 rounded-lg border border-[#E0E0E0] bg-white text-xs xs:text-sm text-black outline-none focus:border-[#3CC27B] focus:ring-2 focus:ring-[#3CC27B]/20 transition-all uppercase"
            />
          </div>
        </div>

        {/* Background Color */}
        <div>
          <label className="block text-xs xs:text-sm sm:text-base font-medium text-black mb-1.5 xs:mb-2">
            Background Color
          </label>
          <div className="flex flex-col xs:flex-row items-start xs:items-center gap-2">
            <input
              type="color"
              value={backgroundColor}
              onChange={(e) =>
                handleColorChange(
                  e.target.value,
                  setBackgroundColor,
                  setBackgroundColorText,
                )
              }
              className="w-10 h-10 xs:w-[51px] xs:h-[51px] rounded-lg border-2 border-[#BFBFBF] cursor-pointer"
            />
            <input
              type="text"
              value={backgroundColorText}
              onChange={(e) =>
                handleColorTextChange(
                  e.target.value,
                  setBackgroundColor,
                  setBackgroundColorText,
                )
              }
              className="w-full xs:flex-1 h-10 xs:h-[51px] px-2 xs:px-3 rounded-lg border border-[#E0E0E0] bg-white text-xs xs:text-sm text-black outline-none focus:border-[#3CC27B] focus:ring-2 focus:ring-[#3CC27B]/20 transition-all uppercase"
            />
          </div>
        </div>

        {/* Text Color */}
        <div>
          <label className="block text-xs xs:text-sm sm:text-base font-medium text-black mb-1.5 xs:mb-2">
            Text Color
          </label>
          <div className="flex flex-col xs:flex-row items-start xs:items-center gap-2">
            <input
              type="color"
              value={textColor}
              onChange={(e) =>
                handleColorChange(
                  e.target.value,
                  setTextColor,
                  setTextColorText,
                )
              }
              className="w-10 h-10 xs:w-[51px] xs:h-[51px] rounded-lg border-2 border-[#BFBFBF] cursor-pointer"
            />
            <input
              type="text"
              value={textColorText}
              onChange={(e) =>
                handleColorTextChange(
                  e.target.value,
                  setTextColor,
                  setTextColorText,
                )
              }
              className="w-full xs:flex-1 h-10 xs:h-[51px] px-2 xs:px-3 rounded-lg border border-[#E0E0E0] bg-white text-xs xs:text-sm text-black outline-none focus:border-[#3CC27B] focus:ring-2 focus:ring-[#3CC27B]/20 transition-all uppercase"
            />
          </div>
        </div>
      </div>

      {/* Font Family */}
      <div>
        <label className="block text-xs xs:text-sm sm:text-base lg:text-lg font-medium text-black mb-1.5 xs:mb-2">
          Font Family
        </label>
        <input
          type="text"
          value={fontFamily}
          onChange={(e) => setFontFamily(e.target.value)}
          className="w-full h-10 xs:h-[48px] sm:h-[51px] px-3 xs:px-4 sm:px-5 rounded-lg border border-[#E0E0E0] bg-white text-xs xs:text-sm text-black outline-none focus:border-[#3CC27B] focus:ring-2 focus:ring-[#3CC27B]/20 transition-all"
        />
      </div>
    </section>
  );
};
