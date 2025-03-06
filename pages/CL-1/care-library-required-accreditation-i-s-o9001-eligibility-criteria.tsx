import type { NextPage } from "next";
import { useCallback } from "react";
import { Typography, Box } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

const CareLibraryRequiredAccreditationISO9001EligibilityCriteria: NextPage =
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
          height: "1661px",
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
            height: "1431px",
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
          <Box
            sx={{ flex: 1, position: "relative", textTransform: "capitalize" }}
          >
            <Typography
              variant="inherit"
              sx={{ marginBlockStart: 0, marginBlockEnd: "10px" }}
            >
              <Typography variant="inherit" component="b">
                Eligibility Criteria for ISO 9001 Certification
              </Typography>
            </Typography>
            <Typography
              variant="inherit"
              sx={{ marginBlockStart: 0, marginBlockEnd: "10px" }}
            >
              ISO 9001 certification does not require a specific "license" but
              involves meeting several criteria to ensure your organisation’s
              Quality Management System (QMS) aligns with the standard. Here are
              the key prerequisites:
            </Typography>
            <ol
              style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}
            >
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="b">
                  Established Quality Management System (QMS):
                </Typography>
              </li>
            </ol>
            <ul
              style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}
            >
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  Your organisation must have a documented and well-implemented
                  QMS that aligns with ISO 9001 requirements, covering policies,
                  processes, and procedures.
                </Typography>
              </li>
            </ul>
            <ol
              style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}
            >
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="b">
                  Commitment from Top Management:
                </Typography>
              </li>
            </ol>
            <ul
              style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}
            >
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  Leadership commitment to quality is essential. Management must
                  demonstrate active involvement in the QMS and allocate
                  resources to ensure its success.
                </Typography>
              </li>
            </ul>
            <ol
              style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}
            >
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="b">
                  Defined Quality Policy and Objectives:
                </Typography>
              </li>
            </ol>
            <ul
              style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}
            >
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  Develop a quality policy and set measurable quality objectives
                  that are aligned with your business goals. These objectives
                  should focus on continual improvement and customer
                  satisfaction.
                </Typography>
              </li>
            </ul>
            <ol
              style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}
            >
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="b">
                  Customer Focus:
                </Typography>
              </li>
            </ol>
            <ul
              style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}
            >
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  Your organisation must show evidence of a strong focus on
                  meeting customer needs and enhancing customer satisfaction
                  through effective quality management.
                </Typography>
              </li>
            </ul>
            <ol
              style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}
            >
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="b">
                  Internal Audits and Reviews:
                </Typography>
              </li>
            </ol>
            <ul
              style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}
            >
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  Conduct regular internal audits to ensure that the QMS is
                  functioning as intended and complies with ISO 9001 standards.
                  Management reviews must be conducted to evaluate and improve
                  the QMS.
                </Typography>
              </li>
            </ul>
            <ol
              style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}
            >
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="b">
                  Documented Processes:
                </Typography>
              </li>
            </ol>
            <ul
              style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}
            >
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  Your organisation must document key processes, including the
                  inputs, outputs, responsibilities, and methods to control and
                  improve them.
                </Typography>
              </li>
            </ul>
            <ol
              style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}
            >
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="b">
                  Risk-Based Thinking:
                </Typography>
              </li>
            </ol>
            <ul
              style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}
            >
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  ISO 9001 requires organisations to identify and manage risks
                  and opportunities that could impact the QMS and overall
                  performance.
                </Typography>
              </li>
            </ul>
            <ol
              style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}
            >
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="b">
                  Employee Competence and Training:
                </Typography>
              </li>
            </ol>
            <ul
              style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}
            >
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  Ensure that staff members are trained and competent in
                  performing tasks that affect the quality of products or
                  services.
                </Typography>
              </li>
            </ul>
            <ol
              style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}
            >
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="b">
                  Continual Improvement:
                </Typography>
              </li>
            </ol>
            <ul
              style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}
            >
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  Demonstrate a commitment to continual improvement of your QMS
                  by regularly reviewing performance and implementing corrective
                  actions.
                </Typography>
              </li>
            </ul>
            <ol
              style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}
            >
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="b">
                  Monitoring and Measuring:
                </Typography>
              </li>
            </ol>
            <ul
              style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}
            >
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  Implement systems to monitor, measure, analyse, and evaluate
                  the effectiveness of your QMS processes to ensure ongoing
                  improvement and alignment with ISO 9001 standards.
                </Typography>
              </li>
            </ul>
            <Typography variant="inherit" sx={{ margin: 0 }}>
              By fulfilling these criteria, your organisation becomes eligible
              for ISO 9001 certification, which can enhance operational
              efficiency, customer satisfaction, and competitive standing.
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  };

export default CareLibraryRequiredAccreditationISO9001EligibilityCriteria;
