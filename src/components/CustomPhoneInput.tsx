import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { InputLabel, FormHelperText } from "@mui/material";

interface CustomPhoneInputProps {
  label?: string;
  helperText?: string;
  error?: boolean;
  value: string;
  colorLabel?: string;
  colorLabelHover?: string;
  colorLabelFocused?: string;
  colorHelperText?: string;
  onChange: (value: string) => void; // Cambiado a `onChange` compatible con Formik
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void; // Agregado `onBlur` para manejar el desenfoque
}

export const CustomPhoneInput = ({
  label,
  helperText,
  error = false,
  value,
  colorHelperText = "#B32318",
  colorLabelFocused = "#195DFA",
  colorLabelHover = "#195DFA",
  colorLabel = "#B32318",
  onChange,
  onBlur, // Agregado para manejar el desenfoque
}: CustomPhoneInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{ position: "relative", width: "100%", marginBottom: "20px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {label && (
        <InputLabel
          shrink={true}
          sx={{
            color: error
              ? colorHelperText
              : isFocused
              ? colorLabelFocused
              : isHovered
              ? colorLabelHover
              : colorLabel,
            fontSize: "18px",
            fontWeight: "regular",
            transition: "color 0.3s",
            mb: "-3px",
          }}
        >
          {label}
        </InputLabel>
      )}
      <PhoneInput
        country={"sv"}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => {
          setIsFocused(false);
          onBlur(e); // Invocamos el onBlur de Formik
        }}
        inputStyle={{
          width: "100%",
          border: `1px solid ${
            isFocused ? "#195DFA" : isHovered ? "#195DFA" : "#98A2B3"
          }`,
          borderRadius: "8px",
          height: "45px",
          fontSize: "14px",
          transition: "border 0.3s", // Add smooth transition for hover effect
        }}
        dropdownStyle={{
          borderRadius: "8px",
        }}
        containerStyle={{
          width: "100%",
        }}
      />
      {helperText && (
        <FormHelperText
          error={error}
          sx={{ color: error ? "#d32f2f" : "#B32318", mt: "5px", ml: "12px" }}
        >
          {helperText}
        </FormHelperText>
      )}
    </div>
  );
};
