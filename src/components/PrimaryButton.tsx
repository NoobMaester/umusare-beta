import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

export const PrimaryButton: React.FC<ButtonProps> = ({ label, onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`w-full py-3 rounded-xl font-semibold text-white transition-colors ${
      disabled
        ? 'bg-blue-300 cursor-not-allowed'
        : 'bg-[#00df9a] hover:bg-[#00c48c] cursor-pointer'
    }`}
  >
    {label}
  </button>
);
