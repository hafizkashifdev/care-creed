import type { NextPage } from "next";
import { useCallback } from "react";
import { Typography, Box } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

const CareLibraryRequiredAccredit5: NextPage = () => {
  const router = useRouter();

  const onBackIconClick = useCallback(() => {
    router.push("/CL-1/care-library-required-accredit");
  }, [router]);

  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        backgroundColor: "#fff",
        height: "1377px",
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
          height: "1251px",
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
          <ul style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}>
            <li style={{ marginBottom: "0px" }}>
              <Typography variant="inherit" component="b">
                Training Certificates
              </Typography>
            </li>
            <li style={{ marginBottom: "0px" }}>
              <Typography
                variant="inherit"
                component="b"
              >{`Description: `}</Typography>
              <Typography
                variant="inherit"
                component="span"
                sx={{ fontFamily: "Inter" }}
              >
                Proof that your organisation's staff members have completed the
                GSF training program, covering key areas such as palliative care
                best practices, communication, and care planning.
              </Typography>
            </li>
            <li style={{ marginBottom: "0px" }}>
              <Typography
                variant="inherit"
                component="b"
                sx={{ fontFamily: "Inter" }}
              >{`Sample: `}</Typography>
              <Typography
                variant="inherit"
                component="span"
                sx={{ fontFamily: "Inter" }}
              >
                A certificate might state: "This is to certify that [Staff Name]
                has successfully completed the GSF Training Program for
                end-of-life care." It will include the date of completion and
                the specific modules undertaken.
              </Typography>
            </li>
            <li style={{ marginBottom: "0px" }}>
              <Typography
                variant="inherit"
                component="b"
                sx={{ fontFamily: "Inter" }}
              >
                Self-Assessment Reports
              </Typography>
            </li>
            <li style={{ marginBottom: "0px" }}>
              <Typography
                variant="inherit"
                component="b"
              >{`Description: `}</Typography>
              <Typography
                variant="inherit"
                component="span"
                sx={{ fontFamily: "Inter" }}
              >
                A baseline self-assessment is required to identify the current
                care standards and areas for improvement within the
                organisation. This document is completed internally and used for
                tracking progress over time.
              </Typography>
            </li>
            <li style={{ marginBottom: "0px" }}>
              <Typography
                variant="inherit"
                component="b"
                sx={{ fontFamily: "Inter" }}
              >{`Sample: `}</Typography>
              <Typography
                variant="inherit"
                component="span"
                sx={{ fontFamily: "Inter" }}
              >
                The report will outline current practices, compliance with GSF
                standards, and plans for improvement. It might include sections
                on patient care plans, communication with families, and staff
                training.
              </Typography>
            </li>
            <li style={{ marginBottom: "0px" }}>
              <Typography
                variant="inherit"
                component="b"
                sx={{ fontFamily: "Inter" }}
              >
                Care Plans
              </Typography>
            </li>
            <li style={{ marginBottom: "0px" }}>
              <Typography
                variant="inherit"
                component="b"
              >{`Description: `}</Typography>
              <Typography
                variant="inherit"
                component="span"
                sx={{ fontFamily: "Inter" }}
              >
                Sample care plans should demonstrate the implementation of GSF
                principles in the treatment and care of individuals nearing the
                end of life. These plans should be personalised and reflect the
                holistic approach promoted by GSF.
              </Typography>
            </li>
            <li style={{ marginBottom: "0px" }}>
              <Typography
                variant="inherit"
                component="b"
                sx={{ fontFamily: "Inter" }}
              >{`Sample: `}</Typography>
              <Typography
                variant="inherit"
                component="span"
                sx={{ fontFamily: "Inter" }}
              >
                "Care Plan for [Patient Name]: Includes patient’s medical
                history, preferences for end-of-life care, communication
                preferences, and spiritual or emotional support needs."
              </Typography>
            </li>
            <li style={{ marginBottom: "0px" }}>
              <Typography
                variant="inherit"
                component="b"
                sx={{ fontFamily: "Inter" }}
              >
                Quality Improvement Records
              </Typography>
            </li>
            <li style={{ marginBottom: "0px" }}>
              <Typography
                variant="inherit"
                component="b"
              >{`Description: `}</Typography>
              <Typography
                variant="inherit"
                component="span"
                sx={{ fontFamily: "Inter" }}
              >
                Documentation that shows continuous quality improvement
                initiatives within your organisation. This includes records of
                audits, surveys, or other performance evaluations used to
                enhance care quality.
              </Typography>
            </li>
            <li style={{ marginBottom: "0px" }}>
              <Typography
                variant="inherit"
                component="b"
                sx={{ fontFamily: "Inter" }}
              >{`Sample: `}</Typography>
              <Typography
                variant="inherit"
                component="span"
                sx={{ fontFamily: "Inter" }}
              >
                A record might detail the "introduction of advanced care
                planning meetings," or the "implementation of regular team
                briefings on palliative care best practices."
              </Typography>
            </li>
            <li style={{ marginBottom: "0px" }}>
              <Typography
                variant="inherit"
                component="b"
                sx={{ fontFamily: "Inter" }}
              >
                Staff Training Logs
              </Typography>
            </li>
            <li style={{ marginBottom: "0px" }}>
              <Typography
                variant="inherit"
                component="b"
              >{`Description: `}</Typography>
              <Typography
                variant="inherit"
                component="span"
                sx={{ fontFamily: "Inter" }}
              >
                Logs showing the ongoing training and development of staff in
                areas related to end-of-life care. This ensures that the
                organisation is maintaining high standards of care by keeping
                staff updated with the latest practices.
              </Typography>
            </li>
            <li>
              <Typography
                variant="inherit"
                component="b"
                sx={{ fontFamily: "Inter" }}
              >{`Sample: `}</Typography>
              <Typography
                variant="inherit"
                component="span"
                sx={{ fontFamily: "Inter" }}
              >
                The log could contain details such as: "Staff Member [Name]
                attended advanced GSF module on holistic care and communication,
                completed on [Date]."
              </Typography>
            </li>
          </ul>
        </Box>
      </Box>
    </Box>
  );
};

export default CareLibraryRequiredAccredit5;
