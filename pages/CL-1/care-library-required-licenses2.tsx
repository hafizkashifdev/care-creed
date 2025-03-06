import type { NextPage } from "next";
import { useCallback } from "react";
import { Typography, Box } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

const CareLibraryRequiredLicenses2: NextPage = () => {
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
          src="/CL-1/back-icon2.svg"
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
          height: "952px",
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
          sx={{
            width: "1840px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "24px",
          }}
        >
          <Box sx={{ alignSelf: "stretch", position: "relative" }}>
            <Typography
              variant="inherit"
              sx={{ marginBlockStart: 0, marginBlockEnd: "10px" }}
            >
              <Typography variant="inherit" component="span">
                <Typography variant="inherit" component="b">
                  Where to Apply for GDPR Compliance Certification
                </Typography>
              </Typography>
            </Typography>
            <Typography
              variant="inherit"
              sx={{ marginBlockStart: 0, marginBlockEnd: "10px" }}
            >
              <Typography variant="inherit" component="span">
                <Typography variant="inherit" component="span">
                  To apply for GDPR compliance certification in the UK,
                  organisations need to register through the Information
                  Commissioner’s Office (ICO). The ICO is the primary body
                  responsible for enforcing data protection laws in the UK and
                  maintaining records of organisations that process personal
                  data.
                </Typography>
              </Typography>
            </Typography>
            <Typography
              variant="inherit"
              sx={{ marginBlockStart: 0, marginBlockEnd: "10px" }}
            >
              <Typography variant="inherit" component="span">
                <Typography variant="inherit" component="b">
                  Application Process:
                </Typography>
              </Typography>
            </Typography>
            <ul
              style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}
            >
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  <Typography variant="inherit" component="b">
                    Application Portal:
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
                    Online Registration:
                  </Typography>
                </Typography>
              </li>
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  <Typography variant="inherit" component="span">
                    Visit the ICO’s official website
                  </Typography>
                  <Typography
                    variant="inherit"
                    component="b"
                    sx={{ fontFamily: "Inter", whiteSpace: "pre-wrap" }}
                  >{` `}</Typography>
                </Typography>
                <a
                  style={{ color: "inherit" }}
                  href="https://ico.org.uk/for-organisations/data-protection-fee/register/"
                  target="_blank"
                >
                  <Typography variant="inherit" component="b">
                    <Typography
                      variant="inherit"
                      component="span"
                      sx={{ color: "#1a4bc7", whiteSpace: "pre-wrap" }}
                    >
                      <Typography
                        variant="inherit"
                        component="span"
                        sx={{ textDecoration: "underline" }}
                      >
                        ICO Registration
                      </Typography>
                    </Typography>
                  </Typography>
                </a>
                <Typography variant="inherit" component="b">
                  <Typography
                    variant="inherit"
                    component="span"
                  >{` `}</Typography>
                </Typography>
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
                    to start the application.
                  </Typography>
                </Typography>
              </li>
            </ul>
            <Typography
              variant="inherit"
              sx={{ marginBlockStart: 0, marginBlockEnd: "10px" }}
            >
              <Typography variant="inherit" component="span">
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{ fontFamily: "Inter" }}
                >
                  Contact Information:
                </Typography>
              </Typography>
            </Typography>
            <ul
              style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}
            >
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  <Typography variant="inherit" component="b">
                    Address:
                  </Typography>
                </Typography>
              </li>
            </ul>
            <Typography
              variant="inherit"
              sx={{ marginBlockStart: 0, marginBlockEnd: "10px" }}
            >
              <Typography variant="inherit" component="span">
                <Typography
                  variant="inherit"
                  component="span"
                  sx={{ fontFamily: "Inter", whiteSpace: "pre-wrap" }}
                >
                  {" "}
                  Information Commissioner’s Office
                </Typography>
              </Typography>
            </Typography>
            <Typography
              variant="inherit"
              sx={{ marginBlockStart: 0, marginBlockEnd: "10px" }}
            >
              <Typography variant="inherit" component="span">
                <Typography variant="inherit" component="span">
                  {" "}
                  Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF
                </Typography>
              </Typography>
            </Typography>
            <ul
              style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}
            >
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  <Typography
                    variant="inherit"
                    component="b"
                    sx={{ fontFamily: "Inter" }}
                  >
                    Phone:
                  </Typography>
                </Typography>
              </li>
            </ul>
            <Typography
              variant="inherit"
              sx={{ marginBlockStart: 0, marginBlockEnd: "10px" }}
            >
              <Typography variant="inherit" component="span">
                <Typography
                  variant="inherit"
                  component="span"
                  sx={{ fontFamily: "Inter", whiteSpace: "pre-wrap" }}
                >
                  {" "}
                  0303 123 1113
                </Typography>
              </Typography>
            </Typography>
            <ul
              style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}
            >
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  <Typography
                    variant="inherit"
                    component="b"
                    sx={{ fontFamily: "Inter" }}
                  >
                    Email:
                  </Typography>
                </Typography>
              </li>
            </ul>
            <Typography variant="inherit" sx={{ margin: 0 }}>
              <Typography variant="inherit" component="span">
                <Typography
                  variant="inherit"
                  component="span"
                  sx={{ fontFamily: "Inter", whiteSpace: "pre-wrap" }}
                >
                  {" "}
                  icocasework@ico.org.uk
                </Typography>
              </Typography>
            </Typography>
          </Box>
          <a
            style={{
              alignSelf: "stretch",
              position: "relative",
              fontSize: "20px",
              textDecoration: "underline",
              textTransform: "capitalize",
              fontWeight: "700",
              color: "#0246bc",
              textAlign: "left",
            }}
            href="https://gdpr-info.eu/"
            target="_blank"
          >
            Reference Guide Link
          </a>
        </Box>
      </Box>
    </Box>
  );
};

export default CareLibraryRequiredLicenses2;
