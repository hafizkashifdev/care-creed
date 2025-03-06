import type { NextPage } from "next";
import { useCallback } from "react";
import { Typography, Box } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

const CareLibraryRequiredMembershipCareProviderAllianceCPAWhereToApply: NextPage =
  () => {
    const router = useRouter();

    const onBackIconClick = useCallback(() => {
      router.push(
        "/care-library-required-membership-care-provider-alliance-c-p-a"
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
            src="/CL-2/back-icon.svg"
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
            borderRadius: "8px",
            borderWidth: "3px",
            borderStyle: "dashed",
            borderColor: "#0246bc",
            boxSizing: "border-box",
            height: "955px",
            overflowY: "auto",
            flexShrink: "0",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "24px",
            gap: "16px",
            textAlign: "justify",
            fontSize: "24px",
            color: "#000",
          }}
        >
          <Box
            sx={{
              alignSelf: "stretch",
              position: "relative",
              height: "457px",
              overflow: "auto",
              flexShrink: "0",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: "0px",
                left: "0px",
                display: "flex",
                alignItems: "center",
                width: "1824px",
                height: "457px",
              }}
            >
              <span style={{ width: "100%" }}>
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
                      You can apply for CPA membership directly through their
                      website or through one of the CPA-affiliated
                      organizations.
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
                      >{`The application for membership is available on the Care Provider Alliance website: `}</Typography>
                    </Typography>
                    <a
                      style={{ color: "inherit" }}
                      href="https://www.careprovideralliance.org.uk/membership."
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
                          www.careprovideralliance.org.uk/membership.
                        </Typography>
                      </Typography>
                    </a>
                  </li>
                </ul>
                <Typography
                  variant="inherit"
                  sx={{ marginBlockStart: 0, marginBlockEnd: "10px" }}
                >
                  <Typography variant="inherit" component="span">
                    <Typography variant="inherit" component="b">
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
                      Care Provider Alliance, 40 Queen Anne Street, London, W1G
                      9EL
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
                      +44 20 7467 2318
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
                    >{`            `}</Typography>
                  </Typography>
                  <a
                    style={{ color: "inherit" }}
                    href="mailto:info@careprovideralliance.org.uk"
                    target="_blank"
                  >
                    <Typography variant="inherit" component="span">
                      <Typography variant="inherit" component="span">
                        <Typography
                          variant="inherit"
                          component="span"
                          sx={{ textDecoration: "underline" }}
                        >
                          info@careprovideralliance.org.uk
                        </Typography>
                      </Typography>
                    </Typography>
                  </a>
                </Typography>
              </span>
            </Box>
          </Box>
          <a
            style={{
              position: "relative",
              fontSize: "20px",
              textDecoration: "underline",
              textTransform: "capitalize",
              fontWeight: "700",
              color: "#0246bc",
            }}
            href="https://www.careprovideralliance.org.uk/resources."
            target="_blank"
          >
            Reference Guide Link
          </a>
        </Box>
      </Box>
    );
  };

export default CareLibraryRequiredMembershipCareProviderAllianceCPAWhereToApply;
