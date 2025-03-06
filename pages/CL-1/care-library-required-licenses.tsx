import type { NextPage } from "next";
import { useCallback } from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

const CareLibraryRequiredLicenses: NextPage = () => {
  const router = useRouter();

  const onBackIconClick = useCallback(() => {
    // Please sync "Care Library Required Licenses" to the project
  }, []);

  const onImageClick = useCallback(() => {
    router.push("/CL-1/care-library-required-licenses9");
  }, [router]);

  const onImageClick1 = useCallback(() => {
    router.push("/CL-1/care-library-required-licenses8");
  }, [router]);

  const onImageClick2 = useCallback(() => {
    router.push("/CL-1/care-library-required-licenses11");
  }, [router]);

  const onImageClick3 = useCallback(() => {
    router.push("/CL-1/care-library-required-licenses12");
  }, [router]);

  const onImageClick4 = useCallback(() => {
    router.push("/CL-1/care-library-required-licenses14");
  }, [router]);

  const onImageClick5 = useCallback(() => {
    router.push("/CL-1/care-library-required-licenses16");
  }, [router]);

  const onImageClick6 = useCallback(() => {
    router.push("/CL-1/care-library-required-licenses13");
  }, [router]);

  const onImageClick7 = useCallback(() => {
    router.push("/CL-1/care-library-required-licenses15");
  }, [router]);

  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        backgroundColor: "#fff",
        height: "1122px",
        textAlign: "left",
        fontSize: "80px",
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
            width: "80px",
            position: "relative",
            height: "80px",
            overflow: "hidden",
            flexShrink: "0",
            cursor: "pointer",
          }}
          width={80}
          height={80}
          alt=""
          src="/CL-1/back-icon.svg"
          onClick={onBackIconClick}
        />
        <Box sx={{ flex: 1, position: "relative", fontWeight: "600" }}>
          Care Quality Commission (CQC)
        </Box>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "195px",
          left: "66px",
          width: "1789px",
          height: "836px",
        }}
      >
        <Image
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "425px",
            height: "397px",
            objectFit: "cover",
            cursor: "pointer",
          }}
          width={425}
          height={397}
          alt=""
          src="/CL-1/image-29552@2x.png"
          onClick={onImageClick}
        />
        <Image
          style={{
            position: "absolute",
            top: "0px",
            left: "445px",
            width: "425px",
            height: "397px",
            objectFit: "cover",
            cursor: "pointer",
          }}
          width={425}
          height={397}
          alt=""
          src="/CL-1/image-29553@2x.png"
          onClick={onImageClick1}
        />
        <Image
          style={{
            position: "absolute",
            top: "0px",
            left: "890px",
            width: "428px",
            height: "398px",
            objectFit: "cover",
            cursor: "pointer",
          }}
          width={428}
          height={398}
          alt=""
          src="/CL-1/image-29554@2x.png"
          onClick={onImageClick2}
        />
        <Image
          style={{
            position: "absolute",
            top: "0px",
            left: "1338px",
            width: "426px",
            height: "398px",
            objectFit: "cover",
            cursor: "pointer",
          }}
          width={426}
          height={398}
          alt=""
          src="/CL-1/image-29555@2x.png"
          onClick={onImageClick3}
        />
        <Image
          style={{
            position: "absolute",
            top: "438px",
            left: "0px",
            width: "426px",
            height: "397px",
            objectFit: "cover",
            cursor: "pointer",
          }}
          width={426}
          height={397}
          alt=""
          src="/CL-1/image-29556@2x.png"
          onClick={onImageClick4}
        />
        <Image
          style={{
            position: "absolute",
            top: "438px",
            left: "446px",
            width: "427px",
            height: "397px",
            objectFit: "cover",
            cursor: "pointer",
          }}
          width={427}
          height={397}
          alt=""
          src="/CL-1/image-29557@2x.png"
          onClick={onImageClick5}
        />
        <Image
          style={{
            position: "absolute",
            top: "438px",
            left: "893px",
            width: "426px",
            height: "398px",
            objectFit: "cover",
            cursor: "pointer",
          }}
          width={426}
          height={398}
          alt=""
          src="/CL-1/image-29558@2x.png"
          onClick={onImageClick6}
        />
        <Image
          style={{
            position: "absolute",
            top: "438px",
            left: "1339px",
            width: "426px",
            height: "398px",
            objectFit: "cover",
            cursor: "pointer",
          }}
          width={426}
          height={398}
          alt=""
          src="/CL-1/image-29559@2x.png"
          onClick={onImageClick7}
        />
      </Box>
    </Box>
  );
};

export default CareLibraryRequiredLicenses;
