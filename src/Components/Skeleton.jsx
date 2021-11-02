import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Skeleton from "@mui/material/Skeleton";
import { CardActions, Grid } from "@mui/material";
import { Box } from "@mui/system";
const CardSkeleton = ({ copies = 1 }) => {
  const numberOfInstances =
    typeof copies === "number" && copies > 0 ? copies : 1;
  return Array.from(Array(numberOfInstances).keys()).map((e) => (
    <Grid item xs={3}>
    <Card className='loading-skeleton' sx={{ maxWidth: 345, m: 2 }}>
      <CardContent>
        <React.Fragment>
          <Skeleton
            animation="wave"
            height={20}
            style={{ marginBottom: 6, width: "80%" }}
          />
          <Skeleton animation="wave" height={200} />
        </React.Fragment>
      </CardContent>
      <CardActions>
        <Box display="flex" width="100%">
          <Skeleton
            animation="wave"
            width={80}
            height={20}
            style={{ marginRight: "10px" }}
          />
          <Skeleton animation="wave" width={80} height={20} />
        </Box>
      </CardActions>
    </Card>
    </Grid>
  ));
};

export default CardSkeleton;
