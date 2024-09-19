import React, { FocusEvent, useState, forwardRef } from "react";
import { TextField, InputLabel } from "@mui/material";
import { IMaskInput } from "react-imask";

interface CustomInputMaskProps {
  label?: string;
  helperText?: string;
  borderBottomColor?: string;
  borderBottomColorHover?: string;
  borderBottomColorAfter?: string;
  colorInput?: string;
  colorLabel?: string;
  colorLabelHover?: string;
  colorLabelFocused?: string;
  colorHelperText?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: boolean;
  placeholder?: string;
  mask: string;
  name: string;
}

const TextMaskCustom = forwardRef<HTMLInputElement, CustomInputMaskProps>(
  function TextMaskCustom(props, ref) {
    const { onChange, mask, ...other } = props;

    const name = other.name || "";

    return (
      <IMaskInput
        {...other}
        mask={mask}
        inputRef={ref}
        onAccept={(value: string) => {
          onChange({
            target: { name, value },
          } as React.ChangeEvent<HTMLInputElement>);
        }}
        overwrite
      />
    );
  }
);

export const CustomInputMask = ({
  label,
  helperText,
  borderBottomColor = "#B32318",
  borderBottomColorHover = "#B32318",
  borderBottomColorAfter = "#B32318",
  colorInput = "#000",
  colorLabel = "#B32318",
  colorLabelHover = "#195DFA",
  colorLabelFocused = "#195DFA",
  colorHelperText = "#B32318",
  value,
  onChange,
  onBlur,
  error,
  placeholder,
  mask,
  name,
  ...props
}: CustomInputMaskProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

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
      <TextField
        {...props}
        fullWidth
        error={error}
        value={value}
        onChange={onChange}
        onBlur={(e) => {
          setIsFocused(false);
          onBlur(e);
        }}
        onFocus={() => setIsFocused(true)}
        InputProps={{
          inputComponent: TextMaskCustom as unknown as React.ComponentType,
          inputProps: { mask, name },
        }}
        placeholder={placeholder}
        sx={{
          "& .MuiInputBase-input": {
            color: colorInput,
            height: "25px",
            fontSize: "14px",
            padding: "10px",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: borderBottomColor,
              borderRadius: "8px",
            },
            "&:hover fieldset": {
              borderColor: borderBottomColorHover,
            },
            "&.Mui-focused fieldset": {
              borderColor: borderBottomColorAfter,
            },
          },
          "& .MuiFormHelperText-root": {
            color: colorHelperText,
          },
        }}
        helperText={helperText}
      />
    </div>
  );
};
