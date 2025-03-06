import type { NextPage } from "next";
import { useCallback } from "react";
import { Typography, Box } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

const CareLibraryAdminDashboard: NextPage = () => {
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
        src="/CL-3/group-19.svg"
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
            height: "963.3px",
            objectFit: "cover",
          }}
          width={1720}
          height={963}
          alt=""
          src="/CL-3/image-29207@2x.png"
        />
      </Box>
      <Image
        style={{
          position: "absolute",
          top: "35px",
          left: "47px",
          width: "48px",
          height: "48px",
          cursor: "pointer",
        }}
        width={48}
        height={48}
        alt=""
        src="/CL-3/iconslineararrowleft1.svg"
        onClick={onIconslineararrowLeftClick}
      />
      <Image
        style={{
          position: "absolute",
          height: "5.06%",
          width: "11.27%",
          top: "1.13%",
          right: "45.03%",
          bottom: "93.8%",
          left: "43.7%",
          maxWidth: "100%",
          overflow: "hidden",
          maxHeight: "100%",
        }}
        width={216}
        height={112}
        alt=""
        src="/CL-3/group-237571.svg"
      />
      <Box
        sx={{
          position: "absolute",
          top: "168px",
          left: "calc(50% - 696px)",
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
            2.1.4 Shift Comprehension
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
            <Typography variant="inherit" sx={{ margin: 0 }}>
              This widget helps in understanding and summarizing shift
              activities, ensuring that all tasks are completed within the
              allocated time.The shift comprehension widget displays the total
              number of created, vacant, booked, and
            </Typography>
            <Typography
              variant="inherit"
              sx={{ margin: 0 }}
            >{`awaited shifts per day, weekly or monthly. `}</Typography>
          </Box>
        </Box>
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
      <Box
        sx={{
          position: "absolute",
          top: "500px",
          left: "1010px",
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
    </Box>
  );
};

export default CareLibraryAdminDashboard;
