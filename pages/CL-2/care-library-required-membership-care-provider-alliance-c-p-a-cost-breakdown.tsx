import type { NextPage } from "next";
import { useCallback } from "react";
import { Typography, Box } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

const CareLibraryRequiredMembershipCareProviderAllianceCPACostBreakdown: NextPage =
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
                Cost Breakdown
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            alignSelf: "stretch",
            position: "relative",
            borderRadius: "8px",
            borderWidth: "3px",
            borderStyle: "dashed",
            borderColor: "#0246bc",
            boxSizing: "border-box",
            height: "953px",
            overflowY: "auto",
            flexShrink: "0",
            fontSize: "24px",
            color: "#000",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "23px",
              left: "23px",
              width: "1828px",
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
                fontWeight: "700",
              }}
            >
              <Typography
                variant="inherit"
                sx={{ marginBlockStart: 0, marginBlockEnd: "10px" }}
              >
                Cost Breakdown of CPA :
              </Typography>
            </Typography>
            <Box
              sx={{
                width: "1828px",
                height: "621px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: "10px",
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
                  height: "33px",
                  flexShrink: "0",
                  fontWeight: "700",
                }}
              >
                Summary of Fee
              </Typography>
              <Image
                style={{
                  alignSelf: "stretch",
                  position: "relative",
                  maxWidth: "100%",
                  overflow: "hidden",
                  height: "433px",
                  flexShrink: "0",
                  objectFit: "cover",
                }}
                width={1828}
                height={433}
                alt=""
                src="/CL-2/image-213@2x.png"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    );
  };

export default CareLibraryRequiredMembershipCareProviderAllianceCPACostBreakdown;
