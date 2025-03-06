import type { NextPage } from "next";
import { useCallback } from "react";
import { Typography, Box } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

const CareLibraryRequiredAccreditationISO9001ApplicationProcess: NextPage =
  () => {
    const router = useRouter();

    const onBackIconClick = useCallback(() => {
      router.push("/CL-1/care-library-required-accreditation-i-s-o");
    }, [router]);

    return (
      <Box
        sx={{
          width: "100%",
          position: "relative",
          backgroundColor: "#fff",
          height: "1646px",
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
            height: "1290px",
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
                Application Process for ISO 9001 Certification
              </Typography>
            </Typography>
            <ol
              style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}
            >
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="b">
                  Initial Preparation
                </Typography>
              </li>
            </ol>
            <ul
              style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}
            >
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  Understand ISO 9001 Requirements: Familiarise yourself with
                  the ISO 9001 standard and its requirements for a quality
                  management system (QMS).
                </Typography>
              </li>
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  Gap Analysis: Conduct a gap analysis to identify areas where
                  your current processes do not meet ISO 9001 standards.
                </Typography>
              </li>
            </ul>
            <ol
              style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}
            >
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="b">
                  Develop a Quality Management System (QMS)
                </Typography>
              </li>
            </ol>
            <ul
              style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}
            >
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  Document Processes: Create documentation outlining your QMS,
                  including policies, procedures, and work instructions.
                </Typography>
              </li>
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  Implement the QMS: Train staff on the new processes and
                  implement the QMS throughout the organisation.
                </Typography>
              </li>
            </ul>
            <ol
              style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}
            >
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="b">
                  Internal Audit
                </Typography>
              </li>
            </ol>
            <ul
              style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}
            >
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  Conduct Internal Audits: Perform internal audits to assess
                  compliance with the QMS and identify areas for improvement.
                </Typography>
              </li>
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  Management Review: Hold management reviews to evaluate the
                  effectiveness of the QMS and make necessary adjustments.
                </Typography>
              </li>
            </ul>
            <ol
              style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}
            >
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="b">
                  Select a Certification Body
                </Typography>
              </li>
            </ol>
            <ul
              style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}
            >
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  Research Certification Bodies: Choose an accredited
                  certification body that specialises in ISO 9001 certification.
                </Typography>
              </li>
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  Request Quotes: Contact multiple certification bodies for
                  quotes and evaluate their services.
                </Typography>
              </li>
            </ul>
            <ol
              style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}
            >
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="b">
                  Application Submission
                </Typography>
              </li>
            </ol>
            <ul
              style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}
            >
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  Submit Application: Complete and submit the application form
                  provided by the chosen certification body, including necessary
                  documentation of your QMS.
                </Typography>
              </li>
            </ul>
            <ol
              style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}
            >
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="b">
                  Stage 1 Audit
                </Typography>
              </li>
            </ol>
            <ul
              style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}
            >
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  Preliminary Audit: The certification body will conduct a Stage
                  1 audit to assess your readiness for the full audit, focusing
                  on your documentation and understanding of the standard.
                </Typography>
              </li>
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  Address Findings: If there are any non-conformities, address
                  them before proceeding to the Stage 2 audit.
                </Typography>
              </li>
            </ul>
            <ol
              style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}
            >
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="b">
                  Stage 2 Audit
                </Typography>
              </li>
            </ol>
            <ul
              style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}
            >
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  Full Certification Audit: The certification body will conduct
                  a Stage 2 audit to evaluate the implementation and
                  effectiveness of your QMS against ISO 9001 standards.
                </Typography>
              </li>
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  Corrective Actions: If any non-conformities are found, you
                  will need to implement corrective actions and provide evidence
                  of resolution.
                </Typography>
              </li>
            </ul>
            <ol
              style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}
            >
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="b">
                  Certification Decision
                </Typography>
              </li>
            </ol>
            <ul
              style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}
            >
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  Certification Issuance: If the Stage 2 audit is successful,
                  the certification body will issue the ISO 9001 certificate.
                </Typography>
              </li>
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  Notification of Results: You will receive a report detailing
                  the audit findings and the certification decision.
                </Typography>
              </li>
            </ul>
            <ol
              style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}
            >
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="b">
                  Surveillance Audits
                </Typography>
              </li>
            </ol>
            <ul
              style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}
            >
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  Ongoing Compliance: The certification body will conduct
                  surveillance audits (typically annually) to ensure continued
                  compliance with ISO 9001 standards.
                </Typography>
              </li>
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  Renewal: The certification is valid for three years, after
                  which you will need to go through the renewal process.
                </Typography>
              </li>
            </ul>
            <ol
              style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}
            >
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="b">
                  Continuous Improvement
                </Typography>
              </li>
            </ol>
            <ul
              style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}
            >
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  Maintain QMS: Continuously improve your QMS by conducting
                  regular reviews, audits, and updating processes as needed to
                  align with ISO 9001 standards.
                </Typography>
              </li>
            </ul>
            <Typography variant="inherit" sx={{ margin: 0 }}>
              By following this application process, Care Library can achieve
              ISO 9001 certification, enhancing its reputation and operational
              efficiency in the competitive landscape.
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  };

export default CareLibraryRequiredAccreditationISO9001ApplicationProcess;
