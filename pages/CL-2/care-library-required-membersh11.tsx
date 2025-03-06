import type { NextPage } from "next";
import { useCallback } from "react";
import { Typography, Box } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

const CareLibraryRequiredMembersh11: NextPage = () => {
  const router = useRouter();

  const onBackIconClick = useCallback(() => {
    router.push("/CL-2/care-library-required-membersh");
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
            width: "1787px",
            height: "560px",
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
                    You can apply for Voluntary Organisations membership through
                    the Apply through a recognized voluntary organization body.
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
                    >{`Visit the official website `}</Typography>
                  </Typography>
                  <a
                    style={{ color: "inherit", whiteSpace: "pre-wrap" }}
                    href="https://www.voluntaryorganisation.org.uk"
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
                      www.voluntaryorganisation.org.uk
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
                    Voluntary Organisations, 123 Community Lane, London, UK
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
                    +44 20 1234 5678
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
                  >{`         `}</Typography>
                </Typography>
                <a
                  style={{ color: "inherit" }}
                  href="mailto:info@voluntaryorganisation.org.uk"
                  target="_blank"
                >
                  <Typography variant="inherit" component="span">
                    <Typography variant="inherit" component="span">
                      <Typography
                        variant="inherit"
                        component="span"
                        sx={{
                          textDecoration: "underline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        {" "}
                        info@voluntaryorganisation.org.uk
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
            href="https://www.voluntaryorganisation.org.uk/guide"
            target="_blank"
          >
            Reference Guide Link
          </a>
        </Box>
      </Box>
    </Box>
  );
};

export default CareLibraryRequiredMembersh11;
