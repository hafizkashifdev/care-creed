import type { NextPage } from "next";
import { useCallback } from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

const Diagram: NextPage = () => {
  const router = useRouter();

  const onVuesaxboldarrowSquareLeftClick = useCallback(() => {
    // Please sync "Counties" to the project
  }, []);

  const onFrameContainerClick = useCallback(() => {
    router.push("/CL-2/diagram1");
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
        padding: "29.1px",
        boxSizing: "border-box",
        gap: "23.3px",
        textAlign: "left",
        fontSize: "48.5px",
        color: "#0246bc",
        fontFamily: "Inter",
      }}
    >
      <Box
        sx={{
          width: "1377.9px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "45px",
        }}
      >
        <Image
          style={{
            width: "59.2px",
            position: "relative",
            height: "59.2px",
            cursor: "pointer",
          }}
          width={59}
          height={59}
          alt=""
          src="/CL-2/vuesaxboldarrowsquareleft3.svg"
          onClick={onVuesaxboldarrowSquareLeftClick}
        />
        <Box
          sx={{
            width: "1282.9px",
            position: "relative",
            fontWeight: "600",
            display: "inline-block",
            flexShrink: "0",
          }}
        >{`England Regions `}</Box>
      </Box>
      <Box
        sx={{
          width: "1864.7px",
          flex: 1,
          borderRadius: "7.8px",
          borderWidth: "2.9px",
          borderStyle: "dashed",
          borderColor: "#0246bc",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "23.3px",
          gap: "30.1px",
          textAlign: "center",
          fontSize: "27.2px",
          color: "#000",
        }}
      >
        <Box
          sx={{
            alignSelf: "stretch",
            flex: 1,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "30.1px",
          }}
        >
          <Box
            sx={{
              alignSelf: "stretch",
              flex: 1,
              borderRadius: "7.8px",
              backgroundColor: "#e1ecff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0px 23.3px",
            }}
          >
            <Box sx={{ position: "relative", fontWeight: "500" }}>
              East Midlands
            </Box>
          </Box>
          <Box
            sx={{
              alignSelf: "stretch",
              flex: 1,
              borderRadius: "7.8px",
              backgroundColor: "#e1ecff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0px 23.3px",
            }}
          >
            <Box sx={{ position: "relative", fontWeight: "500" }}>
              East of England
            </Box>
          </Box>
          <Box
            sx={{
              alignSelf: "stretch",
              flex: 1,
              borderRadius: "7.8px",
              backgroundColor: "#e1ecff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0px 23.3px",
              cursor: "pointer",
            }}
            onClick={onFrameContainerClick}
          >
            <Box sx={{ position: "relative", fontWeight: "500" }}>London</Box>
          </Box>
        </Box>
        <Box
          sx={{
            alignSelf: "stretch",
            flex: 1,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "30.1px",
          }}
        >
          <Box
            sx={{
              alignSelf: "stretch",
              flex: 1,
              borderRadius: "7.8px",
              backgroundColor: "#e1ecff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0px 23.3px",
            }}
          >
            <Box
              sx={{
                position: "relative",
                fontWeight: "500",
                whiteSpace: "pre-wrap",
              }}
            >
              {" "}
              North East
            </Box>
          </Box>
          <Box
            sx={{
              alignSelf: "stretch",
              flex: 1,
              borderRadius: "7.8px",
              backgroundColor: "#e1ecff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0px 23.3px",
            }}
          >
            <Box sx={{ position: "relative", fontWeight: "500" }}>
              North West
            </Box>
          </Box>
          <Box
            sx={{
              alignSelf: "stretch",
              flex: 1,
              borderRadius: "7.8px",
              backgroundColor: "#e1ecff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0px 23.3px",
            }}
          >
            <Box sx={{ position: "relative", fontWeight: "500" }}>
              South East
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            alignSelf: "stretch",
            flex: 1,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "30.1px",
          }}
        >
          <Box
            sx={{
              alignSelf: "stretch",
              flex: 1,
              borderRadius: "7.8px",
              backgroundColor: "#e1ecff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0px 23.3px",
            }}
          >
            <Box sx={{ position: "relative", fontWeight: "500" }}>
              South West
            </Box>
          </Box>
          <Box
            sx={{
              alignSelf: "stretch",
              flex: 1,
              borderRadius: "7.8px",
              backgroundColor: "#e1ecff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0px 23.3px",
            }}
          >
            <Box sx={{ position: "relative", fontWeight: "500" }}>
              West Midlands
            </Box>
          </Box>
          <Box
            sx={{
              alignSelf: "stretch",
              flex: 1,
              borderRadius: "7.8px",
              backgroundColor: "#e1ecff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0px 23.3px",
            }}
          >
            <Box
              sx={{ position: "relative", fontWeight: "500" }}
            >{`Yorkshire & the Humber`}</Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Diagram;
