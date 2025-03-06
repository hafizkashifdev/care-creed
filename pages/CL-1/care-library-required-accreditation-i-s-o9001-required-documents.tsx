import type { NextPage } from "next";
import { useCallback } from "react";
import { Typography, Box } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

const CareLibraryRequiredAccreditationISO9001RequiredDocuments: NextPage =
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
          height: "2121px",
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
            height: "1995px",
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
                Required Documents for ISO 9001 Accreditation
              </Typography>
            </Typography>
            <ol
              style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}
            >
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="b">
                  Quality Manual:
                </Typography>
              </li>
            </ol>
            <ul
              style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}
            >
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  A document that outlines the organisation's quality management
                  system (QMS) and how it conforms to ISO 9001 requirements.
                </Typography>
              </li>
            </ul>
            <ol
              style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}
            >
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="b">
                  Quality Policy:
                </Typography>
              </li>
            </ol>
            <ul
              style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}
            >
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  A statement of the organisation’s intentions and direction
                  regarding quality as formally expressed by top management.
                </Typography>
              </li>
            </ul>
            <ol
              style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}
            >
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="b">
                  Quality Objectives:
                </Typography>
              </li>
            </ol>
            <ul
              style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}
            >
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  Documented objectives related to quality that are measurable
                  and consistent with the quality policy.
                </Typography>
              </li>
            </ul>
            <ol
              style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}
            >
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="b">
                  Procedures:
                </Typography>
              </li>
            </ol>
            <ul
              style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}
            >
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  Documented procedures that define how various processes within
                  the QMS are carried out. These may include:
                </Typography>
              </li>
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  Document control
                </Typography>
              </li>
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  Record control
                </Typography>
              </li>
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  Internal audit procedures
                </Typography>
              </li>
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  Corrective action procedures
                </Typography>
              </li>
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  Preventive action procedures
                </Typography>
              </li>
            </ul>
            <ol
              style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}
            >
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="b">
                  Work Instructions:
                </Typography>
              </li>
            </ol>
            <ul
              style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}
            >
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  Detailed instructions for specific tasks or processes that are
                  necessary to ensure consistency and quality in operations.
                </Typography>
              </li>
            </ul>
            <ol
              style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}
            >
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="b">
                  Process Flowcharts or Diagrams:
                </Typography>
              </li>
            </ol>
            <ul
              style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}
            >
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  Visual representations of processes that help illustrate the
                  sequence and interaction of activities within the QMS.
                </Typography>
              </li>
            </ul>
            <ol
              style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}
            >
              <li style={{ marginBottom: "0px" }}>
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{ fontFamily: "Inter" }}
                >
                  Records
                </Typography>
                <Typography variant="inherit" component="span">
                  :
                </Typography>
              </li>
            </ol>
            <ul
              style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}
            >
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  Evidence that demonstrates the effective operation of the QMS,
                  such as:
                </Typography>
              </li>
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  Training records
                </Typography>
              </li>
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  Audit records
                </Typography>
              </li>
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  Calibration records
                </Typography>
              </li>
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  Non-conformance reports
                </Typography>
              </li>
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  Management review minutes
                </Typography>
              </li>
            </ul>
            <ol
              style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}
            >
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="b">
                  Management Review Documentation:
                </Typography>
              </li>
            </ol>
            <ul
              style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}
            >
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  Records of management reviews, including agendas, minutes, and
                  follow-up actions.
                </Typography>
              </li>
            </ul>
            <ol
              style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}
            >
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="b">
                  Risk Assessment and Management Records:
                </Typography>
              </li>
            </ol>
            <ul
              style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}
            >
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  Documentation that demonstrates how risks are identified,
                  assessed, and managed within the QMS.
                </Typography>
              </li>
            </ul>
            <ol
              style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}
            >
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="b">
                  Customer Feedback and Satisfaction Records:
                </Typography>
              </li>
            </ol>
            <ul
              style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}
            >
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  Documentation related to customer satisfaction surveys,
                  feedback forms, and any actions taken to address customer
                  concerns.
                </Typography>
              </li>
            </ul>
            <ol
              style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}
            >
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="b">
                  Supplier Evaluation Records:
                </Typography>
              </li>
            </ol>
            <ul
              style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}
            >
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  Documentation that outlines how suppliers are evaluated and
                  monitored for performance.
                </Typography>
              </li>
            </ul>
            <ol
              style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}
            >
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="b">
                  Change Control Records:
                </Typography>
              </li>
            </ol>
            <ul
              style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}
            >
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  Documentation that tracks changes to processes, products, or
                  services to ensure they are managed appropriately.
                </Typography>
              </li>
            </ul>
            <Typography
              variant="inherit"
              sx={{ marginBlockStart: 0, marginBlockEnd: "10px" }}
            >
              Additional Considerations
            </Typography>
            <ul
              style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}
            >
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  Training and Competence Records: Evidence of training and
                  competence of personnel involved in the QMS.
                </Typography>
              </li>
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  Communication Records: Documentation regarding internal and
                  external communication related to the QMS.
                </Typography>
              </li>
            </ul>
            <Typography
              variant="inherit"
              sx={{ marginBlockStart: 0, marginBlockEnd: "10px" }}
            >
              Organisations should ensure that these documents are appropriately
              controlled and maintained, as required by the ISO 9001 standard.
              Proper documentation not only helps achieve accreditation but also
              supports ongoing quality improvement efforts.
            </Typography>
            <Typography variant="inherit" sx={{ margin: 0 }}>
              If you need more information on any specific document or process,
              feel free to ask!
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  };

export default CareLibraryRequiredAccreditationISO9001RequiredDocuments;
