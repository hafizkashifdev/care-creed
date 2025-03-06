import type { NextPage } from "next";
import { useCallback } from "react";
import { Typography, Box } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

const CareLibraryRequiredMembershipPrimaryCareRequiredDocuments: NextPage =
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
            <ul
              style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}
            >
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="b">
                  Registration Certificate:
                </Typography>
                <Typography variant="inherit" component="span">
                  {" "}
                  Proof of registration with a healthcare regulatory body such
                  as the Care Quality Commission (CQC).
                </Typography>
              </li>
              <li style={{ marginBottom: "0px" }}>
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{ fontFamily: "Inter" }}
                >
                  Sample:
                </Typography>
                <Typography
                  variant="inherit"
                  component="span"
                  sx={{ fontFamily: "Inter" }}
                >
                  {" "}
                  CQC certificate of registration.
                </Typography>
              </li>
              <li style={{ marginBottom: "0px" }}>
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{ fontFamily: "Inter" }}
                >
                  Health and Safety Policy:
                </Typography>
                <Typography
                  variant="inherit"
                  component="span"
                  sx={{ fontFamily: "Inter" }}
                >
                  {" "}
                  Documentation demonstrating compliance with health and safety
                  regulations.
                </Typography>
              </li>
              <li style={{ marginBottom: "0px" }}>
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{ fontFamily: "Inter" }}
                >
                  Sample:
                </Typography>
                <Typography
                  variant="inherit"
                  component="span"
                  sx={{ fontFamily: "Inter" }}
                >
                  {" "}
                  Health and safety manual.
                </Typography>
              </li>
              <li style={{ marginBottom: "0px" }}>
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{ fontFamily: "Inter" }}
                >{`Insurance Proof: `}</Typography>
                <Typography
                  variant="inherit"
                  component="span"
                  sx={{ fontFamily: "Inter" }}
                >
                  Public liability and professional indemnity insurance.
                </Typography>
              </li>
              <li style={{ marginBottom: "0px" }}>
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{ fontFamily: "Inter" }}
                >
                  Sample:
                </Typography>
                <Typography
                  variant="inherit"
                  component="span"
                  sx={{ fontFamily: "Inter" }}
                >
                  {" "}
                  Insurance certificates.
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
                  Documents showing the qualifications and training of
                  healthcare staff.
                </Typography>
              </li>
              <li style={{ marginBottom: "0px" }}>
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{ fontFamily: "Inter" }}
                >
                  Sample:
                </Typography>
                <Typography
                  variant="inherit"
                  component="span"
                  sx={{ fontFamily: "Inter" }}
                >
                  {" "}
                  Staff training certificates or diplomas.
                </Typography>
              </li>
              <li style={{ marginBottom: "0px" }}>
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{ fontFamily: "Inter" }}
                >
                  Financial Statements:
                </Typography>
                <Typography
                  variant="inherit"
                  component="span"
                  sx={{ fontFamily: "Inter" }}
                >
                  {" "}
                  Recent financial documents showing the organization’s
                  financial health.
                </Typography>
              </li>
              <li style={{ marginBottom: "0px" }}>
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{ fontFamily: "Inter" }}
                >
                  Sample:
                </Typography>
                <Typography
                  variant="inherit"
                  component="span"
                  sx={{ fontFamily: "Inter" }}
                >
                  {" "}
                  Audited financial statements from the past year.
                </Typography>
              </li>
              <li style={{ marginBottom: "0px" }}>
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{ fontFamily: "Inter" }}
                >
                  Care Services Overview:
                </Typography>
                <Typography
                  variant="inherit"
                  component="span"
                  sx={{ fontFamily: "Inter" }}
                >
                  {" "}
                  A detailed description of the services provided by Care
                  Library.
                </Typography>
              </li>
              <li style={{ marginBottom: "0px" }}>
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{ fontFamily: "Inter" }}
                >
                  Sample:
                </Typography>
                <Typography
                  variant="inherit"
                  component="span"
                  sx={{ fontFamily: "Inter" }}
                >
                  {" "}
                  Service brochures or care descriptions.
                </Typography>
              </li>
            </ul>
          </Box>
        </Box>
      </Box>
    );
  };

export default CareLibraryRequiredMembershipPrimaryCareRequiredDocuments;
