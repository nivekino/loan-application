import { FocusEvent, useState } from "react";
import { createTheme } from "@mui/material";
import {
  InputLabel,
  MenuItem,
  Select,
  SelectProps,
  FormHelperText,
  MenuProps as MuiMenuProps,
  SelectChangeEvent,
  ThemeProvider,
} from "@mui/material";
import { useTheme } from "@emotion/react";

interface CustomSelectProps extends Omit<SelectProps, "variant" | "color"> {
  variant?: "standard" | "filled" | "outlined";
  label?: string;
  helperText?: string;
  placeholder?: string;
  borderBottomColor?: string;
  borderBottomColorHover?: string;
  borderBottomColorAfter?: string;
  colorInput?: string;
  colorLabel?: string;
  colorLabelHover?: string;
  colorLabelFocused?: string;
  colorHelperText?: string;
  value: string;
  onChange: (event: SelectChangeEvent<unknown>) => void;
  onBlur: (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: boolean;
  options: { label: string; value: string }[];
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
  variant = "outlined",
  label,
  helperText,
  placeholder = "Seleccionar",
  borderBottomColor = "#B32318",
  borderBottomColorHover = "#B32318",
  borderBottomColorAfter = "#B32318",
  colorInput = "#98A2B3",
  colorLabel = "#98A2B3",
  colorLabelHover = "#195DFA",
  colorLabelFocused = "#195DFA",
  colorHelperText = "#98A2B3",
  value,
  onChange,
  onBlur,
  error,
  options,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const theme = useTheme();

  const customMenuProps: Partial<MuiMenuProps> = {
    PaperProps: {
      sx: {
        "& .MuiMenuItem-root": {
          color: "#1D2939",
          fontSize: "16px",
          padding: "10px 20px",
          "&:hover": {
            backgroundColor: "#F2F4FF",
            color: "#0D65FD",
            transition: "0.3s",
          },
        },
        "& .Mui-selected": {
          backgroundColor: "#F2F4FF !important",
          color: "#0D65FD",
        },
      },
    },
  };

  const customTheme = createTheme({
    ...theme,
    palette: {
      primary: {
        main: "#98A2B3",
      },
      secondary: {
        main: "#FF5C00",
      },
    },
  });

  return (
    <ThemeProvider theme={customTheme}>
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

        <Select
          {...props}
          fullWidth
          error={error}
          value={value || "Seleccionar"}
          onChange={onChange}
          onBlur={(e) => {
            setIsFocused(false);
            onBlur(e);
          }}
          onFocus={() => setIsFocused(true)}
          variant={variant}
          MenuProps={customMenuProps}
          sx={{
            "& .MuiInputBase-input": {
              color: colorInput,
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
        >
          <MenuItem disabled value="Seleccionar">
            {placeholder}
          </MenuItem>
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>

        {helperText && (
          <FormHelperText sx={{ color: colorHelperText, marginLeft: "12px" }}>
            {helperText}
          </FormHelperText>
        )}
      </div>
    </ThemeProvider>
  );
};
