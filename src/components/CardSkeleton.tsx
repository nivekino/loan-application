import { Skeleton, Card, CardContent } from "@mui/material";

const CardSkeleton: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-[3rem]">
      {[...Array(6)].map((_, index) => (
        <Card key={index} className="shadow-lg">
          <CardContent>
            <Skeleton variant="text" width="60%" height={30} />
            <Skeleton variant="text" width="80%" height={20} />
            <Skeleton variant="text" width="40%" height={20} />
            <Skeleton
              variant="rectangular"
              width="100%"
              height={40}
              className="mt-4"
            />
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CardSkeleton;
