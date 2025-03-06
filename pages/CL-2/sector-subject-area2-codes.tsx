import type { NextPage } from "next";
import { useCallback } from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

const SectorSubjectArea2Codes: NextPage = () => {
  const router = useRouter();

  const onVuesaxboldarrowSquareLeftClick = useCallback(() => {
    router.push("/CL-2/l-a-r-s-courses-classification");
  }, [router]);

  const onWdgtContainerClick = useCallback(() => {
    router.push("/CL-2/l-d-c-s-codes");
  }, [router]);

  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        backgroundColor: "#fff",
        height: "1330px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "116px",
        boxSizing: "border-box",
        gap: "69.6px",
        textAlign: "left",
        fontSize: "80px",
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
            width: "61px",
            position: "relative",
            height: "61px",
            cursor: "pointer",
          }}
          width={61}
          height={61}
          alt=""
          src="/CL-2/vuesaxboldarrowsquareleft1.svg"
          onClick={onVuesaxboldarrowSquareLeftClick}
        />
        <Box sx={{ flex: 1, position: "relative", fontWeight: "600" }}>
          10-History, Philosophy and Theology
        </Box>
      </Box>
      <Box
        sx={{
          alignSelf: "stretch",
          height: "939px",
          overflow: "hidden",
          flexShrink: "0",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          flexWrap: "wrap",
          alignContent: "flex-start",
          gap: "40px 20px",
          textAlign: "center",
          fontSize: "24px",
          color: "#024d9c",
        }}
      >
        <Box
          sx={{
            flex: 1,
            borderRadius: "40px",
            backgroundColor: "#e1ecff",
            height: "447px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "80px",
            boxSizing: "border-box",
            gap: "35px",
            opacity: "0.8",
            minWidth: "407px",
          }}
        >
          <Image
            style={{
              width: "128px",
              position: "relative",
              height: "128px",
              objectFit: "cover",
            }}
            width={128}
            height={128}
            alt=""
            src="/CL-2/2161353-1@2x.png"
          />
          <Box
            sx={{
              alignSelf: "stretch",
              position: "relative",
              textTransform: "capitalize",
              fontWeight: "600",
              display: "inline-block",
              height: "63px",
              flexShrink: "0",
            }}
          >
            10-History, Philosophy and Theology
          </Box>
        </Box>
        <Box
          sx={{
            flex: 1,
            borderRadius: "40px",
            backgroundColor: "#e1ecff",
            height: "447px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "80px",
            boxSizing: "border-box",
            gap: "35px",
            opacity: "0.8",
            minWidth: "407px",
            cursor: "pointer",
          }}
          onClick={onWdgtContainerClick}
        >
          <Image
            style={{
              width: "128px",
              position: "relative",
              height: "128px",
              objectFit: "cover",
            }}
            width={128}
            height={128}
            alt=""
            src="/CL-2/2550251-1@2x.png"
          />
          <Box
            sx={{
              alignSelf: "stretch",
              position: "relative",
              textTransform: "capitalize",
              fontWeight: "600",
              display: "inline-block",
              height: "48px",
              flexShrink: "0",
            }}
          >
            10.1-History
          </Box>
        </Box>
        <Box
          sx={{
            flex: 1,
            borderRadius: "40px",
            backgroundColor: "#e1ecff",
            height: "447px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "80px",
            boxSizing: "border-box",
            gap: "35px",
            opacity: "0.8",
            minWidth: "407px",
          }}
        >
          <Image
            style={{
              width: "128px",
              position: "relative",
              height: "128px",
              objectFit: "cover",
            }}
            width={128}
            height={128}
            alt=""
            src="/CL-2/2414564-1@2x.png"
          />
          <Box
            sx={{
              width: "375px",
              position: "relative",
              textTransform: "capitalize",
              fontWeight: "600",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "76px",
              flexShrink: "0",
            }}
          >
            10.2-Archaeology and Archaeological Sciences
          </Box>
        </Box>
        <Box
          sx={{
            flex: 1,
            borderRadius: "40px",
            backgroundColor: "#e1ecff",
            height: "447px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "80px",
            boxSizing: "border-box",
            gap: "35px",
            opacity: "0.8",
            minWidth: "407px",
          }}
        >
          <Image
            style={{
              width: "128px",
              position: "relative",
              height: "128px",
              objectFit: "cover",
            }}
            width={128}
            height={128}
            alt=""
            src="/CL-2/6981101-1@2x.png"
          />
          <Box
            sx={{
              alignSelf: "stretch",
              position: "relative",
              textTransform: "capitalize",
              fontWeight: "600",
              display: "inline-block",
              height: "48px",
              flexShrink: "0",
            }}
          >
            10.3-Philosophy
          </Box>
        </Box>
        <Box
          sx={{
            flex: 1,
            borderRadius: "40px",
            backgroundColor: "#e1ecff",
            height: "447px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "80px",
            boxSizing: "border-box",
            gap: "35px",
            opacity: "0.8",
            minWidth: "407px",
          }}
        >
          <Image
            style={{
              width: "128px",
              position: "relative",
              height: "128px",
              objectFit: "cover",
            }}
            width={128}
            height={128}
            alt=""
            src="/CL-2/3450808-1@2x.png"
          />
          <Box
            sx={{
              alignSelf: "stretch",
              position: "relative",
              textTransform: "capitalize",
              fontWeight: "600",
              display: "inline-block",
              height: "76px",
              flexShrink: "0",
            }}
          >
            10.4-Theology and Religious Studies
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SectorSubjectArea2Codes;
