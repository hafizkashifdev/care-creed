import type { NextPage } from "next";
import { useCallback } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

const ConsultancyOutfitTools: NextPage = () => {
  const router = useRouter();

  const onBackIconClick = useCallback(() => {
    router.push("/CL-2/care-library");
  }, [router]);

  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        backgroundColor: "#fff",
        height: "1816px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "116px",
        boxSizing: "border-box",
        gap: "69.6px",
        textAlign: "left",
        fontSize: "92.8px",
        color: "#0246bc",
        fontFamily: "Inter",
      }}
    >
      <Box
        sx={{
          alignSelf: "stretch",
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
          src="/CL-2/back-icon2.svg"
          onClick={onBackIconClick}
        />
        <Box sx={{ flex: 1, position: "relative", fontWeight: "600" }}>
          Consultancy Outfit Tools
        </Box>
      </Box>
      <Box
        sx={{
          alignSelf: "stretch",
          height: "1446px",
          overflow: "hidden",
          flexShrink: "0",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          flexWrap: "wrap",
          alignContent: "flex-start",
          gap: "40px 20px",
          textAlign: "center",
          fontSize: "24px",
          color: "#024d9c",
        }}
      >
        <Box
          sx={{
            flex: 1,
            borderRadius: "40px",
            backgroundColor: "#e1ecff",
            height: "447px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "80px",
            boxSizing: "border-box",
            gap: "35px",
            opacity: "0.8",
            minWidth: "407px",
          }}
        >
          <Image
            style={{
              width: "200px",
              position: "relative",
              borderRadius: "40px",
              height: "198.7px",
              objectFit: "cover",
              mixBlendMode: "multiply",
            }}
            width={200}
            height={199}
            alt=""
            src="/CL-2/download-35@2x.png"
          />
          <Box
            sx={{
              width: "87px",
              position: "relative",
              textTransform: "capitalize",
              fontWeight: "600",
              display: "inline-block",
              height: "32px",
              flexShrink: "0",
            }}
          >
            Figma
          </Box>
        </Box>
        <Box
          sx={{
            flex: 1,
            borderRadius: "40px",
            backgroundColor: "#e1ecff",
            height: "447px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "80px",
            boxSizing: "border-box",
            gap: "35px",
            opacity: "0.8",
            minWidth: "407px",
          }}
        >
          <Image
            style={{
              width: "200px",
              position: "relative",
              borderRadius: "74px",
              height: "193.5px",
              objectFit: "cover",
              mixBlendMode: "multiply",
            }}
            width={200}
            height={194}
            alt=""
            src="/CL-2/download-38@2x.png"
          />
          <Box
            sx={{
              width: "139px",
              position: "relative",
              textTransform: "capitalize",
              fontWeight: "600",
              display: "inline-block",
              height: "29px",
              flexShrink: "0",
            }}
          >
            Confluence
          </Box>
        </Box>
        <Box
          sx={{
            flex: 1,
            borderRadius: "40px",
            backgroundColor: "#e1ecff",
            height: "447px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "80px",
            boxSizing: "border-box",
            gap: "35px",
            opacity: "0.8",
            minWidth: "407px",
          }}
        >
          <Image
            style={{
              width: "200px",
              position: "relative",
              borderRadius: "112px",
              height: "200px",
              objectFit: "cover",
              mixBlendMode: "multiply",
            }}
            width={200}
            height={200}
            alt=""
            src="/CL-2/images-13@2x.png"
          />
          <Box
            sx={{
              width: "61px",
              position: "relative",
              textTransform: "capitalize",
              fontWeight: "600",
              display: "inline-block",
              height: "33px",
              flexShrink: "0",
            }}
          >
            <Typography variant="inherit" sx={{ margin: 0 }}>
              Jira
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            flex: 1,
            borderRadius: "40px",
            backgroundColor: "#e1ecff",
            height: "447px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "80px",
            boxSizing: "border-box",
            gap: "35px",
            opacity: "0.8",
            minWidth: "407px",
          }}
        >
          <Image
            style={{
              width: "200px",
              position: "relative",
              borderRadius: "10px",
              height: "196.8px",
              objectFit: "cover",
              mixBlendMode: "multiply",
            }}
            width={200}
            height={197}
            alt=""
            src="/CL-2/download-42@2x.png"
          />
          <Box
            sx={{
              width: "149px",
              position: "relative",
              textTransform: "capitalize",
              fontWeight: "600",
              display: "inline-block",
              height: "56px",
              flexShrink: "0",
            }}
          >
            Jira Product Discovery
          </Box>
        </Box>
        <Box
          sx={{
            flex: 1,
            borderRadius: "40px",
            backgroundColor: "#e1ecff",
            height: "447px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "80px",
            boxSizing: "border-box",
            gap: "35px",
            opacity: "0.8",
            minWidth: "407px",
          }}
        >
          <Image
            style={{
              width: "200px",
              position: "relative",
              borderRadius: "42px",
              height: "194.7px",
              objectFit: "cover",
              mixBlendMode: "multiply",
            }}
            width={200}
            height={195}
            alt=""
            src="/CL-2/download-40@2x.png"
          />
          <Box
            sx={{
              width: "109px",
              position: "relative",
              textTransform: "capitalize",
              fontWeight: "600",
              display: "inline-block",
              height: "32px",
              flexShrink: "0",
            }}
          >
            Airtable
          </Box>
        </Box>
        <Box
          sx={{
            flex: 1,
            borderRadius: "40px",
            backgroundColor: "#e1ecff",
            height: "447px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "80px",
            boxSizing: "border-box",
            gap: "35px",
            opacity: "0.8",
            minWidth: "407px",
          }}
        >
          <Image
            style={{
              width: "200px",
              position: "relative",
              height: "200px",
              objectFit: "cover",
              mixBlendMode: "multiply",
            }}
            width={200}
            height={200}
            alt=""
            src="/CL-2/download-43@2x.png"
          />
          <Box
            sx={{
              width: "67px",
              position: "relative",
              textTransform: "capitalize",
              fontWeight: "600",
              display: "inline-block",
              height: "29px",
              flexShrink: "0",
            }}
          >
            Miro
          </Box>
        </Box>
        <Box
          sx={{
            flex: 1,
            borderRadius: "40px",
            backgroundColor: "#e1ecff",
            height: "447px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "80px",
            boxSizing: "border-box",
            gap: "35px",
            opacity: "0.8",
            minWidth: "407px",
          }}
        >
          <Image
            style={{
              width: "200px",
              position: "relative",
              height: "200px",
              objectFit: "cover",
              mixBlendMode: "multiply",
            }}
            width={200}
            height={200}
            alt=""
            src="/CL-2/download-44@2x.png"
          />
          <Box
            sx={{
              width: "155px",
              position: "relative",
              textTransform: "capitalize",
              fontWeight: "600",
              display: "inline-block",
              height: "29px",
              flexShrink: "0",
            }}
          >
            Lucid Chart
          </Box>
        </Box>
        <Box
          sx={{
            flex: 1,
            borderRadius: "40px",
            backgroundColor: "#e1ecff",
            height: "447px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "80px",
            boxSizing: "border-box",
            gap: "35px",
            opacity: "0.8",
            minWidth: "407px",
          }}
        >
          <Image
            style={{
              width: "200px",
              position: "relative",
              borderRadius: "22px",
              height: "186.3px",
              objectFit: "cover",
              mixBlendMode: "multiply",
            }}
            width={200}
            height={186}
            alt=""
            src="/CL-2/download-46@2x.png"
          />
          <Box
            sx={{
              width: "133px",
              position: "relative",
              textTransform: "capitalize",
              fontWeight: "600",
              display: "inline-block",
              height: "29px",
              flexShrink: "0",
            }}
          >
            <Typography variant="inherit" sx={{ margin: 0 }}>
              Ms Teams
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            flex: 1,
            borderRadius: "40px",
            backgroundColor: "#e1ecff",
            height: "447px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "80px",
            boxSizing: "border-box",
            gap: "35px",
            opacity: "0.8",
            minWidth: "407px",
          }}
        >
          <Image
            style={{
              width: "200px",
              position: "relative",
              borderRadius: "34px",
              height: "200px",
              objectFit: "cover",
              mixBlendMode: "multiply",
            }}
            width={200}
            height={200}
            alt=""
            src="/CL-2/download-45@2x.png"
          />
          <Box
            sx={{
              width: "122px",
              position: "relative",
              textTransform: "capitalize",
              fontWeight: "600",
              display: "inline-block",
              height: "29px",
              flexShrink: "0",
            }}
          >
            Ms Office
          </Box>
        </Box>
        <Box
          sx={{
            flex: 1,
            borderRadius: "40px",
            backgroundColor: "#e1ecff",
            height: "447px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "80px",
            boxSizing: "border-box",
            gap: "35px",
            opacity: "0.8",
            minWidth: "407px",
          }}
        >
          <Image
            style={{
              width: "200px",
              position: "relative",
              borderRadius: "75px",
              height: "200px",
              objectFit: "cover",
              mixBlendMode: "multiply",
            }}
            width={200}
            height={200}
            alt=""
            src="/CL-2/download-451@2x.png"
          />
          <Box
            sx={{
              width: "144px",
              position: "relative",
              textTransform: "capitalize",
              fontWeight: "600",
              display: "inline-block",
              height: "29px",
              flexShrink: "0",
            }}
          >
            Time Doctor
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ConsultancyOutfitTools;
