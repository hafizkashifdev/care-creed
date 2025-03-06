import type { NextPage } from "next";
import { useCallback } from "react";
import { Typography, Box } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

const CareLibrarySubjectAccessRe2: NextPage = () => {
  const router = useRouter();

  const onVuesaxboldarrowSquareLeftClick = useCallback(() => {
    router.push("/CL-2/care-library-subject-access-re1");
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
        padding: "30px",
        boxSizing: "border-box",
        gap: "30px",
        textAlign: "left",
        fontSize: "20px",
        color: "#0246bc",
        fontFamily: "Outfit",
      }}
    >
      <Box
        sx={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "30px",
        }}
      >
        <Image
          style={{
            width: "61px",
            position: "relative",
            height: "61px",
            cursor: "pointer",
          }}
          width={61}
          height={61}
          alt=""
          src="/CL-2/vuesaxboldarrowsquareleft1.svg"
          onClick={onVuesaxboldarrowSquareLeftClick}
        />
        <Box
          sx={{
            width: "317px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "10px",
          }}
        >
          <Typography
            variant="inherit"
            component="b"
            sx={{ position: "relative", display: "none", fontWeight: "700" }}
          >
            1.
          </Typography>
          <Box
            sx={{
              position: "relative",
              fontSize: "50px",
              fontWeight: "600",
              fontFamily: "Inter",
            }}
          >
            Send Email
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
          color: "#4b4242",
          fontFamily: "Inter",
        }}
      >
        <Box sx={{ flex: 1, position: "relative", fontWeight: "500" }}>
          The individual submits a written request to the local authority. The
          request should clearly state that it is a Subject Access Request, and
          it may be submitted via email, post, or online forms provided by the
          authority.
        </Box>
      </Box>
    </Box>
  );
};

export default CareLibrarySubjectAccessRe2;
