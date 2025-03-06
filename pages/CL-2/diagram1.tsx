import type { NextPage } from "next";
import { useCallback } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

const Diagram1: NextPage = () => {
  const router = useRouter();

  const onVuesaxboldarrowSquareLeftClick = useCallback(() => {
    router.push("/CL-2/diagram");
  }, [router]);

  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "30px",
        boxSizing: "border-box",
        gap: "24px",
        textAlign: "left",
        fontSize: "50px",
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
          London Universities
        </Box>
      </Box>
      <Box
        sx={{
          alignSelf: "stretch",
          borderRadius: "8px",
          borderWidth: "3px",
          borderStyle: "dashed",
          borderColor: "#0246bc",
          boxSizing: "border-box",
          height: "1340px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "24px",
          gap: "31px",
          textAlign: "center",
          fontSize: "28px",
          color: "#000",
        }}
      >
        <Box
          sx={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "31px",
          }}
        >
          <Box
            sx={{
              flex: 1,
              borderRadius: "8px",
              backgroundColor: "#e1ecff",
              height: "132px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0px 24px",
              boxSizing: "border-box",
            }}
          >
            <Box sx={{ position: "relative", fontWeight: "500" }}>
              Birkbeck, University of London
            </Box>
          </Box>
          <Box
            sx={{
              flex: 1,
              borderRadius: "8px",
              backgroundColor: "#e1ecff",
              height: "132px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0px 24px",
              boxSizing: "border-box",
            }}
          >
            <Box sx={{ position: "relative", fontWeight: "500" }}>
              Brunel University London
            </Box>
          </Box>
          <Box
            sx={{
              flex: 1,
              borderRadius: "8px",
              backgroundColor: "#e1ecff",
              height: "132px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0px 24px",
              boxSizing: "border-box",
            }}
          >
            <Box sx={{ position: "relative", fontWeight: "500" }}>
              City, University of London
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "31px",
          }}
        >
          <Box
            sx={{
              flex: 1,
              borderRadius: "8px",
              backgroundColor: "#e1ecff",
              height: "132px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0px 24px",
              boxSizing: "border-box",
            }}
          >
            <Box sx={{ position: "relative", fontWeight: "500" }}>
              Goldsmiths, University of London
            </Box>
          </Box>
          <Box
            sx={{
              flex: 1,
              borderRadius: "8px",
              backgroundColor: "#e1ecff",
              height: "132px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0px 24px",
              boxSizing: "border-box",
            }}
          >
            <Box sx={{ position: "relative", fontWeight: "500" }}>
              Imperial College London
            </Box>
          </Box>
          <Box
            sx={{
              flex: 1,
              borderRadius: "8px",
              backgroundColor: "#e1ecff",
              height: "132px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0px 24px",
              boxSizing: "border-box",
            }}
          >
            <Box sx={{ position: "relative", fontWeight: "500" }}>
              King's College London
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "31px",
          }}
        >
          <Box
            sx={{
              flex: 1,
              borderRadius: "8px",
              backgroundColor: "#e1ecff",
              height: "132px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0px 24px",
              boxSizing: "border-box",
            }}
          >
            <Box sx={{ position: "relative", fontWeight: "500" }}>
              Kingston University
            </Box>
          </Box>
          <Box
            sx={{
              flex: 1,
              borderRadius: "8px",
              backgroundColor: "#e1ecff",
              height: "132px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0px 24px",
              boxSizing: "border-box",
            }}
          >
            <Box sx={{ position: "relative", fontWeight: "500" }}>
              London Metropolitan University
            </Box>
          </Box>
          <Box
            sx={{
              flex: 1,
              borderRadius: "8px",
              backgroundColor: "#e1ecff",
              height: "132px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0px 24px",
              boxSizing: "border-box",
            }}
          >
            <Box sx={{ position: "relative", fontWeight: "500" }}>
              <Typography variant="inherit" sx={{ margin: 0 }}>
                London School of Economics and
              </Typography>
              <Typography variant="inherit" sx={{ margin: 0 }}>
                Political Science (LSE)
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "31px",
          }}
        >
          <Box
            sx={{
              flex: 1,
              borderRadius: "8px",
              backgroundColor: "#e1ecff",
              height: "132px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0px 24px",
              boxSizing: "border-box",
            }}
          >
            <Box sx={{ position: "relative", fontWeight: "500" }}>
              London South Bank University
            </Box>
          </Box>
          <Box
            sx={{
              flex: 1,
              borderRadius: "8px",
              backgroundColor: "#e1ecff",
              height: "132px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0px 24px",
              boxSizing: "border-box",
            }}
          >
            <Box sx={{ position: "relative", fontWeight: "500" }}>
              Middlesex University
            </Box>
          </Box>
          <Box
            sx={{
              flex: 1,
              borderRadius: "8px",
              backgroundColor: "#e1ecff",
              height: "132px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0px 24px",
              boxSizing: "border-box",
            }}
          >
            <Box sx={{ position: "relative", fontWeight: "500" }}>
              Queen Mary University of London
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "31px",
          }}
        >
          <Box
            sx={{
              flex: 1,
              borderRadius: "8px",
              backgroundColor: "#e1ecff",
              height: "132px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0px 24px",
              boxSizing: "border-box",
            }}
          >
            <Box sx={{ position: "relative", fontWeight: "500" }}>
              Royal College of Art
            </Box>
          </Box>
          <Box
            sx={{
              flex: 1,
              borderRadius: "8px",
              backgroundColor: "#e1ecff",
              height: "132px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0px 24px",
              boxSizing: "border-box",
            }}
          >
            <Box sx={{ position: "relative", fontWeight: "500" }}>
              Royal College of Music
            </Box>
          </Box>
          <Box
            sx={{
              flex: 1,
              borderRadius: "8px",
              backgroundColor: "#e1ecff",
              height: "132px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0px 24px",
              boxSizing: "border-box",
            }}
          >
            <Box sx={{ position: "relative", fontWeight: "500" }}>
              Royal Veterinary College
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "31px",
          }}
        >
          <Box
            sx={{
              flex: 1,
              borderRadius: "8px",
              backgroundColor: "#e1ecff",
              height: "132px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0px 24px",
              boxSizing: "border-box",
            }}
          >
            <Box sx={{ position: "relative", fontWeight: "500" }}>
              SOAS, University of London
            </Box>
          </Box>
          <Box
            sx={{
              flex: 1,
              borderRadius: "8px",
              backgroundColor: "#e1ecff",
              height: "132px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0px 24px",
              boxSizing: "border-box",
            }}
          >
            <Box sx={{ position: "relative", fontWeight: "500" }}>
              St Mary's University, Twickenham
            </Box>
          </Box>
          <Box
            sx={{
              flex: 1,
              borderRadius: "8px",
              backgroundColor: "#e1ecff",
              height: "132px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0px 24px",
              boxSizing: "border-box",
            }}
          >
            <Box sx={{ position: "relative", fontWeight: "500" }}>
              University College London (UCL)
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "31px",
          }}
        >
          <Box
            sx={{
              flex: 1,
              borderRadius: "8px",
              backgroundColor: "#e1ecff",
              height: "132px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0px 24px",
              boxSizing: "border-box",
            }}
          >
            <Box sx={{ position: "relative", fontWeight: "500" }}>
              University of East London
            </Box>
          </Box>
          <Box
            sx={{
              flex: 1,
              borderRadius: "8px",
              backgroundColor: "#e1ecff",
              height: "132px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0px 24px",
              boxSizing: "border-box",
            }}
          >
            <Box
              sx={{
                width: "304px",
                position: "relative",
                fontWeight: "500",
                display: "inline-block",
              }}
            >
              University of Greenwich
            </Box>
          </Box>
          <Box
            sx={{
              flex: 1,
              borderRadius: "8px",
              backgroundColor: "#e1ecff",
              height: "132px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0px 24px",
              boxSizing: "border-box",
            }}
          >
            <Box sx={{ position: "relative", fontWeight: "500" }}>
              University of Roehampton
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "31px",
          }}
        >
          <Box
            sx={{
              flex: 1,
              borderRadius: "8px",
              backgroundColor: "#e1ecff",
              height: "132px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0px 24px",
              boxSizing: "border-box",
            }}
          >
            <Box sx={{ position: "relative", fontWeight: "500" }}>
              University of the Arts London
            </Box>
          </Box>
          <Box
            sx={{
              flex: 1,
              borderRadius: "8px",
              backgroundColor: "#e1ecff",
              height: "132px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0px 24px",
              boxSizing: "border-box",
            }}
          >
            <Box sx={{ position: "relative", fontWeight: "500" }}>
              University of West London
            </Box>
          </Box>
          <Box
            sx={{
              flex: 1,
              borderRadius: "8px",
              backgroundColor: "#e1ecff",
              height: "132px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0px 24px",
              boxSizing: "border-box",
            }}
          >
            <Box sx={{ position: "relative", fontWeight: "500" }}>
              University of Westminster
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Diagram1;
