import type { NextPage } from "next";
import { useCallback } from "react";
import { Typography, Box } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

const CareLibraryRequiredAccreditationISO27001RequiredDocuments: NextPage =
  () => {
    const router = useRouter();

    const onBackIconClick = useCallback(() => {
      router.push("/CL-1/care-library-required-accreditation-i-s-o1");
    }, [router]);

    return (
      <Box
        sx={{
          width: "100%",
          position: "relative",
          backgroundColor: "#fff",
          height: "2554px",
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
                Required Documents
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
            height: "2428px",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "16px",
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
            <Typography
              variant="inherit"
              component="b"
              sx={{
                alignSelf: "stretch",
                position: "relative",
                display: "flex",
                alignItems: "center",
                height: "22px",
                flexShrink: "0",
                fontWeight: "700",
              }}
            >
              Required Documents for ISO/IEC 27001 Certification
            </Typography>
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                height: "579px",
                overflow: "auto",
                flexShrink: "0",
              }}
            >
              <Image
                style={{
                  position: "absolute",
                  top: "432px",
                  left: "70px",
                  width: "1700px",
                  height: "1890px",
                  objectFit: "cover",
                }}
                width={1700}
                height={1890}
                alt=""
                src="/CL-1/image-41@2x.png"
              />
              <Image
                style={{
                  position: "absolute",
                  top: "0px",
                  left: "70px",
                  width: "1700px",
                  height: "1315px",
                  objectFit: "cover",
                }}
                width={1700}
                height={1315}
                alt=""
                src="/CL-1/image-40@2x.png"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    );
  };

export default CareLibraryRequiredAccreditationISO27001RequiredDocuments;
