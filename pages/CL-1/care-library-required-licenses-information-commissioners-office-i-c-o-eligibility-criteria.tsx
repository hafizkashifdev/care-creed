import type { NextPage } from "next";
import { useCallback } from "react";
import { Typography, Box } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

const CareLibraryRequiredLicensesInformationCommissionersOfficeICOEligibilityCriteria: NextPage =
  () => {
    const router = useRouter();

    const onBackIconClick = useCallback(() => {
      router.push("/CL-1/");
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
                Eligibility Criteria
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
            fontSize: "18px",
            color: "rgba(0, 0, 0, 0.74)",
          }}
        >
          <Box sx={{ flex: 1, position: "relative" }}>
            <Typography
              variant="inherit"
              sx={{ marginBlockStart: 0, marginBlockEnd: "10px" }}
            >
              <Typography variant="inherit" component="b">
                To apply for ICO certification, applicants must:
              </Typography>
            </Typography>
            <ul
              style={{ margin: "0", fontSize: "inherit", paddingLeft: "24px" }}
            >
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  Process personal data in the course of providing health and
                  social care services.
                </Typography>
              </li>
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  Have a clear purpose for collecting and processing personal
                  data.
                </Typography>
              </li>
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  Demonstrate compliance with data protection principles, such
                  as lawfulness, fairness, and transparency.
                </Typography>
              </li>
              <li>
                <Typography variant="inherit" component="span">
                  Implement appropriate technical and organisational measures to
                  ensure data security.
                </Typography>
              </li>
            </ul>
          </Box>
        </Box>
      </Box>
    );
  };

export default CareLibraryRequiredLicensesInformationCommissionersOfficeICOEligibilityCriteria;
