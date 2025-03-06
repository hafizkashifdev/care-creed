import type { NextPage } from "next";
import { useCallback } from "react";
import { Typography, Box } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

const CareLibrarySubjectAccessRe: NextPage = () => {
  const router = useRouter();

  const onVuesaxboldarrowSquareLeftClick = useCallback(() => {
    router.push("/CL-2/care-library-subject-access-re1");
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
        padding: "30px",
        boxSizing: "border-box",
        gap: "30px",
        textAlign: "left",
        fontSize: "20px",
        color: "#0246bc",
        fontFamily: "Outfit",
      }}
    >
      <Box
        sx={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "30px",
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
        <Box
          sx={{
            width: "317px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "10px",
          }}
        >
          <Typography
            variant="inherit"
            component="b"
            sx={{ position: "relative", display: "none", fontWeight: "700" }}
          >
            1.
          </Typography>
          <Box
            sx={{
              position: "relative",
              fontSize: "50px",
              fontWeight: "600",
              fontFamily: "Inter",
            }}
          >
            Introduction
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          alignSelf: "stretch",
          borderRadius: "12px",
          backgroundColor: "#fff",
          borderWidth: "2px",
          borderStyle: "dashed",
          borderColor: "#0246bc",
          boxSizing: "border-box",
          height: "952px",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "16px",
          textAlign: "justify",
          fontSize: "24px",
          color: "#4b4242",
          fontFamily: "Inter",
        }}
      >
        <Box sx={{ flex: 1, position: "relative", fontWeight: "500" }}>
          A Subject Access Request (SAR) is a legal right under the UK General
          Data Protection Regulation (UK GDPR), allowing individuals to request
          copies of their personal data held by public bodies, including local
          authorities. When you submit a SAR to a UK local authority, they are
          legally required to provide the requested information within one month
          unless extensions apply.
        </Box>
      </Box>
    </Box>
  );
};

export default CareLibrarySubjectAccessRe;
