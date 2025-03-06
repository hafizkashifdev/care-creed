import type { NextPage } from "next";
import { useCallback } from "react";
import { Typography, Box } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

const CareLibraryKYCKYB: NextPage = () => {
  const router = useRouter();

  const onIconslineararrowLeftClick = useCallback(() => {
    router.push("/CL-3/care-library-product-features");
  }, [router]);

  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        borderRadius: "5px",
        backgroundColor: "#fff",
        borderWidth: "4px",
        borderStyle: "solid",
        borderColor: "#4e132c",
        boxSizing: "border-box",
        height: "1126px",
        overflow: "hidden",
        textAlign: "center",
        fontSize: "42px",
        color: "#232f3e",
        fontFamily: "Outfit",
      }}
    >
      <Image
        style={{
          position: "absolute",
          height: "54.23%",
          width: "69.54%",
          top: "70.78%",
          right: "15.25%",
          bottom: "-25.01%",
          left: "15.21%",
          maxWidth: "100%",
          overflow: "hidden",
          maxHeight: "100%",
        }}
        width={1335}
        height={611}
        alt=""
        src="/CL-3/group-237570.svg"
      />
      <Image
        style={{
          position: "absolute",
          top: "35.7px",
          left: "47.6px",
          width: "47.6px",
          height: "47.6px",
          cursor: "pointer",
        }}
        width={48}
        height={48}
        alt=""
        src="/CL-3/iconslineararrowleft3.svg"
        onClick={onIconslineararrowLeftClick}
      />
      <Box
        sx={{
          position: "absolute",
          top: "219px",
          left: "calc(50% - 686px)",
          width: "1371px",
          height: "297px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "42px",
        }}
      >
        <Typography
          variant="inherit"
          component="b"
          sx={{ alignSelf: "stretch", position: "relative", fontWeight: "700" }}
        >{`1. KYC & KYB`}</Typography>
        <Box
          sx={{
            alignSelf: "stretch",
            position: "relative",
            fontSize: "24px",
            lineHeight: "34px",
            color: "#3d4e62",
          }}
        >
          Once the user clicks on signup, the backend initiates Know Your
          Customer (KYC) and Know Your Business (KYB) checks. KYC services are
          applied for individual verification, ensuring that the user's identity
          is confirmed through various checks such as ID validation and
          background screening. Simultaneously, if the user is signing up as a
          business, KYB processes are employed to verify the legitimacy of the
          business entity, which may include checks on business registration,
          ownership, and compliance with regulatory standards. This dual
          verification process enhances security and trust within the platform.
        </Box>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "529px",
          left: "100px",
          boxShadow: 1,
          borderRadius: "16px",
          backgroundColor: "#fff",
          borderWidth: "3px",
          borderStyle: "solid",
          borderColor: "#ee2e7e",
          boxSizing: "border-box",
          width: "835px",
          height: "450px",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "529px",
          left: "1035px",
          boxShadow: 1,
          borderRadius: "16px",
          width: "835px",
          height: "450px",
        }}
      />
      <Image
        style={{
          position: "absolute",
          height: "9.91%",
          width: "11.27%",
          top: "4.88%",
          right: "44.41%",
          bottom: "85.2%",
          left: "44.32%",
          maxWidth: "100%",
          overflow: "hidden",
          maxHeight: "100%",
        }}
        width={216}
        height={112}
        alt=""
        src="/CL-3/group-586.svg"
      />
      <Image
        style={{
          position: "absolute",
          top: "662px",
          left: "132px",
          width: "786px",
          height: "178px",
          objectFit: "cover",
        }}
        width={786}
        height={178}
        alt=""
        src="/CL-3/image-29340@2x.png"
      />
    </Box>
  );
};

export default CareLibraryKYCKYB;
