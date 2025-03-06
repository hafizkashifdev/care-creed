import type { NextPage } from "next";
import { useCallback } from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

const CareLibrarySocialMediaAcco: NextPage = () => {
  const router = useRouter();

  const onBackIconClick = useCallback(() => {
    router.push("/CL-2/care-library");
  }, [router]);

  const onWdgtContainerClick = useCallback(() => {
    window.open("https://twitter.com/carelibrary_");
  }, []);

  const onWdgtContainerClick1 = useCallback(() => {
    window.open("https://www.instagram.com/carelibrary_/");
  }, []);

  const onWdgtContainerClick2 = useCallback(() => {
    window.open("https://www.facebook.com/carelibraryofficial");
  }, []);

  const onWdgtContainerClick3 = useCallback(() => {
    window.open("https://www.tiktok.com/@carelibrary");
  }, []);

  const onWdgtContainerClick4 = useCallback(() => {
    window.open("https://www.linkedin.com/company/carelibrary/");
  }, []);

  const onWdgtContainerClick5 = useCallback(() => {
    window.open("https://www.youtube.com/@carelibraryuk/featured");
  }, []);

  const onWdgtContainerClick6 = useCallback(() => {
    window.open("https://www.pinterest.com/carelibrary/");
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        backgroundColor: "#fff",
        height: "1291px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "116px",
        boxSizing: "border-box",
        gap: "40px",
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
          Social Media Accounts
        </Box>
      </Box>
      <Box
        sx={{
          alignSelf: "stretch",
          height: "942px",
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
              width: "256px",
              position: "relative",
              height: "256px",
              objectFit: "cover",
            }}
            width={256}
            height={256}
            alt=""
            src="/CL-2/3256013-1@2x.png"
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
            Twitter
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
              width: "256px",
              position: "relative",
              height: "256px",
              objectFit: "cover",
            }}
            width={256}
            height={256}
            alt=""
            src="/CL-2/2111463-1@2x.png"
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
            Instagram
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
          onClick={onWdgtContainerClick2}
        >
          <Image
            style={{
              width: "256px",
              position: "relative",
              height: "256px",
              objectFit: "cover",
            }}
            width={256}
            height={256}
            alt=""
            src="/CL-2/9866992-1@2x.png"
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
            Facebook
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
          onClick={onWdgtContainerClick3}
        >
          <Image
            style={{
              width: "257.3px",
              position: "relative",
              borderRadius: "105px",
              height: "256px",
              objectFit: "cover",
            }}
            width={257}
            height={256}
            alt=""
            src="/CL-2/oip-12@2x.png"
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
            Tik Tok
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
          onClick={onWdgtContainerClick4}
        >
          <Image
            style={{
              width: "256px",
              position: "relative",
              height: "256px",
              objectFit: "cover",
            }}
            width={256}
            height={256}
            alt=""
            src="/CL-2/12942307-1@2x.png"
          />
          <Box
            sx={{
              alignSelf: "stretch",
              position: "relative",
              textTransform: "capitalize",
              fontWeight: "600",
              display: "inline-block",
              height: "39px",
              flexShrink: "0",
            }}
          >
            Linked In
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
          onClick={onWdgtContainerClick5}
        >
          <Image
            style={{
              width: "256px",
              position: "relative",
              height: "256px",
              objectFit: "cover",
            }}
            width={256}
            height={256}
            alt=""
            src="/CL-2/3938026-1@2x.png"
          />
          <Box
            sx={{
              alignSelf: "stretch",
              position: "relative",
              textTransform: "capitalize",
              fontWeight: "600",
              display: "inline-block",
              height: "39px",
              flexShrink: "0",
            }}
          >
            YouTube
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
          onClick={onWdgtContainerClick6}
        >
          <Image
            style={{
              width: "256px",
              position: "relative",
              borderRadius: "83.5px",
              height: "256px",
              objectFit: "cover",
              mixBlendMode: "multiply",
            }}
            width={256}
            height={256}
            alt=""
            src="/CL-2/oip-11@2x.png"
          />
          <Box
            sx={{
              alignSelf: "stretch",
              position: "relative",
              textTransform: "capitalize",
              fontWeight: "600",
              display: "inline-block",
              height: "39px",
              flexShrink: "0",
            }}
          >
            Pinterest
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CareLibrarySocialMediaAcco;
