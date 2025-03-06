import type { NextPage } from "next";
import { useCallback } from "react";
import { Typography, Box } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

const CareLibraryAdmin: NextPage = () => {
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
        fontSize: "41.7px",
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
      <Image
        style={{
          position: "absolute",
          height: "4.84%",
          width: "11.18%",
          top: "1.06%",
          right: "44.4%",
          bottom: "94.1%",
          left: "44.42%",
          maxWidth: "100%",
          overflow: "hidden",
          maxHeight: "100%",
        }}
        width={215}
        height={107}
        alt=""
        src="/CL-3/group-584.svg"
      />
      <Box
        sx={{
          position: "absolute",
          top: "166.1px",
          left: "calc(50% - 677.4px)",
          width: "1359.7px",
          height: "232.1px",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "0px",
            left: "calc(50% - 679.85px)",
            width: "1359.7px",
            height: "232.1px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "41.7px",
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
            2. Admin
          </Typography>
          <Box
            sx={{
              alignSelf: "stretch",
              position: "relative",
              fontSize: "23.8px",
              lineHeight: "33.7px",
              color: "#3d4e62",
            }}
          >
            The Care Library Admin module offers comprehensive features for
            managing shifts, invoices, and timesheets, with clear visual
            representations. It includes features for overseeing client
            profiles, onboarding, staff management, and shift allocation. Admin
            users can track shift statuses, monitor top candidates' hours, and
            handle bookings efficiently. The dashboard also provides detailed
            reports, a booking calendar, and a helpdesk for support. It is
            designed to streamline administrative tasks and enhance overall
            efficiency.
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "495.4px",
          left: "95.2px",
          boxShadow: 1,
          borderRadius: "15.9px",
          backgroundColor: "#fff",
          borderWidth: "3px",
          borderStyle: "solid",
          borderColor: "#ee2e7e",
          boxSizing: "border-box",
          width: "828.1px",
          height: "446.3px",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "495.4px",
          left: "1022.5px",
          boxShadow: 1,
          borderRadius: "15.9px",
          borderWidth: "3px",
          borderStyle: "solid",
          borderColor: "#65cdf0",
          boxSizing: "border-box",
          width: "828.1px",
          height: "446.3px",
        }}
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
        src="/CL-3/iconslineararrowleft.svg"
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
          fontSize: "42px",
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
            height: "962.9px",
            objectFit: "cover",
          }}
          width={1720}
          height={963}
          alt=""
          src="/CL-3/image-29206@2x.png"
        />
      </Box>
      <Image
        style={{
          position: "absolute",
          top: "516px",
          left: "359px",
          width: "218px",
          height: "396px",
          objectFit: "cover",
        }}
        width={218}
        height={396}
        alt=""
        src="/CL-3/image-29341@2x.png"
      />
    </Box>
  );
};

export default CareLibraryAdmin;
