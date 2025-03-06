import type { NextPage } from "next";
import { useCallback } from "react";
import { Typography, Box } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

const CareLibraryRequiredLicenses6: NextPage = () => {
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
        height: "1341px",
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
              Cost Breakdown
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
          height: "1215px",
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
        <Box
          sx={{
            width: "1840px",
            height: "1181px",
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
              height: "206px",
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
                  component="b"
                >{`Cost Breakdown of GDPR Compliance Certification `}</Typography>
              </Typography>
              <ul
                style={{
                  margin: "0",
                  fontSize: "inherit",
                  paddingLeft: "32px",
                }}
              >
                <li style={{ marginBottom: "0px" }}>
                  <Typography variant="inherit" component="b">
                    Tier 1 (Micro Organisations):
                  </Typography>
                  <Typography variant="inherit" component="span">
                    {" "}
                    For organisations with a turnover under £632,000 or fewer
                    than 10 staff members, the fee is £40.
                  </Typography>
                </li>
                <li style={{ marginBottom: "0px" }}>
                  <Typography
                    variant="inherit"
                    component="b"
                    sx={{ fontFamily: "Inter" }}
                  >
                    Tier 2
                  </Typography>
                  <Typography
                    variant="inherit"
                    component="span"
                    sx={{ fontFamily: "Inter" }}
                  >{` `}</Typography>
                  <Typography
                    variant="inherit"
                    component="b"
                    sx={{ fontFamily: "Inter" }}
                  >
                    (Small and Medium Organisations)
                  </Typography>
                  <Typography
                    variant="inherit"
                    component="span"
                    sx={{ fontFamily: "Inter" }}
                  >
                    : For organisations with a turnover under £36 million or
                    fewer than 250 staff members, the fee is £60.
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="inherit"
                    component="b"
                    sx={{ fontFamily: "Inter" }}
                  >
                    Tier 3
                  </Typography>
                  <Typography
                    variant="inherit"
                    component="span"
                    sx={{ fontFamily: "Inter" }}
                  >{` `}</Typography>
                  <Typography
                    variant="inherit"
                    component="b"
                    sx={{ fontFamily: "Inter" }}
                  >
                    (Large Organisations):
                  </Typography>
                  <Typography
                    variant="inherit"
                    component="span"
                    sx={{ fontFamily: "Inter" }}
                  >
                    {" "}
                    For those with a turnover above £36 million or more than 250
                    staff members, the fee is £2,900.
                  </Typography>
                </li>
              </ul>
            </span>
          </Box>
          <Image
            style={{
              alignSelf: "stretch",
              position: "relative",
              maxWidth: "100%",
              overflow: "hidden",
              height: "879px",
              flexShrink: "0",
              objectFit: "cover",
            }}
            width={1840}
            height={879}
            alt=""
            src="/CL-1/group-80@2x.png"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default CareLibraryRequiredLicenses6;
