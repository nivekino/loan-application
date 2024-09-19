import React from "react";
import { Pagination, PaginationItem } from "@mui/material";
import { styled } from "@mui/material/styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

interface MyPaginationProps {
  page: number;
  totalPages: number;
  handleChangePage: (event: React.ChangeEvent<unknown>, value: number) => void;
}

const CustomPagination = styled(Pagination)({
  "& .MuiPaginationItem-root": {
    border: "3px solid #DFE3E8",
    borderRadius: "8px",
    width: "40px",
    height: "40px",
    fontSize: "16px",
    fontWeight: 500,
    "&.Mui-selected": {
      backgroundColor: "#F4F6FF",
      color: "#2754F7",
      border: "2px solid #2754F7",
    },
  },
  "& .MuiPaginationItem-ellipsis": {
    color: "#212B36",
  },
});

const CustomArrowBackIcon = styled(ChevronLeftIcon)(() => ({
  color: "#C4CDD5",
  fontSize: "40px",
}));

const CustomArrowForwardIcon = styled(ChevronRightIcon)(() => ({
  color: "#C4CDD5",
  fontSize: "40px",
}));

const CustomArrowButton = styled(PaginationItem)(() => ({
  backgroundColor: "#FFFFFF",
  borderRadius: "8px",
  border: "3px solid #DFE3E8",
  "&.Mui-disabled": {
    backgroundColor: "#626C76",
    border: "none",
  },
  "&:hover": {
    backgroundColor: "#EBF3FF",
  },
}));

const MyPagination: React.FC<MyPaginationProps> = ({
  page,
  totalPages,
  handleChangePage,
}) => {
  return (
    <CustomPagination
      count={totalPages}
      page={page}
      onChange={handleChangePage}
      siblingCount={1}
      boundaryCount={1}
      renderItem={(item) => (
        <CustomArrowButton
          components={{
            previous: CustomArrowBackIcon,
            next: CustomArrowForwardIcon,
          }}
          {...item}
        />
      )}
    />
  );
};

export default MyPagination;
