import type { NextPage } from "next";
import { useCallback } from "react";
import { Typography, Box } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

const CareLibraryRequiredMembershipDomiciliaryCareAgenciesEligibilityCriteria: NextPage =
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
                To apply for Domiciliary Care Agencies certification, applicants
                must:
              </Typography>
            </Typography>
            <Typography
              variant="inherit"
              sx={{ marginBlockStart: 0, marginBlockEnd: "10px" }}
            >
              To be eligible for Domiciliary Care Agencies Membership, an
              organization must:
            </Typography>
            <ul
              style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}
            >
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  Be a registered domiciliary care provider under the CQC or the
                  equivalent body.
                </Typography>
              </li>
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  Provide care services in clients' homes, including personal
                  care and support.
                </Typography>
              </li>
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  Meet national care standards and regulatory requirements for
                  staff training, qualifications, and client safety.
                </Typography>
              </li>
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  Have an active, qualified staff with appropriate training in
                  healthcare, safety, and ethics.
                </Typography>
              </li>
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  Provide proof of insurance coverage, including public
                  liability and professional indemnity.
                </Typography>
              </li>
              <li>
                <Typography variant="inherit" component="span">
                  Demonstrate financial stability with up-to-date financial
                  reports.
                </Typography>
              </li>
            </ul>
          </Box>
        </Box>
      </Box>
    );
  };

export default CareLibraryRequiredMembershipDomiciliaryCareAgenciesEligibilityCriteria;
