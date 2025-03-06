import type { NextPage } from "next";
import { useCallback } from "react";
import { Typography, Box } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

const CareLibraryRequiredMembershipPrimaryCarePurposeOfProductCertification: NextPage =
  () => {
    const router = useRouter();

    const onBackIconClick = useCallback(() => {
      router.push("/CL-2/care-library-required-membership-primary-care");
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
              Primary Care membership offers a formal recognition and
              affiliation with primary healthcare networks, which is essential
              for Care Library. The certification serves several key purposes:
            </Typography>
            <ul
              style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}
            >
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  Recognition in Healthcare Networks: Being recognized as a
                  trusted care provider in the primary care system.
                </Typography>
              </li>
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  Access to Resources: Gain access to resources like training
                  materials, healthcare guidelines, and government or NHS
                  initiatives.
                </Typography>
              </li>
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  Collaboration Opportunities: Build partnerships with primary
                  care providers such as General Practitioners (GPs), local
                  clinics, and healthcare services.
                </Typography>
              </li>
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  Compliance with Care Standards: Ensure Care Library meets the
                  highest standards of care in line with primary care practices.
                </Typography>
              </li>
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  Eligibility for Public Tenders: Membership makes Care Library
                  eligible to participate in government contracts or public care
                  programs.
                </Typography>
              </li>
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  Access to Training and Development: Members often gain access
                  to continuous professional development programs, essential for
                  keeping up with regulatory changes.
                </Typography>
              </li>
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  Quality Assurance: Having this membership is a mark of
                  high-quality care, which can be shared with stakeholders and
                  clients.
                </Typography>
              </li>
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  Improved Patient Outcomes: Membership promotes alignment with
                  best practices, improving patient outcomes and care delivery.
                </Typography>
              </li>
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  Networking Opportunities: Build a network with other
                  healthcare professionals and institutions.
                </Typography>
              </li>
              <li>
                <Typography variant="inherit" component="span">
                  Patient Referrals: Eligibility to receive patient referrals
                  from NHS primary care providers.
                </Typography>
              </li>
            </ul>
          </Box>
        </Box>
      </Box>
    );
  };

export default CareLibraryRequiredMembershipPrimaryCarePurposeOfProductCertification;
