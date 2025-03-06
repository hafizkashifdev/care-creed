import type { NextPage } from "next";
import { useCallback } from "react";
import { Typography, Box } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

const CareLibraryRequiredAffiliationNationalCareAssociationNCACostBreakdown: NextPage =
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
            height: "954px",
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
              flex: 1,
              height: "196px",
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
                height: "39px",
                flexShrink: "0",
                fontWeight: "700",
              }}
            >
              Cost Breakdown of NCA :
            </Typography>
            <Image
              style={{
                alignSelf: "stretch",
                position: "relative",
                maxWidth: "100%",
                overflow: "hidden",
                height: "389px",
                flexShrink: "0",
                objectFit: "cover",
              }}
              width={1840}
              height={389}
              alt=""
              src="/CL-1/image-202@2x.png"
            />
          </Box>
        </Box>
      </Box>
    );
  };

export default CareLibraryRequiredAffiliationNationalCareAssociationNCACostBreakdown;
