import type { NextPage } from "next";
import { useCallback } from "react";
import { Typography, Box } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

const CareLibraryRequiredAccredit8: NextPage = () => {
  const router = useRouter();

  const onBackIconClick = useCallback(() => {
    router.push("/CL-1/care-library-required-accredit");
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
              Purpose of Product Certification
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
          color: "rgba(0, 0, 0, 0.74)",
        }}
      >
        <Box
          sx={{ flex: 1, position: "relative", textTransform: "capitalize" }}
        >
          <Typography
            variant="inherit"
            sx={{ marginBlockStart: 0, marginBlockEnd: "10px" }}
          >
            <Typography
              variant="inherit"
              component="b"
            >{`Timeline for Certification of GSF: `}</Typography>
          </Typography>
          <Typography
            variant="inherit"
            sx={{ marginBlockStart: 0, marginBlockEnd: "10px" }}
          >
            <Typography
              variant="inherit"
              component="b"
            >{`Initial Contact & Enrollment: `}</Typography>
            <Typography
              variant="inherit"
              component="span"
              sx={{ fontFamily: "Inter" }}
            >
              1-2 months
            </Typography>
          </Typography>
          <Typography
            variant="inherit"
            sx={{ marginBlockStart: 0, marginBlockEnd: "10px" }}
          >
            <Typography
              variant="inherit"
              component="b"
              sx={{ fontFamily: "Inter" }}
            >{`Training Program: `}</Typography>
            <Typography variant="inherit" component="span">
              3-6 months, depending on the program.
            </Typography>
          </Typography>
          <Typography
            variant="inherit"
            sx={{ marginBlockStart: 0, marginBlockEnd: "10px" }}
          >
            <Typography
              variant="inherit"
              component="b"
            >{`Implementation & Monitoring: `}</Typography>
            <Typography
              variant="inherit"
              component="span"
              sx={{ fontFamily: "Inter" }}
            >
              6-12 months
            </Typography>
          </Typography>
          <Typography
            variant="inherit"
            sx={{ marginBlockStart: 0, marginBlockEnd: "10px" }}
          >
            <Typography
              variant="inherit"
              component="b"
            >{`Assessment Process: `}</Typography>
            <Typography
              variant="inherit"
              component="span"
              sx={{ fontFamily: "Inter" }}
            >
              2-3 months
            </Typography>
          </Typography>
          <Typography variant="inherit" sx={{ margin: 0 }}>
            <Typography
              variant="inherit"
              component="b"
            >{`Total Time for Certification: `}</Typography>
            <Typography
              variant="inherit"
              component="span"
              sx={{ fontFamily: "Inter" }}
            >
              12-18 months
            </Typography>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CareLibraryRequiredAccredit8;
