import type { NextPage } from "next";
import { useCallback } from "react";
import { Typography, Box } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

const CareLibraryRequiredAffiliationInstituteOfHealthAndSocialCareManagementIHSCMWhereToApply: NextPage =
  () => {
    const router = useRouter();

    const onBackIconClick = useCallback(() => {
      router.push(
        "/CL-1/care-library-required-affiliation-institute-of-health-and-social-care-management-i-h-s-c-m"
      );
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
            height: "954px",
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
          <Box
            sx={{
              width: "1827px",
              height: "497px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "43px",
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
                      {" "}
                      Applications for affiliation with the IHSCM can be made
                      directly through their official website.
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
                    paddingLeft: "24px",
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
                      >{`Visit the IHSCM official website `}</Typography>
                    </Typography>
                    <a
                      style={{ color: "inherit", whiteSpace: "pre-wrap" }}
                      href="https://www.ihscm.org/membership"
                      target="_blank"
                    >
                      <Typography
                        variant="inherit"
                        component="b"
                        sx={{
                          textDecoration: "underline",
                          fontFamily: "Inter",
                          color: "#0246bc",
                        }}
                      >
                        www.ihscm.org/membership
                      </Typography>
                    </a>
                    <Typography variant="inherit" component="span">
                      <Typography
                        variant="inherit"
                        component="span"
                        sx={{ fontFamily: "Inter" }}
                      >
                        {" "}
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
                    paddingLeft: "24px",
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
                      Institute of Health and Social Care Management, 14-20,
                      Barlow Moor Road, Manchester, M20 2PW, UK
                    </Typography>
                  </Typography>
                </Typography>
                <ul
                  style={{
                    margin: "0",
                    fontSize: "inherit",
                    paddingLeft: "24px",
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
                      +44 (0) 161 277 8000
                    </Typography>
                  </Typography>
                </Typography>
                <ul
                  style={{
                    margin: "0",
                    fontSize: "inherit",
                    paddingLeft: "24px",
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
                    >{`            `}</Typography>
                  </Typography>
                  <a
                    style={{ color: "inherit" }}
                    href="mailto:info@ihscm.org"
                    target="_blank"
                  >
                    <Typography variant="inherit" component="span">
                      <Typography variant="inherit" component="span">
                        <Typography
                          variant="inherit"
                          component="span"
                          sx={{ textDecoration: "underline" }}
                        >
                          info@ihscm.org
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
                fontSize: "20px",
                textDecoration: "underline",
                textTransform: "capitalize",
                fontWeight: "700",
                color: "#0246bc",
                textAlign: "left",
              }}
              href="https://www.ihscm.org/resources"
              target="_blank"
            >
              Reference Guide Link
            </a>
          </Box>
        </Box>
      </Box>
    );
  };

export default CareLibraryRequiredAffiliationInstituteOfHealthAndSocialCareManagementIHSCMWhereToApply;
