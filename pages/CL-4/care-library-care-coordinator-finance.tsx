import type { NextPage } from "next";
import { useCallback } from "react";
import { Typography, Box } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

const CareLibraryCareCoordinatorFinance: NextPage = () => {
  const router = useRouter();

  const onIconslineararrowLeftClick = useCallback(() => {
    router.push("/CL-4/care-library-product-features");
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
        height: "2205px",
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
          height: "26.49%",
          width: "68.96%",
          top: "36.73%",
          right: "15.54%",
          bottom: "36.78%",
          left: "15.49%",
          maxWidth: "100%",
          overflow: "hidden",
          maxHeight: "100%",
        }}
        width={1324}
        height={584}
        alt=""
        src="/CL-4/group-191.svg"
      />
      <Image
        style={{
          position: "absolute",
          top: "35.2px",
          left: "47.6px",
          width: "47.6px",
          height: "47.6px",
          cursor: "pointer",
        }}
        width={48}
        height={48}
        alt=""
        src="/CL-4/iconslineararrowleft1.svg"
        onClick={onIconslineararrowLeftClick}
      />
      <Box
        sx={{
          position: "absolute",
          top: "1009px",
          left: "calc(50% - 860px)",
          width: "1720px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "30px",
        }}
      >
        <Typography
          variant="inherit"
          component="b"
          sx={{ alignSelf: "stretch", position: "relative", fontWeight: "700" }}
        >
          Mockup
        </Typography>
        <Image
          style={{
            width: "1720px",
            position: "relative",
            height: "964.4px",
            objectFit: "cover",
          }}
          width={1720}
          height={964}
          alt=""
          src="/CL-4/image-29301@2x.png"
        />
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "500px",
          left: "75px",
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
      <Image
        style={{
          position: "absolute",
          height: "5.06%",
          width: "11.27%",
          top: "1.13%",
          right: "44.35%",
          bottom: "93.8%",
          left: "44.38%",
          maxWidth: "100%",
          overflow: "hidden",
          maxHeight: "100%",
        }}
        width={216}
        height={112}
        alt=""
        src="/CL-4/group-581.svg"
      />
      <Box
        sx={{
          position: "absolute",
          top: "168px",
          left: "calc(50% - 685px)",
          width: "1371px",
          height: "234px",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "0px",
            left: "calc(50% - 685.5px)",
            width: "1371px",
            height: "234px",
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
            sx={{
              alignSelf: "stretch",
              position: "relative",
              fontWeight: "700",
            }}
          >
            4.6 Finance
          </Typography>
          <Box
            sx={{
              alignSelf: "stretch",
              position: "relative",
              fontSize: "24px",
              lineHeight: "34px",
              color: "#3d4e62",
            }}
          >
            The "Finance Module" is designed to manage and streamline financial
            operations related to staffing and client services. This module
            enables administrators to track financial transactions, manage
            invoicing, and oversee payment processing, ensuring accurate
            financial records and reporting.
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "500px",
          left: "965.6px",
          boxShadow: 1,
          borderRadius: "16px",
          backgroundColor: "#d9d9d9",
          borderWidth: "3px",
          borderStyle: "solid",
          borderColor: "#65cdf0",
          boxSizing: "border-box",
          width: "835px",
          height: "450px",
        }}
      />
      <Image
        style={{
          position: "absolute",
          top: "685px",
          left: "106px",
          width: "773px",
          height: "80.5px",
          objectFit: "cover",
        }}
        width={773}
        height={81}
        alt=""
        src="/CL-4/image-29478@2x.png"
      />
    </Box>
  );
};

export default CareLibraryCareCoordinatorFinance;
