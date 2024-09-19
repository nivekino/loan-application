import { Skeleton, Box } from "@mui/material";

const TableSkeleton: React.FC = () => {
  return (
    <div className="py-4 px-[3rem] lg:px-[10rem]">
      <h1 className="font-Roboto text-[24px] font-[500] mb-6">
        Historial de registro
      </h1>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(1, 1fr)",
          gap: 2,
          backgroundColor: "#F8F9FA",
          padding: "10px",
          borderRadius: "8px",
          border: "1px solid #DFE3E8",
        }}
      >
        <Skeleton
          variant="rectangular"
          height={40}
          sx={{ gridColumn: "span 1" }}
          animation="wave"
        />
        <Skeleton
          variant="rectangular"
          height={40}
          sx={{ gridColumn: "span 1" }}
          animation="wave"
        />
        <Skeleton
          variant="rectangular"
          height={40}
          sx={{ gridColumn: "span 1" }}
          animation="wave"
        />
        <Skeleton
          variant="rectangular"
          height={40}
          sx={{ gridColumn: "span 1" }}
          animation="wave"
        />

        {Array.from(new Array(2)).map((_, index) => (
          <Box key={index} sx={{ display: "contents" }}>
            <Skeleton
              variant="rectangular"
              height={50}
              sx={{ gridColumn: "span 1" }}
              animation="wave"
            />
            <Skeleton
              variant="rectangular"
              height={50}
              sx={{ gridColumn: "span 1" }}
              animation="wave"
            />
            <Skeleton
              variant="rectangular"
              height={50}
              sx={{ gridColumn: "span 1" }}
              animation="wave"
            />
            <Skeleton
              variant="rectangular"
              height={50}
              sx={{ gridColumn: "span 1" }}
              animation="wave"
            />
          </Box>
        ))}
      </Box>
    </div>
  );
};

export default TableSkeleton;
