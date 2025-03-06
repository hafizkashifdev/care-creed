import type { NextPage } from "next";
import { useCallback } from "react";
import { Typography, Box } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

const CareLibraryCareCoordinatorProfileBackgroundChecks: NextPage = () => {
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
            height: "964.7px",
            objectFit: "cover",
          }}
          width={1720}
          height={965}
          alt=""
          src="/CL-4/image-29296@2x.png"
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
            4.4.4 Background Checks
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
            The Background Checks section in the Profile of the Care Library
            platform allows candidates to provide essential information
            regarding their compliance with necessary checks required for
            working in care roles. Care Coordinator can indicate whether they
            have undergone a Disclosure and Barring Service (DBS) check. This is
            crucial for ensuring that individuals working with vulnerable
            populations do not have a criminal record that would disqualify them
            from care roles. Care Coordinator can also confirm their eligibility
            to work in the UK, which is essential for compliance with employment
            laws and regulations. Care Coordinator can save the information or
            proceed to the next section.
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
          top: "622px",
          left: "94px",
          width: "798px",
          height: "205.5px",
          objectFit: "cover",
        }}
        width={798}
        height={206}
        alt=""
        src="/CL-4/image-29473@2x.png"
      />
    </Box>
  );
};

export default CareLibraryCareCoordinatorProfileBackgroundChecks;
