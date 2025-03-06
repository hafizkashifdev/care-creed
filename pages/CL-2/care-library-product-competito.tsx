import type { NextPage } from "next";
import { useState, useCallback } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import ColorLegendsKey1 from "../../components/CL-2/color-legends-key1";
import PortalPopup from "../../components/CL-2/portal-popup";
import { useRouter } from "next/router";

const CareLibraryProductCompetito: NextPage = () => {
  const [isColorLegendsKeyOpen, setColorLegendsKeyOpen] = useState(false);
  const router = useRouter();

  const openColorLegendsKey = useCallback(() => {
    setColorLegendsKeyOpen(true);
  }, []);

  const closeColorLegendsKey = useCallback(() => {
    setColorLegendsKeyOpen(false);
  }, []);

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
    <>
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
            Product Competitors
          </Box>
          <Box
            sx={{
              width: "456px",
              position: "relative",
              height: "42px",
              textAlign: "right",
              fontSize: "35px",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: "0px",
                left: "0px",
                textTransform: "uppercase",
                fontWeight: "600",
              }}
            >
              Color Legends (Key)
            </Box>
            <Image
              style={{
                position: "absolute",
                top: "1px",
                left: "416px",
                width: "40px",
                height: "40px",
                overflow: "hidden",
                objectFit: "cover",
                cursor: "pointer",
              }}
              width={40}
              height={40}
              alt=""
              src="/CL-2/chevron-1@2x.png"
              onClick={openColorLegendsKey}
            />
          </Box>
        </Box>
        <Box
          sx={{
            alignSelf: "stretch",
            height: "493px",
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
              padding: "174px 80px 80px",
              boxSizing: "border-box",
              position: "relative",
              gap: "35px",
              opacity: "0.8",
              minWidth: "407px",
              cursor: "pointer",
            }}
            onClick={onWdgtContainerClick}
          >
            <Image
              style={{
                width: "200px",
                position: "relative",
                height: "80px",
                objectFit: "cover",
                zIndex: "0",
              }}
              width={200}
              height={80}
              alt=""
              src="/CL-2/image-78@2x.png"
            />
            <Box
              sx={{
                width: "139px",
                position: "relative",
                textTransform: "capitalize",
                fontWeight: "600",
                display: "inline-block",
                height: "29px",
                flexShrink: "0",
                zIndex: "1",
              }}
            >
              20X.io
            </Box>
            <Box
              sx={{
                width: "40px",
                position: "absolute",
                margin: "0 !important",
                top: "27px",
                right: "40px",
                borderRadius: "5.6px",
                backgroundColor: "#ff0707",
                height: "40px",
                zIndex: "2",
              }}
            />
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
              padding: "182px 80px 80px",
              boxSizing: "border-box",
              position: "relative",
              gap: "35px",
              opacity: "0.8",
              minWidth: "407px",
              cursor: "pointer",
            }}
            onClick={onWdgtContainerClick1}
          >
            <Image
              style={{
                width: "200px",
                position: "relative",
                height: "58.6px",
                objectFit: "cover",
                zIndex: "0",
              }}
              width={200}
              height={59}
              alt=""
              src="/CL-2/image-79@2x.png"
            />
            <Box
              sx={{
                width: "173px",
                position: "relative",
                textTransform: "capitalize",
                fontWeight: "600",
                display: "inline-block",
                height: "75px",
                flexShrink: "0",
                zIndex: "1",
              }}
            >
              <Typography variant="inherit" sx={{ margin: 0 }}>
                Trinity Care
              </Typography>
            </Box>
            <Box
              sx={{
                width: "40px",
                position: "absolute",
                margin: "0 !important",
                top: "27px",
                right: "40px",
                borderRadius: "5.6px",
                backgroundColor: "#ff0707",
                height: "40px",
                zIndex: "2",
              }}
            />
          </Box>
        </Box>
      </Box>
      {isColorLegendsKeyOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeColorLegendsKey}
        >
          <ColorLegendsKey1 onClose={closeColorLegendsKey} />
        </PortalPopup>
      )}
    </>
  );
};

export default CareLibraryProductCompetito;
