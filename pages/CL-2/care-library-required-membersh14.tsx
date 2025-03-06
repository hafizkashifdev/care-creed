import type { NextPage } from "next";
import { useCallback } from "react";
import { Typography, Box } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

const CareLibraryRequiredMembersh14: NextPage = () => {
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
              Application process of Voluntary Organisations:
            </Typography>
          </Typography>
          <Typography
            variant="inherit"
            sx={{ marginBlockStart: 0, marginBlockEnd: "10px" }}
          >
            The application process for membership typically includes the
            following steps:
          </Typography>
          <ul style={{ margin: "0", fontSize: "inherit", paddingLeft: "32px" }}>
            <li style={{ marginBottom: "0px" }}>
              <Typography variant="inherit" component="span">
                Submit Initial Inquiry: Fill out an inquiry form via the
                Voluntary Organisations website.
              </Typography>
            </li>
            <li style={{ marginBottom: "0px" }}>
              <Typography variant="inherit" component="span">
                Complete Application: Download the membership application form,
                providing details about Care Library’s services, mission, and
                objectives.
              </Typography>
            </li>
            <li style={{ marginBottom: "0px" }}>
              <Typography variant="inherit" component="span">
                Document Submission: Submit required documents such as
                registration details, financial reports, and proof of community
                work.
              </Typography>
            </li>
            <li style={{ marginBottom: "0px" }}>
              <Typography variant="inherit" component="span">
                Evaluation and Feedback: Voluntary Organisations will review the
                application, request additional information if needed, and
                provide feedback.
              </Typography>
            </li>
            <li>
              <Typography variant="inherit" component="span">
                Membership Confirmation: Upon approval, Care Library will
                receive confirmation of membership status and access to member
                benefits.
              </Typography>
            </li>
          </ul>
        </Box>
      </Box>
    </Box>
  );
};

export default CareLibraryRequiredMembersh14;
