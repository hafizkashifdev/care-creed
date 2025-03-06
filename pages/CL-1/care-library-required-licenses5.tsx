import type { NextPage } from "next";
import { useCallback } from "react";
import { Typography, Box } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

const CareLibraryRequiredLicenses5: NextPage = () => {
  const router = useRouter();

  const onBackIconClick = useCallback(() => {
    router.push("/CL-1/care-library-required-licenses1");
  }, [router]);

  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        backgroundColor: "#fff",
        height: "1582px",
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
              Application Process
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
          height: "1456px",
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
              Application process of GDRP for Air Applecart
            </Typography>
          </Typography>
          <Typography
            variant="inherit"
            sx={{ marginBlockStart: 0, marginBlockEnd: "10px" }}
          >
            <Typography variant="inherit" component="b">
              1. Registration with the ICO
            </Typography>
          </Typography>
          <ul style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}>
            <li style={{ marginBottom: "0px" }}>
              <Typography variant="inherit" component="span">
                Step 1: Most organisations must register with the ICO. After
                applying, the ICO will confirm if registration is necessary and
                provide a reference number. Organisations must pay an annual fee
                based on their sise and type.
              </Typography>
            </li>
            <li style={{ marginBottom: "0px" }}>
              <Typography variant="inherit" component="span">
                Step 2: Once registered, your organisation will appear on the
                ICO’s public register, showing you're authorised to process
                personal data.
              </Typography>
            </li>
            <li style={{ marginBottom: "0px" }}>
              <Typography variant="inherit" component="span">
                Step 3: Keep registration details updated and renew annually by
                paying the required fee.
              </Typography>
            </li>
          </ul>
          <Typography
            variant="inherit"
            sx={{ marginBlockStart: 0, marginBlockEnd: "10px" }}
          >
            <Typography variant="inherit" component="b">
              2. Responding to a Data Breach
            </Typography>
          </Typography>
          <ul style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}>
            <li style={{ marginBottom: "0px" }}>
              <Typography variant="inherit" component="span">
                Step 1: Report any data breach to the ICO within 72 hours. The
                ICO will review the breach's details, including its scale and
                how it was detected.
              </Typography>
            </li>
            <li style={{ marginBottom: "0px" }}>
              <Typography variant="inherit" component="span">
                Step 2: The ICO may reach out for more information and provide
                guidance on containment.
              </Typography>
            </li>
            <li style={{ marginBottom: "0px" }}>
              <Typography variant="inherit" component="span">
                Step 3: If needed, the ICO may investigate further to assess
                compliance with GDPR.
              </Typography>
            </li>
            <li style={{ marginBottom: "0px" }}>
              <Typography variant="inherit" component="span">
                Step 4: The ICO will decide if further action is needed, such as
                enforcement notices or fines for non-compliance.
              </Typography>
            </li>
            <li style={{ marginBottom: "0px" }}>
              <Typography variant="inherit" component="span">
                Step 5: Follow any recommendations from the ICO to avoid
                penalties.
              </Typography>
            </li>
          </ul>
          <Typography
            variant="inherit"
            sx={{ marginBlockStart: 0, marginBlockEnd: "10px" }}
          >
            <Typography variant="inherit" component="b">
              3. Handling a Data Subject Complaint
            </Typography>
          </Typography>
          <ul style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}>
            <li style={{ marginBottom: "0px" }}>
              <Typography variant="inherit" component="span">
                Step 1: If a person files a complaint with the ICO, they will
                first review it and may suggest contacting the organisation
                directly.
              </Typography>
            </li>
            <li style={{ marginBottom: "0px" }}>
              <Typography variant="inherit" component="span">
                Step 2: The ICO will reach out to the organisation for an
                explanation.
              </Typography>
            </li>
            <li style={{ marginBottom: "0px" }}>
              <Typography variant="inherit" component="span">
                Step 3: Depending on the complexity, the ICO may provide advice
                or instruct the organisation to take action (like granting data
                access).
              </Typography>
            </li>
            <li style={{ marginBottom: "0px" }}>
              <Typography variant="inherit" component="span">
                Step 4: The ICO may close the case if satisfied or escalate the
                issue for enforcement if needed.
              </Typography>
            </li>
          </ul>
          <Typography
            variant="inherit"
            sx={{ marginBlockStart: 0, marginBlockEnd: "10px" }}
          >
            <Typography variant="inherit" component="b">
              4. ICO Investigation Process
            </Typography>
          </Typography>
          <ul style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}>
            <li style={{ marginBottom: "0px" }}>
              <Typography variant="inherit" component="span">
                Step 1: If the ICO conducts a formal investigation, they will
                assess your data protection practices, requesting relevant
                records and policies.
              </Typography>
            </li>
            <li style={{ marginBottom: "0px" }}>
              <Typography variant="inherit" component="span">
                Step 2: An audit may be performed to evaluate your compliance.
              </Typography>
            </li>
            <li style={{ marginBottom: "0px" }}>
              <Typography variant="inherit" component="span">
                Step 3: The ICO will issue a report with findings,
                recommendations, or enforcement actions.
              </Typography>
            </li>
          </ul>
          <Typography
            variant="inherit"
            sx={{ marginBlockStart: 0, marginBlockEnd: "10px" }}
          >
            <Typography variant="inherit" component="b">
              5. Enforcement Actions
            </Typography>
          </Typography>
          <ul style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}>
            <li style={{ marginBottom: "0px" }}>
              <Typography variant="inherit" component="span">
                If a breach is found, the ICO may:
              </Typography>
            </li>
            <li style={{ marginBottom: "0px" }}>
              <Typography variant="inherit" component="span">
                Issue a warning for minor offenses.
              </Typography>
            </li>
            <li style={{ marginBottom: "0px" }}>
              <Typography variant="inherit" component="span">
                Provide an enforcement notice to stop non-compliant processing.
              </Typography>
            </li>
            <li style={{ marginBottom: "0px" }}>
              <Typography variant="inherit" component="span">
                Impose fines up to £17.5 million or 4% of global turnover for
                serious breaches.
              </Typography>
            </li>
            <li style={{ marginBottom: "0px" }}>
              <Typography variant="inherit" component="span">
                Initiate criminal prosecution for severe non-compliance.
              </Typography>
            </li>
          </ul>
          <Typography
            variant="inherit"
            sx={{ marginBlockStart: 0, marginBlockEnd: "10px" }}
          >
            <Typography variant="inherit" component="b">
              6. Ongoing Compliance and Monitoring
            </Typography>
          </Typography>
          <ul style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}>
            <li style={{ marginBottom: "0px" }}>
              <Typography variant="inherit" component="span">
                Keep data protection practices updated and conduct regular Data
                Protection Impact Assessments (DPIAs).
              </Typography>
            </li>
            <li style={{ marginBottom: "0px" }}>
              <Typography variant="inherit" component="span">
                Respond promptly to data subject access requests and review
                policies as necessary.
              </Typography>
            </li>
            <li style={{ marginBottom: "0px" }}>
              <Typography variant="inherit" component="span">
                Renew your ICO registration annually and maintain communication
                as needed.
              </Typography>
            </li>
          </ul>
          <Typography
            variant="inherit"
            sx={{ marginBlockStart: 0, marginBlockEnd: "10px" }}
          >
            <Typography variant="inherit" component="b">
              7. Appealing ICO Decisions
            </Typography>
          </Typography>
          <ul style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}>
            <li>
              <Typography variant="inherit" component="span">
                If you disagree with an ICO decision, you can appeal to the
                First-tier Tribunal (Information Rights) and present your case.
              </Typography>
            </li>
          </ul>
        </Box>
      </Box>
    </Box>
  );
};

export default CareLibraryRequiredLicenses5;
