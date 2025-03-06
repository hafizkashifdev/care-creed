import type { NextPage } from "next";
import { useCallback } from "react";
import { Typography, Box } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

const CareLibraryRequiredAffiliationInstituteOfHealthAndSocialCareManagementIHSCMTimelineForCertification: NextPage =
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
              >{`Timeline for Certification of IHSCM: `}</Typography>
            </Typography>
            <Typography
              variant="inherit"
              sx={{ marginBlockStart: 0, marginBlockEnd: "10px" }}
            >
              <Typography
                variant="inherit"
                component="b"
              >{`Application Submission: `}</Typography>
              <Typography
                variant="inherit"
                component="span"
                sx={{ fontFamily: "Inter" }}
              >
                Immediate upon completion.
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
              >{`Review Period: `}</Typography>
              <Typography variant="inherit" component="span">
                Approximately 2-4 weeks.
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
              >{`Decision Notification: `}</Typography>
              <Typography variant="inherit" component="span">
                Notification sent post-review.
              </Typography>
            </Typography>
            <Typography variant="inherit" sx={{ margin: 0 }}>
              <Typography
                variant="inherit"
                component="b"
                sx={{ fontFamily: "Inter" }}
              >{`Membership Activation: `}</Typography>
              <Typography variant="inherit" component="span">
                Immediate upon approval and payment confirmation.
              </Typography>
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  };

export default CareLibraryRequiredAffiliationInstituteOfHealthAndSocialCareManagementIHSCMTimelineForCertification;
