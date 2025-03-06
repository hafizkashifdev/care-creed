import type { NextPage } from "next";
import { useCallback } from "react";
import { Typography, Box } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

const CareLibraryRequiredAffiliationNationalCareAssociationNCAWhereToApply: NextPage =
  () => {
    const router = useRouter();

    const onBackIconClick = useCallback(() => {
      router.push(
        "/CL-1/care-library-required-affiliation-national-care-association-n-c-a"
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
            fontSize: "24px",
            color: "#000",
          }}
        >
          <Box
            sx={{
              width: "1840px",
              height: "543px",
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
                position: "relative",
                display: "flex",
                alignItems: "center",
                height: "481px",
                flexShrink: "0",
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
                      You can apply for NCA membership online through the
                      official National Care Association website..
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
                      >{`Visit the NCA official website `}</Typography>
                    </Typography>
                    <a
                      style={{ color: "inherit", whiteSpace: "pre-wrap" }}
                      href="https://www.nationalcareassociation.org.uk"
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
                        www.nationalcareassociation.org.uk
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
                      Gold National Care Association Suite 4, Beaufort Park,
                      Chepstow, NP16 5UH, UK
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
                      01634 716 615
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
                    href="mailto:info@nationalcareassociation.org.uk"
                    target="_blank"
                  >
                    <Typography variant="inherit" component="span">
                      <Typography variant="inherit" component="span">
                        <Typography
                          variant="inherit"
                          component="span"
                          sx={{ textDecoration: "underline" }}
                        >
                          info@nationalcareassociation.org.uk
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
              href="https://www.nationalcareassociation.org.uk"
              target="_blank"
            >
              Reference Guide Link
            </a>
          </Box>
        </Box>
      </Box>
    );
  };

export default CareLibraryRequiredAffiliationNationalCareAssociationNCAWhereToApply;
