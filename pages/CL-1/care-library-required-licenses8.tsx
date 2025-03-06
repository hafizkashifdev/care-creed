import type { NextPage } from "next";
import { useCallback } from "react";
import { Typography, Box } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

const CareLibraryRequiredLicenses8: NextPage = () => {
  const router = useRouter();

  const onBackIconClick = useCallback(() => {
    router.push("/CL-1/care-library-required-licenses");
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
            height: "544px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "24px",
          }}
        >
          <Box
            sx={{
              alignSelf: "stretch",
              flex: 1,
              position: "relative",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span>
              <Typography
                variant="inherit"
                sx={{ marginBlockStart: 0, marginBlockEnd: "10px" }}
              >
                <Typography
                  variant="inherit"
                  component="span"
                  sx={{ whiteSpace: "pre-wrap" }}
                >
                  <Typography
                    variant="inherit"
                    component="b"
                  >{`Where to Apply : `}</Typography>
                </Typography>
              </Typography>
              <Typography
                variant="inherit"
                sx={{ marginBlockStart: 0, marginBlockEnd: "10px" }}
              >
                <Typography variant="inherit" component="span">
                  <Typography variant="inherit" component="span">
                    All applications must be submitted via the CQC's online
                    registration portal. This portal allows for efficient
                    processing and tracking of your application..
                  </Typography>
                </Typography>
              </Typography>
              <Typography
                variant="inherit"
                sx={{ marginBlockStart: 0, marginBlockEnd: "10px" }}
              >
                <Typography variant="inherit" component="span">
                  <Typography
                    variant="inherit"
                    component="b"
                  >{`Application Portal & Accessible Link:`}</Typography>
                </Typography>
              </Typography>
              <ul
                style={{
                  margin: "0",
                  fontSize: "inherit",
                  paddingLeft: "32px",
                }}
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
                    <Typography
                      variant="inherit"
                      component="span"
                    >{`Visit the CQC official website `}</Typography>
                  </Typography>
                  <a
                    style={{ color: "inherit" }}
                    href="https://www.cqc.org.uk/guidance-providers/registration"
                    target="_blank"
                  >
                    <Typography
                      variant="inherit"
                      component="b"
                      sx={{ fontFamily: "Inter", whiteSpace: "pre-wrap" }}
                    >
                      <Typography
                        variant="inherit"
                        component="span"
                        sx={{ textDecoration: "underline", color: "#0246bc" }}
                      >
                        CQC Registration Portal
                      </Typography>
                    </Typography>
                  </a>
                  <Typography variant="inherit" component="b">
                    <Typography
                      variant="inherit"
                      component="span"
                      sx={{ color: "#1a4bc7" }}
                    >{` `}</Typography>
                  </Typography>
                  <Typography variant="inherit" component="span">
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
                style={{
                  margin: "0",
                  fontSize: "inherit",
                  paddingLeft: "32px",
                }}
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
                    Care Quality Commission, Citygate, Gallowgate, Newcastle
                    upon Tyne, NE1 4PA, England.
                  </Typography>
                </Typography>
              </Typography>
              <ul
                style={{
                  margin: "0",
                  fontSize: "inherit",
                  paddingLeft: "32px",
                }}
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
                style={{
                  margin: "0",
                  fontSize: "inherit",
                  paddingLeft: "32px",
                }}
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
                    sx={{ whiteSpace: "pre-wrap" }}
                  >{`               `}</Typography>
                </Typography>
                <a
                  style={{ color: "inherit" }}
                  href="mailto:enquiries@cqc.org.uk"
                  target="_blank"
                >
                  <Typography variant="inherit" component="span">
                    <Typography variant="inherit" component="span">
                      <Typography
                        variant="inherit"
                        component="span"
                        sx={{ textDecoration: "underline" }}
                      >
                        enquiries@cqc.org.uk
                      </Typography>
                    </Typography>
                  </Typography>
                </a>
              </Typography>
            </span>
          </Box>
          <a
            style={{
              alignSelf: "stretch",
              position: "relative",
              textDecoration: "underline",
              textTransform: "capitalize",
              fontWeight: "700",
              color: "#0246bc",
              textAlign: "left",
            }}
            href="https://www.cqc.org.uk/publications/guide-registered-providers"
            target="_blank"
          >
            Reference Guide Link
          </a>
        </Box>
      </Box>
    </Box>
  );
};

export default CareLibraryRequiredLicenses8;
