import type { NextPage } from "next";
import { useCallback } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

const CareLibraryModificationDate: NextPage = () => {
  const router = useRouter();

  const onBackIconClick = useCallback(() => {
    router.push("/CL-2/care-library");
  }, [router]);

  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        backgroundColor: "#fff",
        height: "1080px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "116px",
        boxSizing: "border-box",
        gap: "69.6px",
        textAlign: "left",
        fontSize: "92.8px",
        color: "#0246bc",
        fontFamily: "Inter",
      }}
    >
      <Box
        sx={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "46.4px",
        }}
      >
        <Image
          style={{
            width: "112px",
            position: "relative",
            height: "112px",
            overflow: "hidden",
            flexShrink: "0",
            cursor: "pointer",
          }}
          width={112}
          height={112}
          alt=""
          src="/CL-2/back-icon2.svg"
          onClick={onBackIconClick}
        />
        <Box sx={{ flex: 1, position: "relative", fontWeight: "600" }}>
          Care Library Modification Dates
        </Box>
      </Box>
      <Box
        sx={{
          alignSelf: "stretch",
          position: "relative",
          height: "477px",
          overflow: "hidden",
          flexShrink: "0",
          textAlign: "center",
          fontSize: "24px",
          color: "#024d9c",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "14.4px",
            left: "569px",
            borderRadius: "40px",
            backgroundColor: "#e1ecff",
            width: "549.3px",
            height: "447px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "169px 80px 80px",
            boxSizing: "border-box",
            gap: "35px",
            opacity: "0.8",
            minWidth: "407px",
          }}
        >
          <Image
            style={{
              width: "143px",
              position: "relative",
              height: "143px",
              objectFit: "cover",
            }}
            width={143}
            height={143}
            alt=""
            src="/CL-2/service-time1024-1@2x.png"
          />
          <Box
            sx={{
              position: "relative",
              textTransform: "capitalize",
              fontWeight: "600",
            }}
          >
            <Typography variant="inherit" sx={{ margin: 0 }}>
              First Modification
            </Typography>
            <Typography variant="inherit" sx={{ margin: 0 }}>
              20 Dec 2024
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CareLibraryModificationDate;
