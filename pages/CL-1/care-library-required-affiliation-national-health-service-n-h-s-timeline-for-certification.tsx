import type { NextPage } from "next";
import { useCallback } from "react";
import { Typography, Box } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

const CareLibraryRequiredAffiliationNationalHealthServiceNHSTimelineForCertification: NextPage =
  () => {
    const router = useRouter();

    const onBackIconClick = useCallback(() => {
      router.push(
        "/CL-1/care-library-required-affiliation-national-health-service-n-h-s"
      );
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
                Timeline For Certification
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
            height: "954px",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "16px",
            textAlign: "justify",
            fontSize: "18px",
            color: "rgba(0, 0, 0, 0.74)",
          }}
        >
          <Box
            sx={{ flex: 1, position: "relative", textTransform: "capitalize" }}
          >
            <Typography
              variant="inherit"
              sx={{ marginBlockStart: 0, marginBlockEnd: "10px" }}
            >
              <Typography
                variant="inherit"
                component="b"
              >{`Timeline for Certification of NHS: `}</Typography>
            </Typography>
            <Typography
              variant="inherit"
              sx={{ marginBlockStart: 0, marginBlockEnd: "10px" }}
            >
              The timeline for affiliation may vary depending on service scope
              and evaluation:
            </Typography>
            <ul
              style={{ margin: "0", fontSize: "inherit", paddingLeft: "24px" }}
            >
              <li style={{ marginBottom: "0px" }}>
                <Typography
                  variant="inherit"
                  component="b"
                >{`Initial Inquiry Response: `}</Typography>
                <Typography
                  variant="inherit"
                  component="span"
                  sx={{ fontFamily: "Inter" }}
                >
                  1-2 weeks.
                </Typography>
              </li>
              <li style={{ marginBottom: "0px" }}>
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{ fontFamily: "Inter" }}
                >{`Document Review: `}</Typography>
                <Typography
                  variant="inherit"
                  component="span"
                  sx={{ fontFamily: "Inter" }}
                >
                  4-6 weeks.
                </Typography>
              </li>
              <li style={{ marginBottom: "0px" }}>
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{ fontFamily: "Inter" }}
                >{`Evaluation & Site Visit (if required): `}</Typography>
                <Typography
                  variant="inherit"
                  component="span"
                  sx={{ fontFamily: "Inter" }}
                >
                  6-8 weeks.
                </Typography>
              </li>
              <li style={{ marginBottom: "0px" }}>
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{ fontFamily: "Inter" }}
                >{`Final Decision: `}</Typography>
                <Typography
                  variant="inherit"
                  component="span"
                  sx={{ fontFamily: "Inter" }}
                >
                  2-4 weeks post evaluation.
                </Typography>
              </li>
              <li>
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{ fontFamily: "Inter" }}
                >{`Total Timeline: `}</Typography>
                <Typography
                  variant="inherit"
                  component="span"
                  sx={{ fontFamily: "Inter" }}
                >
                  12-20 weeks.
                </Typography>
              </li>
            </ul>
          </Box>
        </Box>
      </Box>
    );
  };

export default CareLibraryRequiredAffiliationNationalHealthServiceNHSTimelineForCertification;
