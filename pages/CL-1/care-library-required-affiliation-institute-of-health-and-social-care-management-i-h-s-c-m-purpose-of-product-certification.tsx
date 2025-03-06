import type { NextPage } from "next";
import { useCallback } from "react";
import { Typography, Box } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

const CareLibraryRequiredAffiliationInstituteOfHealthAndSocialCareManagementIHSCMPurposeOfProductCertification: NextPage =
  () => {
    const router = useRouter();

    const onBackIconClick = useCallback(() => {
      router.push(
        "/CL-1/care-library-required-affiliation-institute-of-health-and-social-care-management-i-h-s-c-m"
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
                Purpose of Product Certification
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
          <Box sx={{ flex: 1, position: "relative" }}>
            <Typography
              variant="inherit"
              sx={{ marginBlockStart: 0, marginBlockEnd: "10px" }}
            >
              <Typography variant="inherit" component="b">
                Purpose of Product Certification:
              </Typography>
            </Typography>
            <Typography
              variant="inherit"
              sx={{ marginBlockStart: 0, marginBlockEnd: "10px" }}
            >
              The affiliation with the Institute of Health and Social Care
              Management (IHSCM) aims to:
            </Typography>
            <ul
              style={{ margin: "0", fontSize: "inherit", paddingLeft: "24px" }}
            >
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  Promote high standards of management and leadership in health
                  and social care.
                </Typography>
              </li>
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  Provide members with access to professional development
                  resources and networking opportunities.
                </Typography>
              </li>
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  Support the implementation of best practices in health and
                  social care management.
                </Typography>
              </li>
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  Enhance the credibility and reputation of organisations within
                  the sector.
                </Typography>
              </li>
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  Facilitate continuous learning and professional growth for
                  managers and leaders.
                </Typography>
              </li>
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  Advocate for policy improvements and reforms that benefit the
                  health and social care sector.
                </Typography>
              </li>
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  Provide tools and frameworks to improve service delivery and
                  management practices.
                </Typography>
              </li>
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  Foster collaboration and communication among professionals in
                  the field.
                </Typography>
              </li>
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  Recognise and reward excellence in management within health
                  and social care settings.
                </Typography>
              </li>
              <li>
                <Typography variant="inherit" component="span">
                  Align with national standards and regulations, enhancing
                  compliance and governance.
                </Typography>
              </li>
            </ul>
          </Box>
        </Box>
      </Box>
    );
  };

export default CareLibraryRequiredAffiliationInstituteOfHealthAndSocialCareManagementIHSCMPurposeOfProductCertification;
