import type { NextPage } from "next";
import { useCallback } from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

const CareLibrarySupportingDocum: NextPage = () => {
  const router = useRouter();

  const onBackIconClick = useCallback(() => {
    router.push("/CL-2/care-library");
  }, [router]);

  const onWdgtContainerClick = useCallback(() => {
    window.open("https://20x.io/website/nursing-agency-software/");
  }, []);

  const onWdgtContainerClick1 = useCallback(() => {
    window.open(
      "https://www.trinityhomecare.co.uk/types-of-care/emergency-care-at-home/"
    );
  }, []);

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
        gap: "40px",
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
          Supporting Documents/ Guidelines
        </Box>
      </Box>
      <Box
        sx={{
          alignSelf: "stretch",
          height: "474px",
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
            justifyContent: "flex-start",
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
              width: "444.9px",
              position: "relative",
              height: "212px",
              objectFit: "cover",
            }}
            width={445}
            height={212}
            alt=""
            src="/CL-2/image-781@2x.png"
          />
          <Box
            sx={{
              alignSelf: "stretch",
              position: "relative",
              textTransform: "capitalize",
              fontWeight: "600",
              display: "inline-block",
              height: "29px",
              flexShrink: "0",
            }}
          >
            20X.io
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
            justifyContent: "flex-start",
            padding: "80px",
            boxSizing: "border-box",
            gap: "35px",
            opacity: "0.8",
            minWidth: "407px",
            cursor: "pointer",
          }}
          onClick={onWdgtContainerClick1}
        >
          <Image
            style={{
              width: "638.6px",
              position: "relative",
              height: "187px",
              objectFit: "cover",
            }}
            width={639}
            height={187}
            alt=""
            src="/CL-2/image-791@2x.png"
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
            Trinity Care
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CareLibrarySupportingDocum;
