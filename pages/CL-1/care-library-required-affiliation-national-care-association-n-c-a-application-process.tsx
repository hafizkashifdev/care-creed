import type { NextPage } from "next";
import { useCallback } from "react";
import { Typography, Box } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

const CareLibraryRequiredAffiliationNationalCareAssociationNCAApplicationProcess: NextPage =
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
          <Box sx={{ flex: 1, position: "relative" }}>
            <Typography
              variant="inherit"
              sx={{ marginBlockStart: 0, marginBlockEnd: "10px" }}
            >
              <Typography variant="inherit" component="span">
                <Typography variant="inherit" component="b">
                  Application process of NCA :
                </Typography>
              </Typography>
            </Typography>
            <ul
              style={{
                margin: "0",
                fontSize: "inherit",
                paddingLeft: "32px",
                color: "#0246bc",
              }}
            >
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  <Typography
                    variant="inherit"
                    component="b"
                  >{`Visit the NCA website: `}</Typography>
                  <Typography
                    variant="inherit"
                    component="span"
                    sx={{ fontFamily: "Inter" }}
                  >
                    Go to
                  </Typography>
                  <Typography variant="inherit" component="b">{` `}</Typography>
                </Typography>
                <a
                  style={{ color: "inherit" }}
                  href="https://www.nationalcareassociation.org.uk"
                  target="_blank"
                >
                  <Typography variant="inherit" component="b">
                    <Typography variant="inherit" component="span">
                      <Typography
                        variant="inherit"
                        component="span"
                        sx={{ textDecoration: "underline" }}
                      >
                        www.nationalcareassociation.org.uk
                      </Typography>
                    </Typography>
                  </Typography>
                </a>
                <Typography variant="inherit" component="b">
                  <Typography variant="inherit" component="span">
                    .
                  </Typography>
                </Typography>
              </li>
              <li style={{ marginBottom: "0px" }}>
                <Typography
                  variant="inherit"
                  component="span"
                  sx={{ color: "#000" }}
                >
                  <Typography
                    variant="inherit"
                    component="b"
                  >{`Register an account: `}</Typography>
                  <Typography
                    variant="inherit"
                    component="span"
                    sx={{ fontFamily: "Inter" }}
                  >
                    Create an account on their portal by providing your
                    organisation’s details.
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
                    Complete the membership form:
                  </Typography>
                  <Typography
                    variant="inherit"
                    component="span"
                    sx={{ fontFamily: "Inter" }}
                  >
                    {" "}
                    Fill in details such as your business name, address,
                    registration type, and care services offered
                  </Typography>
                  <Typography
                    variant="inherit"
                    component="b"
                    sx={{ fontFamily: "Inter" }}
                  >
                    .
                  </Typography>
                </Typography>
              </li>
              <li style={{ marginBottom: "0px" }}>
                <Typography variant="inherit" component="span">
                  <Typography
                    variant="inherit"
                    component="b"
                  >{`Payment: `}</Typography>
                  <Typography
                    variant="inherit"
                    component="span"
                    sx={{ fontFamily: "Inter" }}
                  >
                    Make the required payment via online methods.
                  </Typography>
                </Typography>
              </li>
              <li>
                <Typography variant="inherit" component="span">
                  <Typography
                    variant="inherit"
                    component="b"
                    sx={{ fontFamily: "Inter" }}
                  >{`Confirmation: `}</Typography>
                  <Typography
                    variant="inherit"
                    component="span"
                    sx={{ fontFamily: "Inter" }}
                  >
                    Upon successful payment, you will receive a confirmation
                    email, and your membership card will be issued.
                  </Typography>
                </Typography>
              </li>
            </ul>
          </Box>
        </Box>
      </Box>
    );
  };

export default CareLibraryRequiredAffiliationNationalCareAssociationNCAApplicationProcess;
