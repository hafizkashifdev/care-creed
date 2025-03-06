import type { NextPage } from "next";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

export type ColorLegendsKey1Type = {
  className?: string;
  onClose?: () => void;
};

const ColorLegendsKey1: NextPage<ColorLegendsKey1Type> = ({
  className = "",
  onClose,
}) => {
  return (
    <Box
      sx={{
        position: "relative",
        boxShadow: 1,
        backgroundColor: "#fff",
        borderWidth: "2.7px",
        borderStyle: "dashed",
        borderColor: "#000",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "21.3px",
        maxWidth: "100%",
        maxHeight: "100%",
        overflow: "auto",
        textAlign: "left",
        fontSize: "14px",
        color: "#1e1e1e",
        fontFamily: "Inter",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "21.3px",
        }}
      >
        <Box
          sx={{
            width: "353.7px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "9px",
            textAlign: "center",
            color: "#7d8998",
          }}
        >
          <Box
            sx={{
              width: "21.3px",
              backgroundColor: "#7d8998",
              height: "21.3px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: "4.3px",
              boxSizing: "border-box",
            }}
          >
            <Image
              style={{
                width: "14.2px",
                position: "relative",
                height: "14.2px",
                overflow: "hidden",
                flexShrink: "0",
              }}
              className={className}
              width={14}
              height={14}
              alt=""
              src="/CL-2/bucket-1.svg"
            />
          </Box>
          <Typography
            variant="inherit"
            component="b"
            sx={{ position: "relative", fontWeight: "700" }}
          >
            Color Legends (Key)
          </Typography>
        </Box>
        <Box
          sx={{
            width: "353.7px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "13.3px",
          }}
        >
          <Box
            sx={{
              width: "40px",
              position: "relative",
              borderRadius: "5.6px",
              backgroundColor: "#00843d",
              height: "40px",
            }}
          />
          <Typography
            variant="inherit"
            component="b"
            sx={{ position: "relative", fontWeight: "700" }}
          >
            Completed
          </Typography>
        </Box>
        <Box
          sx={{
            width: "353.7px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "13.3px",
          }}
        >
          <Box
            sx={{
              width: "40px",
              position: "relative",
              borderRadius: "5.6px",
              backgroundColor: "#ffdd00",
              height: "40px",
            }}
          />
          <Typography
            variant="inherit"
            component="b"
            sx={{ position: "relative", fontWeight: "700" }}
          >{`In-progress `}</Typography>
        </Box>
        <Box
          sx={{
            width: "353.7px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "13.3px",
          }}
        >
          <Box
            sx={{
              width: "40px",
              position: "relative",
              borderRadius: "5.6px",
              backgroundColor: "#ff0707",
              height: "40px",
            }}
          />
          <Typography
            variant="inherit"
            component="b"
            sx={{ position: "relative", fontWeight: "700" }}
          >
            Pending
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ColorLegendsKey1;
