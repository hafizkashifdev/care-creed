import type { NextPage } from "next";
import { useCallback } from "react";
import { Typography, Box } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

const CareLibraryRequiredMembershipDomiciliaryCareAgenciesPurposeOfProductCertification: NextPage =
  () => {
    const router = useRouter();

    const onBackIconClick = useCallback(() => {
      router.push(
        "/care-library-required-membership-domiciliary-care-agencies"
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
            src="/CL-2/back-icon.svg"
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
                Purpose of Product Certification:
              </Typography>
            </Typography>
            <Typography
              variant="inherit"
              sx={{ marginBlockStart: 0, marginBlockEnd: "10px" }}
            >
              Domiciliary Care Agencies Membership serves as an accreditation
              for organizations providing care services directly to individuals
              in their own homes. The certification demonstrates the agency’s
              commitment to high-quality care and adherence to regulatory
              standards. Key purposes include:
            </Typography>
            <ul
              style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}
            >
              <li style={{ marginBottom: "0px" }}>
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{ fontFamily: "Inter" }}
                >{`Quality Assurance: `}</Typography>
                <Typography variant="inherit" component="span">
                  Ensures that care services are provided according to national
                  care standards and guidelines.
                </Typography>
              </li>
              <li style={{ marginBottom: "0px" }}>
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{ fontFamily: "Inter" }}
                >{`Trust Building: `}</Typography>
                <Typography
                  variant="inherit"
                  component="span"
                  sx={{ fontFamily: "Inter" }}
                >
                  Enhances credibility with clients, families, and local
                  authorities by showing commitment to reliable and professional
                  care services.
                </Typography>
              </li>
              <li style={{ marginBottom: "0px" }}>
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{ fontFamily: "Inter" }}
                >{`Access to Resources: `}</Typography>
                <Typography
                  variant="inherit"
                  component="span"
                  sx={{ fontFamily: "Inter" }}
                >
                  Provides access to updated care practices, resources, and
                  industry guidance to improve service delivery.
                </Typography>
              </li>
              <li style={{ marginBottom: "0px" }}>
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{ fontFamily: "Inter" }}
                >{`Compliance with Legislation: `}</Typography>
                <Typography
                  variant="inherit"
                  component="span"
                  sx={{ fontFamily: "Inter" }}
                >
                  Helps ensure that agencies comply with the Care Quality
                  Commission (CQC) regulations and other governing bodies.
                </Typography>
              </li>
              <li style={{ marginBottom: "0px" }}>
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{ fontFamily: "Inter" }}
                >{`Competitive Advantage: `}</Typography>
                <Typography
                  variant="inherit"
                  component="span"
                  sx={{ fontFamily: "Inter" }}
                >
                  Helps attract clients by demonstrating commitment to high
                  standards, safety, and patient-centered care.
                </Typography>
              </li>
              <li style={{ marginBottom: "0px" }}>
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{ fontFamily: "Inter" }}
                >{`Professional Development: `}</Typography>
                <Typography
                  variant="inherit"
                  component="span"
                  sx={{ fontFamily: "Inter" }}
                >
                  Offers opportunities for staff to engage in ongoing
                  professional training and development.
                </Typography>
              </li>
              <li style={{ marginBottom: "0px" }}>
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{ fontFamily: "Inter" }}
                >{`Network Opportunities: `}</Typography>
                <Typography
                  variant="inherit"
                  component="span"
                  sx={{ fontFamily: "Inter" }}
                >
                  Access to industry events, webinars, and support networks with
                  other care providers.
                </Typography>
              </li>
              <li style={{ marginBottom: "0px" }}>
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{ fontFamily: "Inter" }}
                >{`Public Recognition: `}</Typography>
                <Typography
                  variant="inherit"
                  component="span"
                  sx={{ fontFamily: "Inter" }}
                >
                  Certification highlights the agency’s role in improving home
                  care services, contributing to public health and safety.
                </Typography>
              </li>
              <li>
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{ fontFamily: "Inter" }}
                >{`Client Satisfaction: `}</Typography>
                <Typography
                  variant="inherit"
                  component="span"
                  sx={{ fontFamily: "Inter" }}
                >
                  Encourages a structured approach to improving client
                  satisfaction and experience.
                </Typography>
              </li>
            </ul>
          </Box>
        </Box>
      </Box>
    );
  };

export default CareLibraryRequiredMembershipDomiciliaryCareAgenciesPurposeOfProductCertification;
