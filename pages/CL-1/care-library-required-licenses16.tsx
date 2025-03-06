import type { NextPage } from "next";
import { useCallback } from "react";
import { Typography, Box } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

const CareLibraryRequiredLicenses16: NextPage = () => {
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
          src="/CL-1/back-icon1.svg"
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
              Cost Breakdown
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
        <Box
          sx={{
            flex: 1,
            height: "424px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "24px",
          }}
        >
          <Box
            sx={{
              alignSelf: "stretch",
              position: "relative",
              display: "flex",
              alignItems: "center",
              height: "199px",
              flexShrink: "0",
            }}
          >
            <span>
              <Typography
                variant="inherit"
                sx={{ marginBlockStart: 0, marginBlockEnd: "10px" }}
              >
                <Typography variant="inherit" component="b">
                  Cost Breakdown of CQC :
                </Typography>
              </Typography>
              <Typography
                variant="inherit"
                sx={{ marginBlockStart: 0, marginBlockEnd: "10px" }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                >{`Application Fee: `}</Typography>
                <Typography variant="inherit" component="span">
                  Ranges based on service type and location.
                </Typography>
              </Typography>
              <Typography
                variant="inherit"
                sx={{ marginBlockStart: 0, marginBlockEnd: "10px" }}
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{ fontFamily: "Inter" }}
                >{`Annual Fees: `}</Typography>
                <Typography variant="inherit" component="span">
                  After registration, there are ongoing annual fees that also
                  vary based on your service type and number of locations.
                </Typography>
              </Typography>
              <Typography variant="inherit" sx={{ margin: 0 }}>
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{ fontFamily: "Inter" }}
                >{`Inspection Fees: `}</Typography>
                <Typography variant="inherit" component="span">
                  Additional costs may be incurred for inspections if necessary.
                </Typography>
              </Typography>
            </span>
          </Box>
          <Box
            sx={{
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "6px",
              textAlign: "left",
              color: "#000",
            }}
          >
            <Typography
              variant="inherit"
              component="b"
              sx={{
                alignSelf: "stretch",
                position: "relative",
                display: "flex",
                alignItems: "center",
                height: "33px",
                flexShrink: "0",
                fontWeight: "700",
              }}
            >
              Summary of Fee
            </Typography>
            <Image
              style={{
                width: "1800px",
                position: "relative",
                maxHeight: "100%",
                objectFit: "cover",
              }}
              width={1800}
              height={485}
              alt=""
              src="/CL-1/image-199@2x.png"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CareLibraryRequiredLicenses16;
