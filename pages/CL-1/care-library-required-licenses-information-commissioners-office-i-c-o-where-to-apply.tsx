import type { NextPage } from "next";
import { useCallback } from "react";
import { Typography, Box } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

const CareLibraryRequiredLicensesInformationCommissionersOfficeICOWhereToApply: NextPage =
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
            height: "952px",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "16px",
            textAlign: "justify",
            fontSize: "18px",
            color: "#000",
          }}
        >
          <Box sx={{ flex: 1, position: "relative" }}>
            <Typography
              variant="inherit"
              sx={{ marginBlockStart: 0, marginBlockEnd: "10px" }}
            >
              <Typography variant="inherit" component="span">
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{ fontFamily: "Inter" }}
                >{`Where to Apply : `}</Typography>
              </Typography>
            </Typography>
            <Typography
              variant="inherit"
              sx={{ marginBlockStart: 0, marginBlockEnd: "10px" }}
            >
              <Typography variant="inherit" component="span">
                <Typography
                  variant="inherit"
                  component="span"
                  sx={{ fontFamily: "Inter" }}
                >
                  Care Library must apply directly to the Information
                  Commissioner's Office (ICO) for registration under the data
                  protection regulations.
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
                  sx={{ fontFamily: "Inter" }}
                >{`Application Portal & Accessible Link:`}</Typography>
              </Typography>
            </Typography>
            <ul
              style={{ margin: "0", fontSize: "inherit", paddingLeft: "24px" }}
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
                    sx={{ fontFamily: "Inter", whiteSpace: "pre-wrap" }}
                  >
                    Online Registration:
                  </Typography>
                </Typography>
              </li>
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  <Typography variant="inherit" component="span">
                    Visit the ICO official website
                  </Typography>
                </Typography>
                <a
                  style={{ color: "inherit" }}
                  href="https://ico.org.uk/for-organisations/register/"
                  target="_blank"
                >
                  <Typography variant="inherit" component="span">
                    <Typography variant="inherit" component="span">
                      <Typography
                        variant="inherit"
                        component="span"
                        sx={{ textDecoration: "underline" }}
                      >{` `}</Typography>
                    </Typography>
                  </Typography>
                  <Typography variant="inherit" component="span">
                    <Typography
                      variant="inherit"
                      component="b"
                      sx={{ fontFamily: "Inter", whiteSpace: "pre-wrap" }}
                    >
                      <Typography
                        variant="inherit"
                        component="span"
                        sx={{ color: "#0246bc" }}
                      >
                        ICO Registration Portal
                      </Typography>
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
              style={{ margin: "0", fontSize: "inherit", paddingLeft: "24px" }}
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
                  Information Commissioner's Office Wycliffe House Water Lane
                  Wilmslow Cheshire SK9 5AF UK
                </Typography>
              </Typography>
            </Typography>
            <ul
              style={{ margin: "0", fontSize: "inherit", paddingLeft: "24px" }}
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
              style={{ margin: "0", fontSize: "inherit", paddingLeft: "24px" }}
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
                >{`             `}</Typography>
              </Typography>
              <a
                style={{ color: "inherit" }}
                href="mailto:mail@ico.org.uk"
                target="_blank"
              >
                <Typography variant="inherit" component="span">
                  <Typography variant="inherit" component="span">
                    <Typography
                      variant="inherit"
                      component="span"
                      sx={{ textDecoration: "underline" }}
                    >
                      mail@ico.org.uk
                    </Typography>
                  </Typography>
                </Typography>
              </a>
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  };

export default CareLibraryRequiredLicensesInformationCommissionersOfficeICOWhereToApply;
