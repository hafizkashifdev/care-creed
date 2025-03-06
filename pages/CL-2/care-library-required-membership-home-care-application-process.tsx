import type { NextPage } from "next";
import { useCallback } from "react";
import { Typography, Box } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

const CareLibraryRequiredMembershipHomeCareApplicationProcess: NextPage =
  () => {
    const router = useRouter();

    const onBackIconClick = useCallback(() => {
      router.push("/CL-2/care-library-required-membership-home-care");
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
          <Box sx={{ flex: 1, position: "relative" }}>
            <Typography
              variant="inherit"
              sx={{ marginBlockStart: 0, marginBlockEnd: "10px" }}
            >
              <Typography variant="inherit" component="b">
                Application process of Home Care :
              </Typography>
            </Typography>
            <ul
              style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}
            >
              <li style={{ marginBottom: "0px" }}>
                <Typography
                  variant="inherit"
                  component="b"
                >{`Account Creation: `}</Typography>
                <Typography variant="inherit" component="span">
                  Visit the UKHCA website and create a membership account.
                </Typography>
              </li>
              <li style={{ marginBottom: "0px" }}>
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{ fontFamily: "Inter" }}
                >{`Application Form: `}</Typography>
                <Typography
                  variant="inherit"
                  component="span"
                  sx={{ fontFamily: "Inter" }}
                >
                  Fill out the membership application form, providing detailed
                  information about your organization, services, and staff.
                </Typography>
              </li>
              <li style={{ marginBottom: "0px" }}>
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{ fontFamily: "Inter" }}
                >
                  Document Submission:
                </Typography>
                <Typography
                  variant="inherit"
                  component="span"
                  sx={{ fontFamily: "Inter" }}
                >
                  {" "}
                  Upload the required documents, including proof of CQC
                  registration and staff training certificates.
                </Typography>
              </li>
              <li style={{ marginBottom: "0px" }}>
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{ fontFamily: "Inter" }}
                >{`Fee Payment: `}</Typography>
                <Typography
                  variant="inherit"
                  component="span"
                  sx={{ fontFamily: "Inter" }}
                >
                  Pay the applicable membership fees through the secure online
                  payment portal.
                </Typography>
              </li>
              <li style={{ marginBottom: "0px" }}>
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{ fontFamily: "Inter" }}
                >{`Application Review: `}</Typography>
                <Typography
                  variant="inherit"
                  component="span"
                  sx={{ fontFamily: "Inter" }}
                >
                  The association will review the application and may request
                  further information if necessary.
                </Typography>
              </li>
              <li>
                <Typography
                  variant="inherit"
                  component="b"
                  sx={{ fontFamily: "Inter" }}
                >{`Approval: `}</Typography>
                <Typography
                  variant="inherit"
                  component="span"
                  sx={{ fontFamily: "Inter" }}
                >
                  Upon successful review, you will receive membership approval,
                  along with certification documentation and membership
                  benefits.
                </Typography>
              </li>
            </ul>
          </Box>
        </Box>
      </Box>
    );
  };

export default CareLibraryRequiredMembershipHomeCareApplicationProcess;
