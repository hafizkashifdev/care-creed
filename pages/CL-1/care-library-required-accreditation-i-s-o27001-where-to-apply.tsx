import type { NextPage } from "next";
import { useCallback } from "react";
import { Typography, Box } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

const CareLibraryRequiredAccreditationISO27001WhereToApply: NextPage = () => {
  const router = useRouter();

  const onBackIconClick = useCallback(() => {
    router.push("/CL-1/care-library-required-accreditation-i-s-o1");
  }, [router]);

  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        backgroundColor: "#fff",
        height: "1114px",
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
              Where to Apply
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
          height: "988px",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "16px",
          textAlign: "justify",
          fontSize: "24px",
          color: "#000",
        }}
      >
        <Box
          sx={{ flex: 1, position: "relative", textTransform: "capitalize" }}
        >
          <Typography
            variant="inherit"
            sx={{ marginBlockStart: 0, marginBlockEnd: "10px" }}
          >
            <Typography variant="inherit" component="span">
              <Typography variant="inherit" component="b">
                Where to Apply
              </Typography>
            </Typography>
          </Typography>
          <ul style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}>
            <li style={{ marginBottom: "0px" }}>
              <Typography variant="inherit" component="span">
                <Typography variant="inherit" component="span">
                  Certification Bodies: Organisations seeking ISO/IEC 27001
                  certification must apply through accredited certification
                  bodies. These bodies are responsible for conducting the audit
                  and issuing the certification.
                </Typography>
              </Typography>
            </li>
            <li style={{ marginBottom: "0px" }}>
              <Typography variant="inherit" component="span">
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{ fontFamily: "Inter" }}
                >{`Application Portal: `}</Typography>
                <Typography
                  variant="inherit"
                  component="span"
                  sx={{ fontFamily: "Inter" }}
                >
                  Many certification bodies have online application forms
                  available on their websites. Here are a few notable ones:
                </Typography>
              </Typography>
            </li>
          </ul>
          <ol style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}>
            <li style={{ marginBottom: "0px" }}>
              <Typography variant="inherit" component="span">
                <Typography variant="inherit" component="b">
                  BSI Group
                </Typography>
              </Typography>
            </li>
          </ol>
          <ul
            style={{
              margin: "0",
              fontSize: "inherit",
              paddingLeft: "32px",
              color: "#1363cb",
            }}
          >
            <li style={{ marginBottom: "0px" }}>
              <Typography variant="inherit" component="span">
                <Typography
                  variant="inherit"
                  component="span"
                  sx={{ fontFamily: "Inter" }}
                >{`Website: `}</Typography>
              </Typography>
              <a
                style={{ color: "inherit" }}
                href="https://www.bsigroup.com"
                target="_blank"
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{ textDecoration: "underline" }}
                >
                  BSI Group
                </Typography>
              </a>
            </li>
            <li style={{ marginBottom: "0px" }}>
              <Typography variant="inherit" component="span">
                <Typography
                  variant="inherit"
                  component="span"
                  sx={{ fontFamily: "Inter" }}
                >
                  Application Portal: BSI ISO 27001 Certification
                </Typography>
              </Typography>
            </li>
          </ul>
          <ol style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}>
            <li style={{ marginBottom: "0px" }}>
              <Typography variant="inherit" component="span">
                <Typography variant="inherit" component="b">
                  SGS
                </Typography>
              </Typography>
            </li>
          </ol>
          <ul
            style={{
              margin: "0",
              fontSize: "inherit",
              paddingLeft: "32px",
              color: "#1363cb",
            }}
          >
            <li style={{ marginBottom: "0px" }}>
              <Typography variant="inherit" component="span">
                <Typography
                  variant="inherit"
                  component="span"
                  sx={{ fontFamily: "Inter" }}
                >{`Website: `}</Typography>
              </Typography>
              <a
                style={{ color: "inherit" }}
                href="https://www.sgs.com"
                target="_blank"
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{ textDecoration: "underline" }}
                >
                  SGS
                </Typography>
              </a>
            </li>
            <li style={{ marginBottom: "0px" }}>
              <Typography variant="inherit" component="span">
                <Typography
                  variant="inherit"
                  component="span"
                  sx={{ fontFamily: "Inter" }}
                >
                  Application Portal: SGS ISO 27001 Certification
                </Typography>
              </Typography>
            </li>
          </ul>
          <ol style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}>
            <li style={{ marginBottom: "0px" }}>
              <Typography variant="inherit" component="span">
                <Typography variant="inherit" component="b">
                  TÜV Rheinland
                </Typography>
              </Typography>
            </li>
          </ol>
          <ul
            style={{
              margin: "0",
              fontSize: "inherit",
              paddingLeft: "32px",
              color: "#1363cb",
            }}
          >
            <li style={{ marginBottom: "0px" }}>
              <Typography variant="inherit" component="span">
                <Typography
                  variant="inherit"
                  component="span"
                  sx={{ fontFamily: "Inter" }}
                >{`Website: `}</Typography>
              </Typography>
              <a
                style={{ color: "inherit" }}
                href="https://www.tuv.com"
                target="_blank"
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{ textDecoration: "underline" }}
                >
                  TÜV Rheinland
                </Typography>
              </a>
            </li>
            <li style={{ marginBottom: "0px" }}>
              <Typography variant="inherit" component="span">
                <Typography
                  variant="inherit"
                  component="span"
                  sx={{ fontFamily: "Inter" }}
                >
                  Application Portal: TÜV Rheinland ISO 27001 Certification
                </Typography>
              </Typography>
            </li>
          </ul>
          <ol style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}>
            <li style={{ marginBottom: "0px" }}>
              <Typography variant="inherit" component="span">
                <Typography variant="inherit" component="b">
                  DNV GL
                </Typography>
              </Typography>
            </li>
          </ol>
          <ul
            style={{
              margin: "0",
              fontSize: "inherit",
              paddingLeft: "32px",
              color: "#1363cb",
            }}
          >
            <li style={{ marginBottom: "0px" }}>
              <Typography variant="inherit" component="span">
                <Typography
                  variant="inherit"
                  component="span"
                  sx={{ fontFamily: "Inter" }}
                >{`Website: `}</Typography>
              </Typography>
              <a
                style={{ color: "inherit" }}
                href="https://www.dnv.com"
                target="_blank"
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{ textDecoration: "underline" }}
                >
                  DNV GL
                </Typography>
              </a>
            </li>
            <li style={{ marginBottom: "0px" }}>
              <Typography variant="inherit" component="span">
                <Typography
                  variant="inherit"
                  component="span"
                  sx={{ fontFamily: "Inter" }}
                >
                  Application Portal: DNV GL ISO 27001 Certification
                </Typography>
              </Typography>
            </li>
          </ul>
          <ol style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}>
            <li style={{ marginBottom: "0px" }}>
              <Typography variant="inherit" component="span">
                <Typography variant="inherit" component="b">
                  Intertek
                </Typography>
              </Typography>
            </li>
          </ol>
          <ul
            style={{
              margin: "0",
              fontSize: "inherit",
              paddingLeft: "32px",
              color: "#1363cb",
            }}
          >
            <li style={{ marginBottom: "0px" }}>
              <Typography variant="inherit" component="span">
                <Typography
                  variant="inherit"
                  component="span"
                  sx={{ fontFamily: "Inter" }}
                >{`Website: `}</Typography>
              </Typography>
              <a
                style={{ color: "inherit" }}
                href="https://www.intertek.com"
                target="_blank"
              >
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{ textDecoration: "underline" }}
                >
                  Intertek
                </Typography>
              </a>
            </li>
            <li style={{ marginBottom: "0px" }}>
              <Typography
                variant="inherit"
                component="span"
                sx={{ color: "#000" }}
              >
                <Typography
                  variant="inherit"
                  component="span"
                  sx={{ fontFamily: "Inter" }}
                >
                  Application Portal: Intertek ISO 27001 Certification
                </Typography>
              </Typography>
            </li>
            <li style={{ marginBottom: "0px" }}>
              <Typography variant="inherit" component="span">
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{ fontFamily: "Inter" }}
                >
                  Contact Information:
                </Typography>
              </Typography>
            </li>
            <li style={{ marginBottom: "0px" }}>
              <Typography variant="inherit" component="span">
                <Typography
                  variant="inherit"
                  component="span"
                  sx={{ fontFamily: "Inter" }}
                >
                  It’s advisable to contact the certification body directly for
                  any inquiries or to initiate the application process. Most
                  certification bodies provide contact forms, phone numbers, and
                  email addresses for customer support on their websites.
                </Typography>
              </Typography>
            </li>
            <li style={{ marginBottom: "0px" }}>
              <Typography variant="inherit" component="span">
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{ fontFamily: "Inter" }}
                >
                  Contact Info:
                </Typography>
              </Typography>
            </li>
            <li style={{ marginBottom: "0px" }}>
              <Typography variant="inherit" component="span">
                <Typography variant="inherit" component="b">
                  BSI Group:
                </Typography>
              </Typography>
            </li>
            <li style={{ marginBottom: "0px" }}>
              <Typography variant="inherit" component="span">
                <Typography
                  variant="inherit"
                  component="span"
                  sx={{ fontFamily: "Inter" }}
                >
                  Phone: +44 (0) 345 076 5000
                </Typography>
              </Typography>
            </li>
            <li style={{ marginBottom: "0px" }}>
              <Typography variant="inherit" component="span">
                <Typography variant="inherit" component="span">
                  Email:
                </Typography>
              </Typography>
              <Typography variant="inherit" component="span">
                <Typography
                  variant="inherit"
                  component="span"
                  sx={{ color: "#1363cb" }}
                >{` `}</Typography>
              </Typography>
              <Typography
                variant="inherit"
                component="b"
                sx={{ fontFamily: "Inter" }}
              >
                <Typography variant="inherit" component="span">
                  info@bsigroup.com
                </Typography>
              </Typography>
            </li>
            <li style={{ marginBottom: "0px" }}>
              <Typography
                variant="inherit"
                component="span"
                sx={{ color: "#000" }}
              >
                <Typography variant="inherit" component="b">
                  SGS:
                </Typography>
              </Typography>
            </li>
            <li style={{ marginBottom: "0px" }}>
              <Typography variant="inherit" component="span">
                <Typography
                  variant="inherit"
                  component="span"
                  sx={{ fontFamily: "Inter" }}
                >
                  Phone: +44 (0) 1784 429 100
                </Typography>
              </Typography>
            </li>
            <li style={{ marginBottom: "0px" }}>
              <Typography variant="inherit" component="span">
                <Typography
                  variant="inherit"
                  component="span"
                >{`Email: `}</Typography>
              </Typography>
              <Typography
                variant="inherit"
                component="b"
                sx={{ fontFamily: "Inter" }}
              >
                <Typography
                  variant="inherit"
                  component="span"
                  sx={{ color: "#1363cb" }}
                >
                  uk.info@sgs.com
                </Typography>
              </Typography>
            </li>
            <li style={{ marginBottom: "0px" }}>
              <Typography
                variant="inherit"
                component="span"
                sx={{ color: "#000" }}
              >
                <Typography variant="inherit" component="b">
                  TÜV Rheinland:
                </Typography>
              </Typography>
            </li>
            <li style={{ marginBottom: "0px" }}>
              <Typography variant="inherit" component="span">
                <Typography
                  variant="inherit"
                  component="span"
                  sx={{ fontFamily: "Inter" }}
                >
                  Phone: +49 221 801 0
                </Typography>
              </Typography>
            </li>
            <li>
              <Typography variant="inherit" component="span">
                <Typography
                  variant="inherit"
                  component="span"
                >{`Email: `}</Typography>
              </Typography>
              <Typography
                variant="inherit"
                component="b"
                sx={{ fontFamily: "Inter", color: "#1363cb" }}
              >
                info@de.tuv.com
              </Typography>
            </li>
          </ul>
        </Box>
      </Box>
    </Box>
  );
};

export default CareLibraryRequiredAccreditationISO27001WhereToApply;
