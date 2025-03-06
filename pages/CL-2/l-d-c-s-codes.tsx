import type { NextPage } from "next";
import { useCallback } from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

const LDCSCodes: NextPage = () => {
  const router = useRouter();

  const onVuesaxboldarrowSquareLeftIconClick = useCallback(() => {
    router.push("/CL-2/sector-subject-area2-codes");
  }, [router]);

  const onFrameContainerClick = useCallback(() => {
    router.push("/CL-2/d-b-history");
  }, [router]);

  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        backgroundColor: "#fff",
        height: "1334px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "30px",
        boxSizing: "border-box",
        textAlign: "center",
        fontSize: "24px",
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
          justifyContent: "flex-start",
          padding: "24px 10px",
          gap: "10px",
        }}
      >
        <Image
          style={{
            width: "36px",
            position: "relative",
            height: "36px",
            cursor: "pointer",
          }}
          width={36}
          height={36}
          alt=""
          src="/CL-2/vuesaxboldarrowsquareleft.svg"
          onClick={onVuesaxboldarrowSquareLeftIconClick}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <Box sx={{ position: "relative", fontWeight: "500" }}>
              LDCS Category - 10.1-History
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          alignSelf: "stretch",
          borderRadius: "8px",
          borderWidth: "3px",
          borderStyle: "dashed",
          borderColor: "#00a4a6",
          boxSizing: "border-box",
          height: "1186px",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          flexWrap: "wrap",
          alignContent: "flex-start",
          padding: "24px",
          gap: "31px",
          fontSize: "20px",
          color: "#444",
        }}
      >
        <Box
          sx={{
            width: "1820px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "0px 21px 0px 0px",
            boxSizing: "border-box",
            gap: "33px",
          }}
        >
          <Box
            sx={{
              width: "337px",
              borderRadius: "8px",
              backgroundColor: "#fce3e5",
              height: "346px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "30px 24px",
              boxSizing: "border-box",
            }}
          >
            <Box
              sx={{
                position: "relative",
                textTransform: "uppercase",
                fontWeight: "600",
              }}
            >
              DA.83 - Combined Studies
            </Box>
          </Box>
          <Box
            sx={{
              width: "337px",
              borderRadius: "8px",
              backgroundColor: "#e1ecff",
              height: "355px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "30px 24px",
              boxSizing: "border-box",
            }}
          >
            <Box
              sx={{
                width: "251px",
                position: "relative",
                textTransform: "uppercase",
                fontWeight: "600",
                display: "inline-block",
              }}
            >
              DA. - Humanities / General Studies / Combined Studies
            </Box>
          </Box>
          <Box
            sx={{
              width: "337px",
              borderRadius: "8px",
              backgroundColor: "#d4e4ff",
              height: "355px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "30px 24px",
              boxSizing: "border-box",
              cursor: "pointer",
            }}
            onClick={onFrameContainerClick}
          >
            <Box
              sx={{
                position: "relative",
                textTransform: "uppercase",
                fontWeight: "600",
              }}
            >
              DB. - History
            </Box>
          </Box>
          <Box
            sx={{
              width: "337px",
              borderRadius: "8px",
              backgroundColor: "#d3ffed",
              height: "355px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "30px 24px",
              boxSizing: "border-box",
            }}
          >
            <Box
              sx={{
                position: "relative",
                textTransform: "uppercase",
                fontWeight: "600",
              }}
            >
              DB.91 - Genealogy
            </Box>
          </Box>
          <Box
            sx={{
              width: "337px",
              borderRadius: "8px",
              backgroundColor: "#e8e0d3",
              height: "355px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "30px 24px",
              boxSizing: "border-box",
            }}
          >
            <Box
              sx={{
                position: "relative",
                textTransform: "uppercase",
                fontWeight: "600",
              }}
            >
              JA.331 - Art History
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: "1820px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "0px 21px 0px 0px",
            boxSizing: "border-box",
            gap: "33px",
          }}
        >
          <Box
            sx={{
              width: "337px",
              borderRadius: "8px",
              backgroundColor: "#fce3e5",
              height: "346px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "30px 24px",
              boxSizing: "border-box",
            }}
          >
            <Box
              sx={{
                width: "236px",
                position: "relative",
                textTransform: "uppercase",
                fontWeight: "600",
                display: "inline-block",
              }}
            >
              ED. - Social Sciences
            </Box>
          </Box>
          <Box
            sx={{
              width: "337px",
              borderRadius: "8px",
              backgroundColor: "#e1ecff",
              height: "355px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "30px 24px",
              boxSizing: "border-box",
            }}
          >
            <Box
              sx={{
                width: "251px",
                position: "relative",
                textTransform: "uppercase",
                fontWeight: "600",
                display: "inline-block",
              }}
            >
              DB.21 - Ancient History
            </Box>
          </Box>
          <Box
            sx={{
              width: "337px",
              borderRadius: "8px",
              backgroundColor: "#d4e4ff",
              height: "355px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "30px 24px",
              boxSizing: "border-box",
            }}
          >
            <Box
              sx={{
                width: "237px",
                position: "relative",
                textTransform: "uppercase",
                fontWeight: "600",
                display: "inline-block",
              }}
            >
              QA. - Environmental Protection / Conservation
            </Box>
          </Box>
          <Box
            sx={{
              width: "337px",
              borderRadius: "8px",
              backgroundColor: "#d3ffed",
              height: "355px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "30px 24px",
              boxSizing: "border-box",
            }}
          >
            <Box
              sx={{
                width: "207px",
                position: "relative",
                textTransform: "uppercase",
                fontWeight: "600",
                display: "inline-block",
              }}
            >
              DB.25 - Modern History (17Th To 20Th Century)
            </Box>
          </Box>
          <Box
            sx={{
              width: "337px",
              borderRadius: "8px",
              backgroundColor: "#e8e0d3",
              height: "355px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "30px 24px",
              boxSizing: "border-box",
            }}
          >
            <Box
              sx={{
                width: "303px",
                position: "relative",
                textTransform: "uppercase",
                fontWeight: "600",
                display: "inline-block",
              }}
            >
              DB.1 - History (Theoretical)
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "0px 21px 0px 0px",
            boxSizing: "border-box",
            gap: "33px",
            minWidth: "337px",
          }}
        >
          <Box
            sx={{
              width: "582px",
              borderRadius: "8px",
              backgroundColor: "#fce3e5",
              height: "346px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "30px 24px",
              boxSizing: "border-box",
              minWidth: "337px",
            }}
          >
            <Box
              sx={{
                position: "relative",
                textTransform: "uppercase",
                fontWeight: "600",
              }}
            >
              DB.521 - English History
            </Box>
          </Box>
          <Box
            sx={{
              width: "582px",
              borderRadius: "8px",
              backgroundColor: "#e1ecff",
              height: "355px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "30px 24px",
              boxSizing: "border-box",
              minWidth: "337px",
            }}
          >
            <Box
              sx={{
                width: "251px",
                position: "relative",
                textTransform: "uppercase",
                fontWeight: "600",
                display: "inline-block",
              }}
            >
              DB.21 - ADF. - Classics
            </Box>
          </Box>
          <Box
            sx={{
              width: "582px",
              borderRadius: "8px",
              backgroundColor: "#d3ffed",
              height: "355px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "30px 24px",
              boxSizing: "border-box",
              minWidth: "337px",
            }}
          >
            <Box
              sx={{
                width: "237px",
                position: "relative",
                textTransform: "uppercase",
                fontWeight: "600",
                display: "inline-block",
              }}
            >
              DB.751 - Local / Regional Studies
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LDCSCodes;
