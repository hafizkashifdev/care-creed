import type { NextPage } from "next";
import { useCallback } from "react";
import { Typography, Box } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

const CareLibraryRequiredLicenses12: NextPage = () => {
  const router = useRouter();

  const onBackIconClick = useCallback(() => {
    router.push("/CL-1/care-library-required-licenses");
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
        padding: "24px",
        boxSizing: "border-box",
        gap: "12px",
        textAlign: "left",
        fontSize: "40px",
        color: "#0246bc",
        fontFamily: "Inter",
      }}
    >
      <Box
        sx={{
          alignSelf: "stretch",
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          padding: "10px",
          gap: "10px",
        }}
      >
        <Image
          style={{
            width: "48px",
            position: "relative",
            height: "48px",
            overflow: "hidden",
            flexShrink: "0",
            cursor: "pointer",
          }}
          width={48}
          height={48}
          alt=""
          src="/CL-1/back-icon3.svg"
          onClick={onBackIconClick}
        />
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
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="inherit"
              component="b"
              sx={{
                width: "1138px",
                position: "relative",
                display: "inline-block",
                fontWeight: "700",
              }}
            >
              Application Process
            </Typography>
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
          color: "rgba(0, 0, 0, 0.74)",
        }}
      >
        <Box sx={{ flex: 1, position: "relative" }}>
          <Typography
            variant="inherit"
            sx={{ marginBlockStart: 0, marginBlockEnd: "10px" }}
          >
            <Typography variant="inherit" component="b">
              Application process of CQC for Care Library
            </Typography>
          </Typography>
          <ul style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}>
            <li style={{ marginBottom: "0px" }}>
              <Typography
                variant="inherit"
                component="b"
              >{`Preparation: `}</Typography>
              <Typography variant="inherit" component="span">
                Gather all necessary documents that demonstrate compliance and
                readiness for certification.
              </Typography>
            </li>
            <li style={{ marginBottom: "0px" }}>
              <Typography
                variant="inherit"
                component="b"
                sx={{ fontFamily: "Inter" }}
              >{`Online Registration: `}</Typography>
              <Typography
                variant="inherit"
                component="span"
                sx={{ fontFamily: "Inter" }}
              >
                Create an account on the CQC registration portal.
              </Typography>
            </li>
            <li style={{ marginBottom: "0px" }}>
              <Typography
                variant="inherit"
                component="b"
                sx={{ fontFamily: "Inter" }}
              >{`Complete Application: `}</Typography>
              <Typography
                variant="inherit"
                component="span"
                sx={{ fontFamily: "Inter" }}
              >
                Fill out the online form, providing details about Care Library's
                services, management, and compliance systems.
              </Typography>
            </li>
            <li style={{ marginBottom: "0px" }}>
              <Typography
                variant="inherit"
                component="b"
                sx={{ fontFamily: "Inter" }}
              >{`Submit Application: `}</Typography>
              <Typography
                variant="inherit"
                component="span"
                sx={{ fontFamily: "Inter" }}
              >
                Review and submit the application along with required documents.
              </Typography>
            </li>
            <li style={{ marginBottom: "0px" }}>
              <Typography
                variant="inherit"
                component="b"
                sx={{ fontFamily: "Inter" }}
              >{`Payment: `}</Typography>
              <Typography
                variant="inherit"
                component="span"
                sx={{ fontFamily: "Inter" }}
              >
                Pay the associated registration fee as part of the application
                process.
              </Typography>
            </li>
            <li style={{ marginBottom: "0px" }}>
              <Typography
                variant="inherit"
                component="b"
                sx={{ fontFamily: "Inter" }}
              >{`Assessment: `}</Typography>
              <Typography
                variant="inherit"
                component="span"
                sx={{ fontFamily: "Inter" }}
              >
                CQC reviews the application and may request further information.
              </Typography>
            </li>
            <li style={{ marginBottom: "0px" }}>
              <Typography
                variant="inherit"
                component="b"
                sx={{ fontFamily: "Inter" }}
              >{`Inspection: `}</Typography>
              <Typography
                variant="inherit"
                component="span"
                sx={{ fontFamily: "Inter" }}
              >
                An inspection will be conducted to verify compliance with CQC
                standards.
              </Typography>
            </li>
            <li style={{ marginBottom: "0px" }}>
              <Typography
                variant="inherit"
                component="b"
                sx={{ fontFamily: "Inter" }}
              >{`Registration Decision: `}</Typography>
              <Typography
                variant="inherit"
                component="span"
                sx={{ fontFamily: "Inter" }}
              >
                Receive notification of registration status from CQC.
              </Typography>
            </li>
            <li>
              <Typography
                variant="inherit"
                component="b"
                sx={{ fontFamily: "Inter" }}
              >{`Certificate Issuance: `}</Typography>
              <Typography
                variant="inherit"
                component="span"
                sx={{ fontFamily: "Inter" }}
              >
                If successful, Care Library will receive its registration
                certificate.
              </Typography>
            </li>
          </ul>
        </Box>
      </Box>
    </Box>
  );
};

export default CareLibraryRequiredLicenses12;
