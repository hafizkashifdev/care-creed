import type { NextPage } from "next";
import { useState, useCallback } from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import ColorLegendsKey2 from "../../components/CL-2/color-legends-key2";
import PortalPopup from "../../components/CL-2/portal-popup";
import { useRouter } from "next/router";

const CareLibraryCOBITImplementat: NextPage = () => {
  const [isColorLegendsKeyOpen, setColorLegendsKeyOpen] = useState(false);
  const router = useRouter();

  const openColorLegendsKey = useCallback(() => {
    setColorLegendsKeyOpen(true);
  }, []);

  const closeColorLegendsKey = useCallback(() => {
    setColorLegendsKeyOpen(false);
  }, []);

  const onIconslineararrowLeftClick = useCallback(() => {
    router.push("/CL-2/care-library");
  }, [router]);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          position: "relative",
          backgroundColor: "#fff",
          height: "1386px",
          textAlign: "left",
          fontSize: "32px",
          color: "#5a5867",
          fontFamily: "Outfit",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "109px",
            left: "calc(50% - 920px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <Box
              sx={{
                width: "778px",
                position: "relative",
                lineHeight: "40px",
                fontWeight: "600",
                display: "inline-block",
                flexShrink: "0",
              }}
            >
              COBIT Implementation
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "101px",
            left: "1552px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            cursor: "pointer",
            textAlign: "center",
          }}
        >
          <Box
            sx={{ position: "relative", lineHeight: "40px", fontWeight: "600" }}
          >
            Color Legends (Key)
          </Box>
          <Image
            style={{
              width: "31px",
              position: "relative",
              height: "31px",
              overflow: "hidden",
              flexShrink: "0",
              objectFit: "cover",
            }}
            width={31}
            height={31}
            alt=""
            src="/CL-2/chevron-11@2x.png"
          />
        </Box>
        <Image
          style={{
            position: "absolute",
            top: "40px",
            left: "40px",
            width: "48px",
            height: "48px",
            cursor: "pointer",
          }}
          width={48}
          height={48}
          alt=""
          src="/CL-2/iconslineararrowleft.svg"
          onClick={onIconslineararrowLeftClick}
        />
        <Box
          sx={{
            position: "absolute",
            top: "177px",
            left: "38px",
            borderRadius: "12px",
            backgroundColor: "#fff",
            borderWidth: "4px",
            borderStyle: "dashed",
            borderColor: "#666",
            boxSizing: "border-box",
            width: "1844px",
            height: "1162px",
          }}
        >
          <Image
            style={{
              position: "absolute",
              top: "94px",
              left: "21px",
              width: "1796px",
              height: "1023.7px",
              objectFit: "cover",
            }}
            width={1796}
            height={1024}
            alt=""
            src="/CL-2/12599c714ff1484a8f6ebd34002a1412-1@2x.png"
          />
        </Box>
      </Box>
      {isColorLegendsKeyOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeColorLegendsKey}
        >
          <ColorLegendsKey2 onClose={closeColorLegendsKey} />
        </PortalPopup>
      )}
    </>
  );
};

export default CareLibraryCOBITImplementat;
