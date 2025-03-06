import type { NextPage } from "next";
import { useCallback } from "react";
import { Typography, Box } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

const CareLibraryRequiredAccreditationISO9001CostBreakdown: NextPage = () => {
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
              Cost Breakdown of ISO 9001 Certification
            </Typography>
          </Typography>
          <Typography
            variant="inherit"
            sx={{ marginBlockStart: 0, marginBlockEnd: "10px" }}
          >
            <Typography variant="inherit" component="b">
              1. Application Fee:
            </Typography>
          </Typography>
          <ul style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}>
            <li style={{ marginBottom: "0px" }}>
              <Typography variant="inherit" component="span">
                Initial Application: The cost of ISO 9001 certification can vary
                depending on the sise and complexity of the organisation and the
                chosen certification body.
              </Typography>
            </li>
            <li style={{ marginBottom: "0px" }}>
              <Typography variant="inherit" component="span">
                Small Organisation: £1,000 - £2,000
              </Typography>
            </li>
            <li style={{ marginBottom: "0px" }}>
              <Typography variant="inherit" component="span">
                Medium Organisation: £2,000 - £5,000
              </Typography>
            </li>
            <li style={{ marginBottom: "0px" }}>
              <Typography variant="inherit" component="span">
                Large Organisation: £5,000 - £10,000 or more
              </Typography>
            </li>
          </ul>
          <Typography
            variant="inherit"
            sx={{ marginBlockStart: 0, marginBlockEnd: "10px" }}
          >
            <Typography variant="inherit" component="b">
              2. Annual Renewal Fee:
            </Typography>
          </Typography>
          <ul style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}>
            <li style={{ marginBottom: "0px" }}>
              <Typography variant="inherit" component="span">
                Organisations must pay an annual fee for maintaining
                certification:
              </Typography>
            </li>
            <li style={{ marginBottom: "0px" }}>
              <Typography variant="inherit" component="span">
                Small Organisation: £500 - £1,000
              </Typography>
            </li>
            <li style={{ marginBottom: "0px" }}>
              <Typography variant="inherit" component="span">
                Medium Organisation: £1,000 - £2,000
              </Typography>
            </li>
            <li style={{ marginBottom: "0px" }}>
              <Typography variant="inherit" component="span">
                Large Organisation: £2,000 - £5,000 or more
              </Typography>
            </li>
          </ul>
          <Typography
            variant="inherit"
            sx={{ marginBlockStart: 0, marginBlockEnd: "10px" }}
          >
            <Typography variant="inherit" component="b">
              3. Additional Costs:
            </Typography>
          </Typography>
          <ul style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}>
            <li style={{ marginBottom: "0px" }}>
              <Typography variant="inherit" component="span">
                Training Costs: Organisations may need to invest in training for
                staff on ISO 9001 requirements, which can range from £500 to
                £3,000 depending on the training provider and number of
                employees.
              </Typography>
            </li>
            <li style={{ marginBottom: "0px" }}>
              <Typography variant="inherit" component="span">
                Consultancy Fees: Hiring a consultant to help implement a
                quality management system can add costs, typically ranging from
                £1,000 to £5,000 based on the consultant’s expertise and the
                project scope.
              </Typography>
            </li>
            <li style={{ marginBottom: "0px" }}>
              <Typography variant="inherit" component="span">
                Internal Audit Costs: Organisations may choose to conduct
                internal audits to prepare for the certification process,
                costing approximately £500 to £2,000, depending on the audit
                scope.
              </Typography>
            </li>
          </ul>
          <Typography
            variant="inherit"
            sx={{ marginBlockStart: 0, marginBlockEnd: "10px" }}
          >
            <Typography variant="inherit" component="b">
              4. Other Potential Fees:
            </Typography>
          </Typography>
          <ul style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}>
            <li style={{ marginBottom: "0px" }}>
              <Typography variant="inherit" component="span">
                Late Renewal Fees: If an organisation fails to renew its
                certification on time, late fees may apply, usually around £300.
              </Typography>
            </li>
            <li style={{ marginBottom: "0px" }}>
              <Typography variant="inherit" component="span">
                Amendment Fees: Charges may apply for changes to the scope of
                certification or additional services offered, ranging from £200
                to £1,000.
              </Typography>
            </li>
          </ul>
          <Typography
            variant="inherit"
            sx={{ marginBlockStart: 0, marginBlockEnd: "10px" }}
          >
            <Typography variant="inherit" component="b">
              5. Total Estimated Cost:
            </Typography>
          </Typography>
          <ul style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}>
            <li>
              <Typography variant="inherit" component="span">
                For a small organisation, the initial certification and first
                year’s renewal may cost approximately £2,000 - £5,000 (excluding
                additional training and consultancy costs).
              </Typography>
            </li>
          </ul>
        </Box>
      </Box>
    </Box>
  );
};

export default CareLibraryRequiredAccreditationISO9001CostBreakdown;
