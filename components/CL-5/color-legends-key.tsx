import type { NextPage } from "next";
import { Box } from "@mui/material";
import Image from "next/image";

export type ColorLegendsKeyType = {
  className?: string;
};

const ColorLegendsKey: NextPage<ColorLegendsKeyType> = ({ className = "" }) => {
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
      }}
    >
      <Image
        style={{
          width: "354px",
          position: "relative",
          maxHeight: "100%",
          objectFit: "cover",
        }}
        className={className}
        width={354}
        height={451}
        alt=""
        src="/CL-5/image-29536@2x.png"
      />
    </Box>
  );
};

export default ColorLegendsKey;
