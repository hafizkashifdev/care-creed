import type { NextPage } from "next";
import { useCallback } from "react";
import { Typography, Box } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

const CareLibraryRequiredLicensesInformationCommissionersOfficeICOTimelineForCertification: NextPage =
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
              >{`Timeline for Certification of CQC: `}</Typography>
            </Typography>
            <Typography
              variant="inherit"
              sx={{ marginBlockStart: 0, marginBlockEnd: "10px" }}
            >
              <Typography
                variant="inherit"
                component="b"
              >{`Preparation of Documents: `}</Typography>
              <Typography
                variant="inherit"
                component="span"
                sx={{ fontFamily: "Inter" }}
              >
                1-2 weeks
              </Typography>
            </Typography>
            <Typography
              variant="inherit"
              sx={{ marginBlockStart: 0, marginBlockEnd: "10px" }}
            >
              <Typography variant="inherit" component="b">
                Online Application Submission:
              </Typography>
              <Typography
                variant="inherit"
                component="span"
                sx={{ fontFamily: "Inter" }}
              >
                {" "}
                Immediate
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
              >{`Processing of Application: `}</Typography>
              <Typography variant="inherit" component="span">
                2-4 weeks (standard processing)
              </Typography>
            </Typography>
            <Typography
              variant="inherit"
              sx={{ marginBlockStart: 0, marginBlockEnd: "10px" }}
            >
              <Typography
                variant="inherit"
                component="b"
              >{`Registration Confirmation: `}</Typography>
              <Typography
                variant="inherit"
                component="span"
                sx={{ fontFamily: "Inter" }}
              >
                1-2 weeks after processing
              </Typography>
            </Typography>
            <Typography variant="inherit" sx={{ margin: 0 }}>
              <Typography
                variant="inherit"
                component="b"
              >{`Total Estimated Timeline: `}</Typography>
              <Typography
                variant="inherit"
                component="span"
                sx={{ fontFamily: "Inter" }}
              >
                Approximately 4-8 weeks
              </Typography>
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  };

export default CareLibraryRequiredLicensesInformationCommissionersOfficeICOTimelineForCertification;
