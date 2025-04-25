import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  icon?: React.ReactNode;
}

export const PrimaryButton: React.FC<ButtonProps> = ({ label, onClick, disabled, icon }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`w-full py-3 rounded-xl font-semibold text-white transition-colors flex items-center justify-center gap-2 ${
      disabled
        ? 'bg-blue-300 cursor-not-allowed'
        : 'bg-[#00df9a] hover:bg-[#00c48c] cursor-pointer'
    }`}
  >
    {icon}
    {label}
  </button>
);
