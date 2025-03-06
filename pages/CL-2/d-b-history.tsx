import type { NextPage } from "next";
import { useCallback } from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

const DBHistory: NextPage = () => {
  const router = useRouter();

  const onVuesaxboldarrowSquareLeftIconClick = useCallback(() => {
    router.push("/CL-2/l-d-c-s-codes");
  }, [router]);

  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        backgroundColor: "#fff",
        height: "1080px",
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
              DB. - History
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: "1852px",
          flex: 1,
          borderRadius: "8px",
          borderWidth: "3px",
          borderStyle: "dashed",
          borderColor: "#0246bc",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "24px",
          gap: "31px",
          color: "#000",
        }}
      >
        <Box
          sx={{
            alignSelf: "stretch",
            flex: 1,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "0px 21px 0px 0px",
            gap: "33px",
          }}
        >
          <Box
            sx={{
              alignSelf: "stretch",
              flex: 1,
              borderRadius: "8px",
              backgroundColor: "#e1ecff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0px 24px",
            }}
          >
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                fontWeight: "500",
              }}
            >
              GCSE (9-1) in History
            </Box>
          </Box>
          <Box
            sx={{
              alignSelf: "stretch",
              flex: 1,
              borderRadius: "8px",
              backgroundColor: "#e1ecff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0px 24px",
            }}
          >
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                fontWeight: "500",
              }}
            >
              GCSE (9-1) in History A (Explaining the Modern World)
            </Box>
          </Box>
          <Box
            sx={{
              alignSelf: "stretch",
              flex: 1,
              borderRadius: "8px",
              backgroundColor: "#e1ecff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0px 24px",
            }}
          >
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                fontWeight: "500",
              }}
            >
              MYP History
            </Box>
          </Box>
          <Box
            sx={{
              alignSelf: "stretch",
              flex: 1,
              borderRadius: "8px",
              backgroundColor: "#e1ecff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0px 24px",
            }}
          >
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                fontWeight: "500",
              }}
            >
              Foundation Degree in History, Heritage and Archaeology
            </Box>
          </Box>
          <Box
            sx={{
              alignSelf: "stretch",
              flex: 1,
              borderRadius: "8px",
              backgroundColor: "#e1ecff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0px 24px",
            }}
          >
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                fontWeight: "500",
              }}
            >
              Foundation Degree in History with English - (South Devon College)
            </Box>
          </Box>
          <Box
            sx={{
              alignSelf: "stretch",
              flex: 1,
              borderRadius: "8px",
              backgroundColor: "#e1ecff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0px 24px",
            }}
          >
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                fontWeight: "500",
              }}
            >
              FdA in History, Heritage and Culture - Truro and Penwith College
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            alignSelf: "stretch",
            flex: 1,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "0px 21px 0px 0px",
            gap: "33px",
          }}
        >
          <Box
            sx={{
              alignSelf: "stretch",
              flex: 1,
              borderRadius: "8px",
              backgroundColor: "#e1ecff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0px 24px",
            }}
          >
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                fontWeight: "500",
              }}
            >
              Foundation Degree in History with English - (Petroc)
            </Box>
          </Box>
          <Box
            sx={{
              alignSelf: "stretch",
              flex: 1,
              borderRadius: "8px",
              backgroundColor: "#e1ecff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0px 24px",
            }}
          >
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                fontWeight: "500",
              }}
            >
              BA (Hons) in Health and Wellbeing and History - Holy Cross College
            </Box>
          </Box>
          <Box
            sx={{
              alignSelf: "stretch",
              flex: 1,
              borderRadius: "8px",
              backgroundColor: "#e1ecff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0px 24px",
            }}
          >
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                fontWeight: "500",
              }}
            >
              BA (Hons) in History and Special Educational Needs - Holy Cross
              College
            </Box>
          </Box>
          <Box
            sx={{
              alignSelf: "stretch",
              flex: 1,
              borderRadius: "8px",
              backgroundColor: "#e1ecff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0px 24px",
            }}
          >
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                fontWeight: "500",
              }}
            >
              Non regulated provision, Level 6, History
            </Box>
          </Box>
          <Box
            sx={{
              alignSelf: "stretch",
              flex: 1,
              borderRadius: "8px",
              backgroundColor: "#e1ecff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0px 24px",
            }}
          >
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                fontWeight: "500",
              }}
            >
              BA (Hons) in Early Childhood and History - Holy Cross College
            </Box>
          </Box>
          <Box
            sx={{
              alignSelf: "stretch",
              flex: 1,
              borderRadius: "8px",
              backgroundColor: "#e1ecff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0px 24px",
            }}
          >
            <Box
              sx={{
                alignSelf: "stretch",
                position: "relative",
                fontWeight: "500",
              }}
            >
              History (City Literary Institute)
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DBHistory;
