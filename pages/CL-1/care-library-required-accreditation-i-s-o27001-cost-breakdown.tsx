import type { NextPage } from "next";
import { useCallback } from "react";
import { Typography, Box } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

const CareLibraryRequiredAccreditationISO27001CostBreakdown: NextPage = () => {
  const router = useRouter();

  const onBackIconClick = useCallback(() => {
    router.push("/CL-1/care-library-required-accreditation-i-s-o1");
  }, [router]);

  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        backgroundColor: "#fff",
        height: "1438px",
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
          height: "1312px",
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
            width: "1824px",
            height: "1259px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "24px",
          }}
        >
          <Box
            sx={{
              width: "1824px",
              position: "relative",
              display: "flex",
              alignItems: "center",
              height: "238px",
              flexShrink: "0",
            }}
          >
            <span style={{ width: "100%" }}>
              <Typography
                variant="inherit"
                sx={{ marginBlockStart: 0, marginBlockEnd: "10px" }}
              >
                <Typography variant="inherit" component="b">
                  Cost Breakdown of ISO/IEC 27001
                </Typography>
              </Typography>
              <Typography
                variant="inherit"
                sx={{ marginBlockStart: 0, marginBlockEnd: "10px" }}
              >
                Total Estimated Cost: $6,400 - $17,000 (initial certification
                including the first year of compliance)
              </Typography>
              <Typography
                variant="inherit"
                sx={{ marginBlockStart: 0, marginBlockEnd: "10px" }}
              >
                <Typography variant="inherit" component="b">
                  Notes:
                </Typography>
              </Typography>
              <ul
                style={{
                  margin: "0",
                  fontSize: "inherit",
                  paddingLeft: "32px",
                }}
              >
                <li style={{ marginBottom: "0px" }}>
                  <Typography variant="inherit" component="span">
                    Prices vary significantly based on the organisation’s sise,
                    industry, location, and the complexity of the ISMS.
                  </Typography>
                </li>
                <li>
                  <Typography variant="inherit" component="span">
                    It's advisable to obtain quotes from multiple certification
                    bodies and consultants to get a more accurate estimate
                    tailored to your specific situation.
                  </Typography>
                </li>
              </ul>
            </span>
          </Box>
          <Image
            style={{
              width: "1744px",
              position: "relative",
              maxHeight: "100%",
              objectFit: "cover",
            }}
            width={1744}
            height={927}
            alt=""
            src="/CL-1/image-42@2x.png"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default CareLibraryRequiredAccreditationISO27001CostBreakdown;
