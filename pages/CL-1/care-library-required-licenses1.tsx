import type { NextPage } from "next";
import { useCallback } from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

const CareLibraryRequiredLicenses1: NextPage = () => {
  const router = useRouter();

  const onBackIconClick = useCallback(() => {
    // Please sync "Care Library Required Licenses" to the project
  }, []);

  const onImageClick = useCallback(() => {
    router.push("/CL-1/care-library-required-licenses3");
  }, [router]);

  const onImageClick1 = useCallback(() => {
    router.push("/CL-1/care-library-required-licenses2");
  }, [router]);

  const onImageClick2 = useCallback(() => {
    router.push("/CL-1/care-library-required-licenses4");
  }, [router]);

  const onImageClick3 = useCallback(() => {
    router.push("/CL-1/care-library-required-licenses5");
  }, [router]);

  const onImageClick4 = useCallback(() => {
    router.push("/CL-1/care-library-required-licenses6");
  }, [router]);

  const onImageClick5 = useCallback(() => {
    router.push("/CL-1/care-library-required-licenses7");
  }, [router]);

  const onImageClick6 = useCallback(() => {
    router.push("/CL-1/care-library-required-licenses10");
  }, [router]);

  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        backgroundColor: "#fff",
        height: "1122px",
        textAlign: "left",
        fontSize: "92.8px",
        color: "#0246bc",
        fontFamily: "Inter",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "39px",
          left: "66px",
          width: "1688px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "46.4px",
        }}
      >
        <Image
          style={{
            width: "112px",
            position: "relative",
            height: "112px",
            overflow: "hidden",
            flexShrink: "0",
            cursor: "pointer",
          }}
          width={112}
          height={112}
          alt=""
          src="/CL-1/back-icon4.svg"
          onClick={onBackIconClick}
        />
        <Box sx={{ flex: 1, position: "relative", fontWeight: "600" }}>
          GDPR
        </Box>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "195px",
          left: "66px",
          width: "1789px",
          height: "838px",
        }}
      >
        <Image
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "427px",
            height: "398px",
            objectFit: "cover",
            cursor: "pointer",
          }}
          width={427}
          height={398}
          alt=""
          src="/CL-1/image-29538@2x.png"
          onClick={onImageClick}
        />
        <Image
          style={{
            position: "absolute",
            top: "0px",
            left: "447px",
            width: "428px",
            height: "398px",
            objectFit: "cover",
            cursor: "pointer",
          }}
          width={428}
          height={398}
          alt=""
          src="/CL-1/image-29539@2x.png"
          onClick={onImageClick1}
        />
        <Image
          style={{
            position: "absolute",
            top: "0px",
            left: "895px",
            width: "428px",
            height: "398px",
            objectFit: "cover",
            cursor: "pointer",
          }}
          width={428}
          height={398}
          alt=""
          src="/CL-1/image-29540@2x.png"
          onClick={onImageClick2}
        />
        <Image
          style={{
            position: "absolute",
            top: "0px",
            left: "1344px",
            width: "426px",
            height: "398px",
            objectFit: "cover",
            cursor: "pointer",
          }}
          width={426}
          height={398}
          alt=""
          src="/CL-1/image-29541@2x.png"
          onClick={onImageClick3}
        />
        <Image
          style={{
            position: "absolute",
            top: "439px",
            left: "0px",
            width: "427px",
            height: "398px",
            objectFit: "cover",
            cursor: "pointer",
          }}
          width={427}
          height={398}
          alt=""
          src="/CL-1/image-29560@2x.png"
          onClick={onImageClick2}
        />
        <Image
          style={{
            position: "absolute",
            top: "439px",
            left: "447px",
            width: "428px",
            height: "398px",
            objectFit: "cover",
            cursor: "pointer",
          }}
          width={428}
          height={398}
          alt=""
          src="/CL-1/image-29561@2x.png"
          onClick={onImageClick4}
        />
        <Image
          style={{
            position: "absolute",
            top: "439px",
            left: "895px",
            width: "428px",
            height: "398px",
            objectFit: "cover",
            cursor: "pointer",
          }}
          width={428}
          height={398}
          alt=""
          src="/CL-1/image-29562@2x.png"
          onClick={onImageClick5}
        />
        <Image
          style={{
            position: "absolute",
            top: "439px",
            left: "1344px",
            width: "426px",
            height: "398px",
            objectFit: "cover",
            cursor: "pointer",
          }}
          width={426}
          height={398}
          alt=""
          src="/CL-1/image-29563@2x.png"
          onClick={onImageClick6}
        />
      </Box>
    </Box>
  );
};

export default CareLibraryRequiredLicenses1;
