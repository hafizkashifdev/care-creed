import type { NextPage } from "next";
import { useCallback } from "react";
import { Typography, Box } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

const CareLibraryRequiredLicenses14: NextPage = () => {
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
              Required Documents
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
              Required Documents:
            </Typography>
          </Typography>
          <ul style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}>
            <li style={{ marginBottom: "0px" }}>
              <Typography
                variant="inherit"
                component="b"
              >{`Organisational Structure: `}</Typography>
              <Typography variant="inherit" component="span">
                An organisational chart that shows the hierarchy and
                responsibilities within Care Library.
              </Typography>
            </li>
            <li style={{ marginBottom: "0px" }}>
              <Typography
                variant="inherit"
                component="b"
                sx={{ fontFamily: "Inter" }}
              >{`Sample: `}</Typography>
              <Typography
                variant="inherit"
                component="span"
                sx={{ fontFamily: "Inter" }}
              >
                A simple diagram created using tools like PowerPoint or
                Lucidchart.
              </Typography>
            </li>
            <li style={{ marginBottom: "0px" }}>
              <Typography
                variant="inherit"
                component="b"
                sx={{ fontFamily: "Inter" }}
              >{`Policies and Procedures: `}</Typography>
              <Typography
                variant="inherit"
                component="span"
                sx={{ fontFamily: "Inter" }}
              >
                Documentation of policies related to safeguarding, health and
                safety, and quality assurance.
              </Typography>
            </li>
            <li style={{ marginBottom: "0px" }}>
              <Typography
                variant="inherit"
                component="b"
                sx={{ fontFamily: "Inter" }}
              >{`Sample: `}</Typography>
              <Typography
                variant="inherit"
                component="span"
                sx={{ fontFamily: "Inter" }}
              >
                A safeguarding policy document outlining protocols and
                responsibilities.
              </Typography>
            </li>
            <li style={{ marginBottom: "0px" }}>
              <Typography
                variant="inherit"
                component="b"
                sx={{ fontFamily: "Inter" }}
              >
                Quality Assurance Documentation:
              </Typography>
              <Typography
                variant="inherit"
                component="span"
                sx={{ fontFamily: "Inter" }}
              >
                {" "}
                Records of quality audits, risk assessments, and service
                improvement plans.
              </Typography>
            </li>
            <li style={{ marginBottom: "0px" }}>
              <Typography
                variant="inherit"
                component="b"
                sx={{ fontFamily: "Inter" }}
              >{`Sample: `}</Typography>
              <Typography
                variant="inherit"
                component="span"
                sx={{ fontFamily: "Inter" }}
              >
                A quality audit report template showcasing past audits and
                outcomes.
              </Typography>
            </li>
            <li style={{ marginBottom: "0px" }}>
              <Typography
                variant="inherit"
                component="b"
                sx={{ fontFamily: "Inter" }}
              >
                Staff Qualifications:
              </Typography>
              <Typography
                variant="inherit"
                component="span"
                sx={{ fontFamily: "Inter" }}
              >
                {" "}
                Evidence of staff training, qualifications, and competency
                assessments.
              </Typography>
            </li>
            <li>
              <Typography
                variant="inherit"
                component="b"
                sx={{ fontFamily: "Inter" }}
              >{`Sample: `}</Typography>
              <Typography
                variant="inherit"
                component="span"
                sx={{ fontFamily: "Inter" }}
              >
                CV templates or certificates of training completion.
              </Typography>
            </li>
          </ul>
        </Box>
      </Box>
    </Box>
  );
};

export default CareLibraryRequiredLicenses14;
