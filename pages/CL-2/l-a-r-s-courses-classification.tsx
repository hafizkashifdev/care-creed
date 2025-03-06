import type { NextPage } from "next";
import { useCallback } from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

const LARSCoursesClassification: NextPage = () => {
  const router = useRouter();

  const onVuesaxboldarrowSquareLeftClick = useCallback(() => {
    router.push("/CL-2/care-library");
  }, [router]);

  const onWdgtContainerClick = useCallback(() => {
    router.push("/CL-2/sector-subject-area2-codes");
  }, [router]);

  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        backgroundColor: "#fff",
        height: "2795px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "116px",
        boxSizing: "border-box",
        gap: "69.6px",
        textAlign: "left",
        fontSize: "80px",
        color: "#0246bc",
        fontFamily: "Inter",
      }}
    >
      <Box
        sx={{
          width: "1421px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "46.4px",
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
          src="/CL-2/vuesaxboldarrowsquareleft4.svg"
          onClick={onVuesaxboldarrowSquareLeftClick}
        />
        <Box
          sx={{
            width: "1323px",
            position: "relative",
            fontWeight: "600",
            display: "inline-block",
            flexShrink: "0",
          }}
        >
          Sector Subject Area Tier 1 Codes
        </Box>
      </Box>
      <Box
        sx={{
          alignSelf: "stretch",
          height: "2453px",
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
            justifyContent: "flex-end",
            padding: "80px",
            boxSizing: "border-box",
            gap: "35px",
            opacity: "0.8",
            minWidth: "407px",
          }}
        >
          <Image
            style={{
              width: "128px",
              position: "relative",
              height: "128px",
              objectFit: "cover",
            }}
            width={128}
            height={128}
            alt=""
            src="/CL-2/2861721-1@2x.png"
          />
          <Box
            sx={{
              width: "359px",
              position: "relative",
              textTransform: "capitalize",
              fontWeight: "600",
              display: "inline-block",
              height: "89px",
              flexShrink: "0",
            }}
          >
            4-Engineering and Manufacturing Technologies
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
            justifyContent: "center",
            padding: "80px",
            boxSizing: "border-box",
            gap: "35px",
            opacity: "0.8",
            minWidth: "407px",
          }}
        >
          <Image
            style={{
              width: "128px",
              position: "relative",
              height: "128px",
              objectFit: "cover",
            }}
            width={128}
            height={128}
            alt=""
            src="/CL-2/16788057-1@2x.png"
          />
          <Box
            sx={{
              width: "213px",
              position: "relative",
              textTransform: "capitalize",
              fontWeight: "600",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "55px",
              flexShrink: "0",
            }}
          >
            -2-Not Applicable
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
            padding: "115px 80px 80px",
            boxSizing: "border-box",
            position: "relative",
            gap: "67px",
            opacity: "0.8",
            minWidth: "407px",
          }}
        >
          <Image
            style={{
              width: "128px",
              position: "relative",
              height: "128px",
              objectFit: "cover",
              zIndex: "0",
            }}
            width={128}
            height={128}
            alt=""
            src="/CL-2/image-1@2x.png"
          />
          <Box
            sx={{
              width: "169px",
              position: "relative",
              textTransform: "capitalize",
              fontWeight: "600",
              display: "inline-block",
              height: "31px",
              flexShrink: "0",
              zIndex: "1",
            }}
          >
            -1-Unknown
          </Box>
          <Box
            sx={{
              width: "127px",
              position: "absolute",
              margin: "0 !important",
              top: "24.5px",
              right: "24px",
              textTransform: "capitalize",
              fontWeight: "600",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "55px",
              flexShrink: "0",
              zIndex: "2",
            }}
          >{`Count:00 `}</Box>
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
            padding: "115px 80px 80px",
            boxSizing: "border-box",
            position: "relative",
            gap: "67px",
            opacity: "0.8",
            minWidth: "407px",
          }}
        >
          <Image
            style={{
              width: "128px",
              position: "relative",
              height: "128px",
              objectFit: "cover",
              zIndex: "0",
            }}
            width={128}
            height={128}
            alt=""
            src="/CL-2/image-2@2x.png"
          />
          <Box
            sx={{
              alignSelf: "stretch",
              position: "relative",
              textTransform: "capitalize",
              fontWeight: "600",
              display: "inline-block",
              height: "55px",
              flexShrink: "0",
              zIndex: "1",
            }}
          >
            1-Health, Public Services and Care
          </Box>
          <Box
            sx={{
              width: "127px",
              position: "absolute",
              margin: "0 !important",
              top: "24.5px",
              right: "24px",
              textTransform: "capitalize",
              fontWeight: "600",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "55px",
              flexShrink: "0",
              zIndex: "2",
            }}
          >{`Count:00 `}</Box>
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
            padding: "115px 80px 80px",
            boxSizing: "border-box",
            gap: "67px",
            opacity: "0.8",
            minWidth: "407px",
          }}
        >
          <Image
            style={{
              width: "128px",
              position: "relative",
              height: "128px",
              objectFit: "cover",
            }}
            width={128}
            height={128}
            alt=""
            src="/CL-2/image-3@2x.png"
          />
          <Box
            sx={{
              width: "185px",
              position: "relative",
              textTransform: "capitalize",
              fontWeight: "600",
              display: "inline-block",
              height: "48px",
              flexShrink: "0",
            }}
          >{`2-Science & Mathematics`}</Box>
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
            padding: "115px 80px 80px",
            boxSizing: "border-box",
            gap: "67px",
            opacity: "0.8",
            minWidth: "407px",
          }}
        >
          <Image
            style={{
              width: "128px",
              position: "relative",
              height: "128px",
              objectFit: "cover",
            }}
            width={128}
            height={128}
            alt=""
            src="/CL-2/image-4@2x.png"
          />
          <Box
            sx={{
              width: "313px",
              position: "relative",
              textTransform: "capitalize",
              fontWeight: "600",
              display: "inline-block",
              height: "85px",
              flexShrink: "0",
            }}
          >
            3-Agriculture, Horticulture and Animal Care
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
            padding: "115px 80px 80px",
            boxSizing: "border-box",
            gap: "67px",
            opacity: "0.8",
            minWidth: "407px",
          }}
        >
          <Image
            style={{
              width: "128px",
              position: "relative",
              height: "128px",
              objectFit: "cover",
            }}
            width={128}
            height={128}
            alt=""
            src="/CL-2/2942499-1@2x.png"
          />
          <Box
            sx={{
              width: "373px",
              position: "relative",
              textTransform: "capitalize",
              fontWeight: "600",
              display: "inline-block",
              height: "87px",
              flexShrink: "0",
            }}
          >
            5-Construction, Planning and the Built Environment
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
            padding: "115px 80px 80px",
            boxSizing: "border-box",
            gap: "67px",
            opacity: "0.8",
            minWidth: "407px",
          }}
        >
          <Image
            style={{
              width: "128px",
              position: "relative",
              height: "128px",
              objectFit: "cover",
            }}
            width={128}
            height={128}
            alt=""
            src="/CL-2/2171148-1@2x.png"
          />
          <Box
            sx={{
              alignSelf: "stretch",
              position: "relative",
              textTransform: "capitalize",
              fontWeight: "600",
              display: "inline-block",
              height: "38px",
              flexShrink: "0",
            }}
          >
            6-Digital Technology
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
            padding: "115px 80px 80px",
            boxSizing: "border-box",
            gap: "67px",
            opacity: "0.8",
            minWidth: "407px",
          }}
        >
          <Image
            style={{
              width: "128px",
              position: "relative",
              height: "128px",
              objectFit: "cover",
            }}
            width={128}
            height={128}
            alt=""
            src="/CL-2/16498882-1@2x.png"
          />
          <Box
            sx={{
              width: "367px",
              position: "relative",
              textTransform: "capitalize",
              fontWeight: "600",
              display: "inline-block",
              height: "47px",
              flexShrink: "0",
            }}
          >
            7-Retail and Commercial Enterprise
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
            padding: "115px 80px 80px",
            boxSizing: "border-box",
            gap: "67px",
            opacity: "0.8",
            minWidth: "407px",
          }}
        >
          <Image
            style={{
              width: "128px",
              position: "relative",
              height: "128px",
              objectFit: "cover",
            }}
            width={128}
            height={128}
            alt=""
            src="/CL-2/18395705-1@2x.png"
          />
          <Box
            sx={{
              width: "373px",
              position: "relative",
              textTransform: "capitalize",
              fontWeight: "600",
              display: "inline-block",
            }}
          >
            8-Leisure, Travel and Tourism
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
            padding: "115px 80px 80px",
            boxSizing: "border-box",
            gap: "67px",
            opacity: "0.8",
            minWidth: "407px",
          }}
        >
          <Image
            style={{
              width: "128px",
              position: "relative",
              height: "128px",
              objectFit: "cover",
            }}
            width={128}
            height={128}
            alt=""
            src="/CL-2/2400603-1@2x.png"
          />
          <Box
            sx={{
              width: "377px",
              position: "relative",
              textTransform: "capitalize",
              fontWeight: "600",
              display: "inline-block",
              height: "76px",
              flexShrink: "0",
            }}
          >
            9-Arts, Media and Publishing
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
            padding: "115px 80px 80px",
            boxSizing: "border-box",
            gap: "67px",
            opacity: "0.8",
            minWidth: "407px",
            cursor: "pointer",
          }}
          onClick={onWdgtContainerClick}
        >
          <Image
            style={{
              width: "128px",
              position: "relative",
              height: "128px",
              objectFit: "cover",
            }}
            width={128}
            height={128}
            alt=""
            src="/CL-2/2550251-1@2x.png"
          />
          <Box
            sx={{
              width: "351px",
              position: "relative",
              textTransform: "capitalize",
              fontWeight: "600",
              display: "inline-block",
              height: "76px",
              flexShrink: "0",
            }}
          >
            10-History, Philosophy and Theology
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
            padding: "115px 80px 80px",
            boxSizing: "border-box",
            gap: "67px",
            opacity: "0.8",
            minWidth: "407px",
          }}
        >
          <Image
            style={{
              width: "128px",
              position: "relative",
              height: "128px",
              objectFit: "cover",
            }}
            width={128}
            height={128}
            alt=""
            src="/CL-2/3079289-1@2x.png"
          />
          <Box
            sx={{
              alignSelf: "stretch",
              position: "relative",
              textTransform: "capitalize",
              fontWeight: "600",
              display: "inline-block",
              height: "76px",
              flexShrink: "0",
            }}
          >
            11-Social Sciences
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
            padding: "115px 80px 80px",
            boxSizing: "border-box",
            gap: "67px",
            opacity: "0.8",
            minWidth: "407px",
          }}
        >
          <Image
            style={{
              width: "128px",
              position: "relative",
              height: "128px",
              objectFit: "cover",
            }}
            width={128}
            height={128}
            alt=""
            src="/CL-2/3898082-1@2x.png"
          />
          <Box
            sx={{
              width: "383px",
              position: "relative",
              textTransform: "capitalize",
              fontWeight: "600",
              display: "inline-block",
              height: "76px",
              flexShrink: "0",
            }}
          >
            12-Languages, Literature and Culture
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
            padding: "115px 80px 80px",
            boxSizing: "border-box",
            gap: "67px",
            opacity: "0.8",
            minWidth: "407px",
          }}
        >
          <Image
            style={{
              width: "128px",
              position: "relative",
              height: "128px",
              objectFit: "cover",
            }}
            width={128}
            height={128}
            alt=""
            src="/CL-2/1831971-1@2x.png"
          />
          <Box
            sx={{
              width: "407px",
              position: "relative",
              textTransform: "capitalize",
              fontWeight: "600",
              display: "inline-block",
              height: "76px",
              flexShrink: "0",
            }}
          >
            13-Education and Training
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
            padding: "115px 80px 80px",
            boxSizing: "border-box",
            gap: "67px",
            opacity: "0.8",
            minWidth: "407px",
          }}
        >
          <Image
            style={{
              width: "128px",
              position: "relative",
              height: "128px",
              objectFit: "cover",
            }}
            width={128}
            height={128}
            alt=""
            src="/CL-2/2644373-1@2x.png"
          />
          <Box
            sx={{
              width: "351px",
              position: "relative",
              textTransform: "capitalize",
              fontWeight: "600",
              display: "inline-block",
              height: "76px",
              flexShrink: "0",
            }}
          >
            14-Preparation for Life and Work
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
            padding: "115px 80px 80px",
            boxSizing: "border-box",
            gap: "67px",
            opacity: "0.8",
            minWidth: "407px",
          }}
        >
          <Image
            style={{
              width: "128px",
              position: "relative",
              height: "128px",
              objectFit: "cover",
            }}
            width={128}
            height={128}
            alt=""
            src="/CL-2/3135727-1@2x.png"
          />
          <Box
            sx={{
              alignSelf: "stretch",
              position: "relative",
              textTransform: "capitalize",
              fontWeight: "600",
              display: "inline-block",
              height: "76px",
              flexShrink: "0",
            }}
          >
            15-Business, Administration and Law
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LARSCoursesClassification;
