import type { NextPage } from "next";
import { useCallback } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

const CareLibraryThirdPartyAPIs: NextPage = () => {
  const router = useRouter();

  const onBackIconClick = useCallback(() => {
    router.push("/CL-2/care-library");
  }, [router]);

  const onWdgtContainerClick = useCallback(() => {
    router.push("/CL-2/care-library-chat-g-p-t4-defin");
  }, [router]);

  const onWdgtContainerClick1 = useCallback(() => {
    router.push("/CL-2/care-library-chat-g-p-t4-defin2");
  }, [router]);

  const onWdgtContainerClick2 = useCallback(() => {
    router.push("/CL-2/care-library-chat-g-p-t4-defin3");
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
          Third Party APIs
        </Box>
      </Box>
      <Box
        sx={{
          alignSelf: "stretch",
          height: "528px",
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
              borderRadius: "31px",
              height: "256px",
              objectFit: "cover",
              mixBlendMode: "multiply",
            }}
            width={256}
            height={256}
            alt=""
            src="/CL-2/oip-14@2x.png"
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
            S3 For Data Storing (Image/File)
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
              borderRadius: "42px",
              height: "257.7px",
              objectFit: "cover",
              mixBlendMode: "multiply",
            }}
            width={256}
            height={258}
            alt=""
            src="/CL-2/oip-16@2x.png"
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
            SES For Emails 
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
              borderRadius: "43px",
              height: "259.4px",
              objectFit: "cover",
              mixBlendMode: "multiply",
            }}
            width={256}
            height={259}
            alt=""
            src="/CL-2/oip-17@2x.png"
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
            <Typography variant="inherit" sx={{ margin: 0 }}>
              SNS For
            </Typography>
            <Typography variant="inherit" sx={{ margin: 0 }}>
              {" "}
              Notifications
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CareLibraryThirdPartyAPIs;
