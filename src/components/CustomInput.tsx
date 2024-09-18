import { FocusEvent, useState } from "react";
import { TextField, TextFieldProps, InputLabel } from "@mui/material";

interface CustomInputProps extends Omit<TextFieldProps, "variant" | "color"> {
  variant?: "standard" | "filled" | "outlined";
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
  type?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: boolean;
  placeholder?: string;
}

export const CustomInput: React.FC<CustomInputProps> = ({
  variant = "outlined",
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
  type,
  value,
  onChange,
  onBlur,
  error,
  placeholder,
  ...props
}) => {
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
            mb: "-3px"
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
        type={type}
        variant={variant}
        placeholder={placeholder}
        sx={{
          "& .MuiInputBase-input": {
            color: colorInput,
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
